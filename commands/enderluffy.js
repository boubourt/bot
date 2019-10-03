const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed()
    .setAuthor("enderluffy")
    .setDescription("Tout savoir sur enderluffy :")
    .setColor ("#e2570f")
    .addField("Rang :", "Administrateur Général")
    .addField("Twitter :", "https://twitter.com/enderluffy")
    .addField("Twitch :", "https://twitter.com/enderluffy")
    .addField("Youtube :","https://www.youtube.com/channel/UCGZuARMZk766tavCnNw0WEQ0");
message.channel.send(embed);

return;
}

module.exports.help = {
    name: "enderluffy"
}