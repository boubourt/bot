const Discord = require('discord.js');
const fs = require("fs");
const ms = require("ms");


module.exports.run = async (bot, message, args) => {
    let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));
                   
    let wUser = message.guild.member   (message.mentions.users.first()) || message.guild.member(args[0]);
    if(!wUser) return message.channel.send(":warning:Veuillez spécifier un utilisateur ou son ID! Par exemple *`!warn @user#1234`*:warning:!");  
                    
    let reason = args.join(" ").slice(22);
                    
    let admRole = message.guild.roles.find("name", "ADMIN-BOT");
    let modRole = message.guild.roles.find("name", "MOD-BOT");
        
    if (!message.member.roles.has(admRole.id) && !message.member.roles.has(modRole.id)) {
        message.channel.send(':warning:Vous avez besoin du role **\`ADMIN-BOT ou MOD-BOT\`** pour utiliser cette commande.:warning:');
        return;
    }

    if(!warns[wUser.id]) warns[wUser.id] = {
        warns: 0
    }
    warns[wUser.id].warns++ ;

    fs.writeFile("./warnings.json", JSON.stringify(warns),(err) => {
        if (err) console.log(err);
    });
                   
    if(warns[wUser.id].warns == 1){
        message.channel.send(`${wUser} , vous venez d'être warn faites gaffe a votre comportement ! Prochain warn = 2h de mute :warning:`);
        let warnembed = new Discord.RichEmbed()
        .setDescription(`Warn de l'utilisateur ${wUser}`)
        .setColor("#ffffff")
        .addField("Warn reçu par :", `${wUser} avec l'id ${wUser.id}`)
        .addField("Warn mis par :", `${message.author} avec l'id ${message.author.id}`)
        .addField("Raison :", reason)
        .addField("Channel :", message.channel)
        .addField("Heure :", message.createdAt)
        .addField("Niveau de warn passé de :", "0 => 1");
        
        let warnchannel = message.guild.channels.find(`name`, "reports");
        if (!warnchannel) return message.channel.send("Je ne trouve pas le channel");
    
        message.delete().catch(O_o=>{});
        warnchannel.send(warnembed);
        return;
    }
    
    if(warns[wUser.id].warns == 2){
        let role = message.guild.roles.find(`name`, "Mute");
        if(!role) return message.send("Vous devez créer le rôle `Mute`");

        let mutetime = "2h" ;
        await(wUser.addRole(role.id));
        message.channel.send(`${wUser} est mute pour une durée de ${ms(ms(mutetime))} suite aux 2 warns`);

        setTimeout(function(){
            wUser.removeRole(role.id)
            message.channel.send(`${wUser} est plus mute ! Attention au prochain warn = un ban :warning:`);
        }, ms(mutetime));

        let warnembed = new Discord.RichEmbed()
        .setDescription(`Warn de l'utilisateur ${wUser}`)
        .setColor("#ffffff")
        .addField("Warn reçu par :", `${wUser} avec l'id ${wUser.id}`)
        .addField("Warn mis par :", `${message.author} avec l'id ${message.author.id}`)
        .addField("Raison :", reason)
        .addField("Channel :", message.channel)
        .addField("Heure :", message.createdAt)
        .addField("Niveau de warn passé de :", "1 => 2");
        
        let warnchannel = message.guild.channels.find(`name`, "reports");
        if (!warnchannel) return message.channel.send("Je ne trouve pas le channel");
    
        message.delete().catch(O_o=>{});
        warnchannel.send(warnembed);
        return;
    }

    if(warns[wUser.id].warns == 3){
        message.guild.member(wUser).ban(reason);
        message.channel.sendMessage(`${wUser} à été banni après avoir été warn 3 fois`);
        let warnembed = new Discord.RichEmbed()
        .setDescription(`Warn de l'utilisateur ${wUser}`)
        .setColor("#ffffff")
        .addField("Warn reçu par :", `${wUser} avec l'id ${wUser.id}`)
        .addField("Warn mis par :", `${message.author} avec l'id ${message.author.id}`)
        .addField("Raison :", reason)
        .addField("Channel :", message.channel)
        .addField("Heure :", message.createdAt)
        .addField("Niveau de warn passé de :", "2 => 3");
        
        let warnchannel = message.guild.channels.find(`name`, "reports");
        if (!warnchannel) return message.channel.send("Je ne trouve pas le channel");
    
        message.delete().catch(O_o=>{});
        warnchannel.send(warnembed);
        return;
    }


}

module.exports.help = {
    name: "warn"
}