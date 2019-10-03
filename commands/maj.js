const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    if (!message.member.roles.find("name", "ADMIN-BOT")) { 
        message.channel.send('Vous avez besoin du role \`ADMIN-BOT\` pour utiliser cette commande.'); 
        return;
    }
        message.channel.send(`Je suis passé dans le mode mise à jour ! Une nouvelle version va bientôt arriver !`);
        bot.user.setActivity("Mise à jour en cours , bientôt la nouvelle version");
        bot.user.setStatus("idle");
}

module.exports.help = {
    name: "maj"
}