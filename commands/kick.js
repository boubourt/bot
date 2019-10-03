const Discord = require('discord.js');

module.exports.run = async (bot, message, args) =>{
    let admRole = message.guild.roles.find("name", "ADMIN-BOT");
    let modRole = message.guild.roles.find("name", "MOD-BOT");
        
    if (!message.member.roles.has(admRole.id) && !message.member.roles.has(modRole.id)) {
        message.channel.send(':warning:Vous avez besoin du role **\`ADMIN-BOT ou MOD-BOT\`** pour utiliser cette commande.:warning:'); 
        return;
    }
    let toKick = message.guild.member   (message.mentions.users.first()) || message.guild.member(args[0]);
    message.delete();
    
    let reason = args.join(" ").slice(22);

    const member = message.mentions.members.first();
    if(!toKick) return message.channel.sendMessage(":warning: Veuillez spécifier un utilisateur ou son ID! Par exemple *`!kick @user#1234`*:warning: ");
    member.kick({
    reason: (reason)
    });
    
    let kickembed = new Discord.RichEmbed()
    .setDescription(`Kick de : ${member}`)
    .setColor("#ffffff")
    .addField("Utilisateur kick:", `${member} avec l'id ${member.id}`)
    .addField("Kick par:", `${message.author} avec l'id ${message.author.id}`)
    .addField("Raison :", reason)
    .addField("Channel :", message.channel)
    .addField("Heure :", message.createdAt)
    
    let kickchannel = message.guild.channels.find(`name`, "reports");
    if (!kickchannel) return message.channel.send("Je ne trouve pas le channel");

    message.delete().catch(O_o=>{});
    kickchannel.send(kickembed);

    return;

}

module.exports.help = {
    name: "kick"
}