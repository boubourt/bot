const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed()
            .setAuthor("Staff")
            .setDescription("Staff du serveur :")
            .setColor ("#ff0000")
            .addField("Administrateur Général :", "enderluffy et Quelqu un")
            .addField("Adminstrateur Discord :", "bouboustar")
            .addField("Administrateur Forum :", "Sp_Evan")
            .addField("Opérateur :", "Poste à pourvoir")
            .addField("Modérateur RP :", "Postes a pourvoir")
            .addField("Guide RP :", "Postes a pourvoir")
            .addField("Développeur :", "enderluffy et bouboustar")
            .addField("Graphiste :", "derkmaus_");
        message.channel.send(embed);

    return;
}

module.exports.help = {
    name: "staff"
}