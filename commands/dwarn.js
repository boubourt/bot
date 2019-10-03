const Discord = require('discord.js');
const fs = require("fs");



module.exports.run = async (bot, message, args) => {
    let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));
                   
    let dUser = message.guild.member   (message.mentions.users.first()) || message.guild.member(args[0]);
    if(!dUser) return message.channel.send(":warning:Veuillez spécifier un utilisateur ou son ID! Par exemple *`!dwarn @user#1234`*:warning:!");  
                    
    let admRole = message.guild.roles.find("name", "ADMIN-BOT");
    let modRole = message.guild.roles.find("name", "MOD-BOT");
        
    if (!message.member.roles.has(admRole.id) && !message.member.roles.has(modRole.id)) {
        message.channel.send(':warning:Vous avez besoin du role **\`ADMIN-BOT ou MOD-BOT\`** pour utiliser cette commande.:warning:');
        return;
    }

    if(!warns[dUser.id]) warns[dUser.id] = {
        warns: 0
    }
    
    warns[dUser.id].warns-- ;


    fs.writeFile("./warnings.json", JSON.stringify(warns),(err) => {
        if (err) console.log(err);
    });

    if(warns[dUser.id].warns == 0){
        let dwarnembed = new Discord.RichEmbed()
        .setDescription(`Retrait d'un warn pour ${dUser}`)
        .setColor("#ffffff")
        .addField("Utilisateur demandé:", `${dUser} avec l'id ${dUser.id}`)
        .addField("Diminution du warn fait par:", `${message.author} avec l'id ${message.author.id}`)
        .addField("Channel :", message.channel)
        .addField("Heure :", message.createdAt)
        .addField("Diminution du niveau de warn de :", "1 => 0");
        let dwarnchannel = message.guild.channels.find(`name`, "reports");
        if (!dwarnchannel) return message.channel.send("Je ne trouve pas le channel");
    
        message.delete().catch(O_o=>{});
        dwarnchannel.send(dwarnembed);
    
        return;
    }
    
    
    if(warns[dUser.id].warns == 1){
        let dwarnembed = new Discord.RichEmbed()
        .setDescription(`Retrait d'un warn pour ${dUser}`)
        .setColor("#ffffff")
        .addField("Utilisateur demandé:", `${dUser} avec l'id ${dUser.id}`)
        .addField("Diminution du warn fait par:", `${message.author} avec l'id ${message.author.id}`)
        .addField("Channel :", message.channel)
        .addField("Heure :", message.createdAt)
        .addField("Diminution du niveau de warn de :", "2 => 1");
        
        let dwarnchannel = message.guild.channels.find(`name`, "reports");
        if (!dwarnchannel) return message.channel.send("Je ne trouve pas le channel");
    
        message.delete().catch(O_o=>{});
        dwarnchannel.send(dwarnembed);
    
        return;
    }

    if(warns[dUser.id].warns < 0){
        warns[dUser.id].warns++ ;
        return;

        let dwarnembed = new Discord.RichEmbed()
        .setDescription(`Retrait d'un warn pour ${dUser}`)
        .setColor("#ffffff")
        .addField("Utilisateur demandé:", `${dUser} avec l'id ${dUser.id}`)
        .addField("Diminution du warn fait par:", `${message.author} avec l'id ${message.author.id}`)
        .addField("Channel :", message.channel)
        .addField("Heure :", message.createdAt)
        .addField("Diminution du niveau de warn de :", "-1 => 0");
        
        let dwarnchannel = message.guild.channels.find(`name`, "reports");
        if (!dwarnchannel) return message.channel.send("Je ne trouve pas le channel");
    
        message.delete().catch(O_o=>{});
        dwarnchannel.send(dwarnembed);

    
        
    }




   
}
module.exports.help = {
    name: "dwarn"
}