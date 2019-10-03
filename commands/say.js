const discord = require('discord.js');

module.exports.run = async (bot,message,args) => {
    let modRole = message.guild.roles.find("name", "MOD-BOT");
    let admRole = message.guild.roles.find("name", "ADMIN-BOT");
    
    if (!message.member.roles.has(admRole.id) && !message.member.roles.has(modRole.id)) { 
        message.channel.send(':warning:Vous avez besoin du role **\`ADMIN-BOT ou MOD-BOT\`** pour utiliser cette commande.:warning:'); 
        return;
    }
    let botmessage = args.join(" ");
    message.delete().catch();
    message.channel.send(botmessage)

}

module.exports.help = {
    name: "say"
}