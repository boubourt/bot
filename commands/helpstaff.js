const Discord = require('discord.js');

module.exports.run = async (bot, message, args) =>{
    let admRole = message.guild.roles.find("name", "ADMIN-BOT");
    let modRole = message.guild.roles.find("name", "MOD-BOT");
    
    if (!message.member.roles.has(admRole.id) && !message.member.roles.has(modRole.id)) { 
        message.channel.send(":warning:Vous n'êtes pas un membre du staff vous ne pouvez donc pas utiliser cette commande:warning:"); 
        return;
    }
    if(message.member.roles.has(modRole.id)) {
        let embed = new Discord.RichEmbed()
        .setAuthor("Staff Hawkcraft.fr")
        .setDescription("Commandes disponibles pour le staff :")
        .setColor ("#6a11e4")
        .addField("Commandes staff :" ,"Toutes les commandes pour les membre du staff")
        .addField("!say", "Sert à faire parler le bot à votre place")
        .addField("!purge", "Supprimer un nombre X de message (de 1 à 100 )")
        .addField("!tempmute", "Sert à muter temporairement un joueur")
        .addField("!mute", "Mute le membre que vous cherchez a mute")
        .addField("!warn", "Sert à donner un avertissement a un joueur 2 warns = Mute 2h, 3 warns = ban permanant")
        .addField("!dwarn", "Sert à diminuer le niveau de warn de 1")
        .addField("!iwarn", "Sert à savoir le nombre de warn d'une personne")
        .addField("!kick", "Vous permet de kick le joueur que vous ciblez")
        .addField("!ban", "Vous permet de bannir le joueur que vous ciblez")
    message.channel.send(embed);

    return;
    }
    if(message.member.roles.has(admRole.id)) {
        let embed = new Discord.RichEmbed()
        .setAuthor("Staff Hawkcraft.fr")
        .setDescription("Commandes disponibles pour le staff :")
        .setColor ("#6a11e4")
        .addField("Commandes staff :" ,"Toutes les commandes pour les membre du staff")
        .addField("!say", "Sert à faire parler le bot à votre place")
        .addField("!purge", "Supprimer un nombre X de message (de 1 à 100 )")
        .addField("!tempmute", "Sert à muter temporairement un joueur")
        .addField("!mute", "Mute le membre que vous cherchez a mute")
        .addField("!warn", "Sert à donner un avertissement a un joueur 2 warns = Mute 2h, 3 warns = ban permanant")
        .addField("!dwarn", "Sert à diminuer le niveau de warn de 1")
        .addField("!iwarn", "Sert à savoir le nombre de warn d'une personne")
        .addField("!kick", "Vous permet de kick le joueur que vous ciblez")
        .addField("!ban", "Vous permet de bannir le joueur que vous ciblez")
        .addField("!idjoueur", "donne l'id discord d'un joueur")
        .addField("!reload", "Sert a reload les commandes du bot")
    message.channel.send(embed);

    return;
    }

}

module.exports.help = {
    name: "helpstaff"
}