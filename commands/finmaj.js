const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    if (!message.member.roles.find("name", "ADMIN-BOT")) { 
        message.channel.send('Vous avez besoin du role \`ADMIN-BOT\` pour utiliser cette commande.'); 
        return;
    }
        message.channel.send(`Fin de la mise à jour ! La nouvelle version est arrivée !`);
        bot.user.setActivity("Mise à jour finie ,la nouvelle version est disponible, allez voir le changelog");
        bot.user.setStatus("connected");
}

module.exports.help = {
    name: "finmaj"
}