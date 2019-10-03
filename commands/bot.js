const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let embed = new Discord.RichEmbed()
    .setAuthor(bot.user.username)
    .setDescription("Ma carte d'identité :")
    .setColor ("#0fe2ce")
    .setThumbnail(bicon)
    .addField("Développeur :", "bouboustar")
    .addField("Version :", "Bêta 1.7")
    .addField("Crée le :", bot.user.createdAt)
message.channel.send(embed);
return;
}

module.exports.help = {
    name: "bot"
}