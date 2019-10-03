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
        if(!toMute) return message.channel.sendMessage(":warning:Veuillez spécifier un utilisateur ou son ID! Par exemple *`!mute @user#1234`*:warning:");
        
        let reason = args.join(" ").slice(22);
        
        let role = message.guild.roles.find(r => r.name === "Mute");
        if(!role) {
            try{
                role = await message.guild.createRole({
                    name: "Mute",
                    color: "#000000",
                    permissions: []
                });
    
                message.guild.channels.forEach(async (channel, id) => {
                    await channel.overwritePermissions(role, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false,
                    });
                });
            } catch(e) {
                console.log(e.stack);
            }
        }

        if(toMute.roles.has(role.id)) return message.channel.sendMessage(`:warning: La personne que vous ciblez est déjà mute !:warning:`);

        await toMute.addRole(role);
        message.channel.sendMessage(`La personne que vous ciblez vient de se faire mute :speak_no_evil:`);

        let muteembed = new Discord.RichEmbed()
        .setDescription(`Mute de : ${toMute}`)
        .setColor("#ffffff")
        .addField("Utilisateur Mute:", `${toMute} avec l'id ${toMute.id}`)
        .addField("Mute par:", `${message.author} avec l'id ${message.author.id}`)
        .addField("Raison :", reason)
        .addField("Channel :", message.channel)
        .addField("Heure :", message.createdAt)
        
        let mutechannel = message.guild.channels.find(`name`, "reports");
        if (!mutechannel) return message.channel.send("Je ne trouve pas le channel");
    
        message.delete().catch(O_o=>{});
        mutechannel.send(muteembed);
    
        return;

        

}

module.exports.help = {
    name: "mute"
}