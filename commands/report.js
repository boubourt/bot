const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!rUser) return message.channel.send ("Veuillez mentionner un utilisateur");
    let reason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Report")
    .setColor("#ffffff")
    .addField("Utilisateur report:", `${rUser} avec l'id ${rUser.id}`)
    .addField("Report envoyé par:", `${message.author} avec l'id ${message.author.id}`)
    .addField("Channel :", message.channel)
    .addField("Heure :", message.createdAt)
    .addField("Raison :", reason);

    let reportschannel = message.guild.channels.find(`name`, "reports");
    if (!reportschannel) return message.channel.send("Je ne trouve pas le channel reports");

    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

    return;

}

module.exports.help = {
    name: "report"
}