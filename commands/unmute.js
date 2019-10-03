const Discord = require('discord.js');


module.exports.run = async (bot, message, args) => {
    let admRole = message.guild.roles.find("name", "ADMIN-BOT");
    let modRole = message.guild.roles.find("name", "MOD-BOT");
        
        if (!message.member.roles.has(admRole.id) && !message.member.roles.has(modRole.id)) {
            message.channel.send(':warning:Vous avez besoin du role **\`ADMIN-BOT ou MOD-BOT\`** pour utiliser cette commande.:warning:'); 
            return;
        }
        let toMute = message.guild.member   (message.mentions.users.first()) || message.guild.member(args[0]);
        message.delete();
        if(!toMute) return message.channel.sendMessage(":warning:Veuillez spécifier un utilisateur ou son ID! Par exemple *`!unmute @user#1234`*:warning:");

        let role = message.guild.roles.find(r => r.name === "Mute");

        if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage(`:warning: La personne que vous ciblez n'est pas mute !:warning:`);

        await toMute.removeRole(role);
        message.channel.sendMessage(`La personne que vous ciblez vient d'être démute :speaking_head:`);

        let umuteembed = new Discord.RichEmbed()
        .setDescription(`Démute de : ${toMute}`)
        .setColor("#ffffff")
        .addField("Utilisateur Démute:", `${toMute} avec l'id ${toMute.id}`)
        .addField("Démute par:", `${message.author} avec l'id ${message.author.id}`)
        .addField("Channel :", message.channel)
        .addField("Heure :", message.createdAt)
        
        let umutechannel = message.guild.channels.find(`name`, "reports");
        if (!umutechannel) return message.channel.send("Je ne trouve pas le channel");
    
        message.delete().catch(O_o=>{});
        umutechannel.send(umuteembed);
    
        return;

}

module.exports.help = {
    name: "unmute"
}