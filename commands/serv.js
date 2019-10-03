const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed()
    .setAuthor("Serveur")
    .setDescription("Information du serveur")
    .setColor ("#1fa775")
    .addField("Site :", "https://www.hawkcraft.fr")
    .addField("IP :", "hawkcraft.fr")
    .addField("Version du serveur :", "1.12.2")
    .addField("Twitter :", "https://twitter.com/_Hawkcraft_")
    .addField("Facebook :","https://www.facebook.com/hawkcraft.fr");

message.channel.send(embed);

return; 
}

module.exports.help = {
    name: "serv"
}