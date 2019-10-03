const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed()
    .setAuthor("HawkcraftBOT")
    .setDescription("Changelog de la nouvelle version du bot :")
    .setColor ("#2eff00")
    .addField("Contenu de la nouvelle version :", "Ajout du say !")
    .addField("Nouvelle version :", "Bêta 1.7");
message.channel.sendEmbed(embed);

return;

}

module.exports.help = {
    name: "changelog"
}