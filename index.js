const Discord = require('discord.js');
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const fs = require("fs");
const mysql = require('mysql')


function loadCmds () {
    fs.readdir("./commands/", (err, files) => {
    
        let jsfile = files.filter(f => f.split(".").pop() === "js")
        if(jsfile.length <= 0){
            console.log("Je ne peux pas trouver de commandes");
            return;
        }
    
        jsfile.forEach((f, i) =>{
            delete require.cache[require.resolve(`./commands/${f}`)];
            var cmds = require(`./commands/${f}`);
            console.log(`${f} chargé`);
            bot.commands.set(cmds.help.name, cmds);
        });
    
    });

    fs.readdir('./events/', (err, files) => {
        if (err) return console.error;
        files.forEach(file => {
          if (!file.endsWith('.js')) return;
          const evt = require(`./events/${file}`);
          let evtName = file.split('.')[0];
          console.log(`Loaded event '${evtName}'`);
         bot.on(evtName, evt.bind(null, bot));
        });
      });
      
}


loadCmds();


bot.on("message", async message => {
    var sender = message.author
    var msg = message.content.toUpperCase();
    var prefix = '!'
    var cont = message.content.slice(prefix.length).split(" ");
    var args = cont.slice(1);   
 

    if(!message.content.startsWith(prefix)) return;

    var cmd = bot.commands.get(cont[0]);
    if(cmd) cmd.run(bot, message, args);

    if (msg === prefix + 'RELOAD'){
        let admRole = message.guild.roles.find("name", "ADMIN-BOT");
        if(!message.member.roles.has(admRole.id)){
            message.channel.send(`${message.author} Tu ne peux pas faire cela car tu n'as pas les permissions suffisantes`)
            return;
        }
        message.channel.send(`Les commandes viennent d'être reload ${message.author}`)
        loadCmds()
    }

});




bot.on("ready", () => {
    console.log('Je suis chargé à 100% !');
		bot.user.setActivity(`${bot.user.username} est disponible sur votre serveur !`);
});
    //Rejoindre serveur
bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
        return channel.send(`Bienvenue sur le serveur ! Nous sommes ravis de ton arrivée ${member.displayName} ! :wink:`);
    }).catch(console.error)
});


    //Quitter serveur
bot.on('guildMemberRemove', member => {
    member.createDM().then(channel => {
        return channel.send(`A bientôt sur le serveur  ${member.displayName} ! :wave:`);
    }).catch(console.error)
});



bot.login("")