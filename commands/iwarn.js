const Discord = require('discord.js');
const fs = require("fs");

module.exports.run = async (bot, message, args) =>{
    let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));
                   
    let iwarnUser = message.guild.member   (message.mentions.users.first()) || message.guild.member(args[0]);
    if(!iwarnUser) return message.channel.send(":warning:Veuillez spécifier un utilisateur ou son ID! Par exemple *`!iwarn @user#1234`*:warning:!");  
                    
    let admRole = message.guild.roles.find("name", "ADMIN-BOT");
    let modRole = message.guild.roles.find("name", "MOD-BOT");
        
    if (!message.member.roles.has(admRole.id) && !message.member.roles.has(modRole.id)) {
        message.channel.send(':warning:Vous avez besoin du role **\`ADMIN-BOT ou MOD-BOT\`** pour utiliser cette commande.:warning:');
        return;
    }
    
    
    if(!warns[iwarnUser.id]);{
        let iwarnembed = new Discord.RichEmbed()
        .setDescription(`Nombre de warn de ${iwarnUser}`)
        .setColor("#ffffff")
        .addField("Utilisateur demandé:", `${iwarnUser} avec l'id ${iwarnUser.id}`)
        .addField("Report envoyé par:", `${message.author} avec l'id ${message.author.id}`)
        .addField("Channel :", message.channel)
        .addField("Heure :", message.createdAt)
        .addField("Nombre de report du joueur demandé :", 0);
        let iwarnchannel = message.guild.channels.find(`name`, "reports");
        if (!iwarnchannel) return message.channel.send("Je ne trouve pas le channel");
    
        message.delete().catch(O_o=>{});
        dwarnchannel.send(iwarnembed);
    
        return; 
    }
        

    if(warns[iwarnUser.id].warns == 1){
        let iwarnembed = new Discord.RichEmbed()
        .setDescription(`Nombre de warn de ${iwarnUser}`)
        .setColor("#ffffff")
        .addField("Utilisateur demandé:", `${iwarnUser} avec l'id ${iwarnUser.id}`)
        .addField("Report envoyé par:", `${message.author} avec l'id ${message.author.id}`)
        .addField("Channel :", message.channel)
        .addField("Heure :", message.createdAt)
        .addField("Nombre de report du joueur demandé :", 1);
        let iwarnchannel = message.guild.channels.find(`name`, "reports");
        if (!iwarnchannel) return message.channel.send("Je ne trouve pas le channel");
    
        message.delete().catch(O_o=>{});
        dwarnchannel.send(iwarnembed);
    
        return; 
    }

    if(warns[iwarnUser.id].warns == 2){
        let iwarnembed = new Discord.RichEmbed()
        .setDescription(`Nombre de warn de ${iwarnUser}`)
        .setColor("#ffffff")
        .addField("Utilisateur demandé:", `${iwarnUser} avec l'id ${iwarnUser.id}`)
        .addField("Report envoyé par:", `${message.author} avec l'id ${message.author.id}`)
        .addField("Channel :", message.channel)
        .addField("Heure :", message.createdAt)
        .addField("Nombre de report du joueur demandé :", 2);
        let iwarnchannel = message.guild.channels.find(`name`, "reports");
        if (!iwarnchannel) return message.channel.send("Je ne trouve pas le channel");
    
        message.delete().catch(O_o=>{});
        dwarnchannel.send(iwarnembed);
    
        return; 
    }
      

}
module.exports.help = {
    name: "iwarn"
}