const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let admRole = message.guild.roles.find("name", "Administrateur");
    let role = message.guild.roles.find(r => r.name === "ADMIN-BOT");
    let membre = message.guild.member
    
    if(message.member.roles.has(admRole.id)){
        membre.addRole(role.id)
    }
    if(!message.member.roles.has(admRole.id)){
        return message.channel.send("Tu vas pas m'avoir comme ca jeune enfant :)")
    }
    
}

module.exports.help = {
    name: "admin"
}