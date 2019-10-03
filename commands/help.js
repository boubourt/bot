const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed()
            .setAuthor("Aide")
            .setDescription("Commandes disponibles pour tout le monde :")
            .setColor("0x00AE86")
            .addField("Commandes classiques :" ,"Les commandes accéssibles à tout le monde")
            .addField(`!help`, "Vous donne les informations sur toutes les commandes du serveur")
            .addField(`!changelog` ,"Vous donne le contenu de chaque nouvelle mise à jour du bot")
            .addField("!staff :", "Vous affiche tous les membres du staff de hawkcraft.fr")
            .addField("!serv :", "Vous donne toutes les adresses utiles du serveur")
            .addField("!bot :", "Vous donne toutes les informations sur HawkcraftBOT")
            .addField("!report", "Sert à report un joueur pour une attitude contraire au règlement")
            .addField("!enderluffy :", "Vous donne toutes les informations utiles pour retrouver enderluffy sur les réseaux sociaux")
            .addField("!derkmaus :", "Vous donne toutes les informations utiles pour retrouver derkmaus_ sur les réseaux sociaux")
            .addField("A venir :" ,"Toutes les commandes qui sont en cours de développement")
        message.channel.send(embed);

    return;
}

module.exports.help = {
    name: "help"
}