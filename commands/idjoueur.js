const Discord = require('discord.js');

module.exports.run = async (bot, message, args) =>{
    let admRole = message.guild.roles.find("name", "ADMIN-BOT");

    if (!message.member.roles.has(admRole.id)){
        message.channel.send("Tu es un putain de soumis de gueux de tes grands morts les enculés de poissons panés")
        return;
    }
    let toIdjoueur = message.guild.member   (message.mentions.users.first()) || message.guild.member(args[0]);
    message.delete();
    const member = message.mentions.members.first();
    if(!toIdjoueur) return message.channel.sendMessage(":warning:Veuillez spécifier un utilisateur ou son ID! Par exemple *`!idjoueur @user#1234`*:warning:!");

    message.channel.send(`${member.id} voila l'id discord de ce joueur ${message.author}`)

    return;
}

module.exports.help = {
    name: "idjoueur"
}