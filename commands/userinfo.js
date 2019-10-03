const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let userinfo = message.guild.member   (message.mentions.users.first()) || message.guild.member(args[0]);
    message.delete();
    const member = message.mentions.members.first();
   
   
    let userinfoembed = new Discord.RichEmbed()
            .setAuthor("userinfo")
            .setDescription("Info de l'utilisateur :")
            .setColor ("#ff0000")
            .addField("Pseudo :", `${member}`)
            .addField("ID discord du joueur :", `${member.id}`)
            .addField("Compte crée le:", `${message.author.createdAt}`)
        message.channel.send(userinfoembed);

    return;
}

module.exports.help = {
    name: "userinfo"
}