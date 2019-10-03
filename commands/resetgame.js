const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    if (!message.member.roles.find("name", "ADMIN-BOT")) { 
        message.channel.send('Vous avez besoin du role \`ADMIN-BOT\` pour utiliser cette commande.'); 
        return;
    }
        message.channel.send(`Le jeu et status ont été remis par défaut !`);
        bot.user.setActivity(`${bot.user.username} est disponible sur votre serveur ! Disponible au total sur ${bot.guilds.size} serveurs !`);
        bot.user.setStatus("connected");
}

module.exports.help = {
    name: "resetgame"
}