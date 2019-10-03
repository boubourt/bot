    const Discord = require('discord.js');
const ms = require('ms');

module.exports.run = async (bot,message,args) => {
    let admRole = message.guild.roles.find("name", "ADMIN-BOT");
    let modRole = message.guild.roles.find("name", "MOD-BOT");
        
        if (!message.member.roles.has(admRole.id) && !message.member.roles.has(modRole.id)) { 
            message.channel.send(':warning:Vous avez besoin du role **\`ADMIN-BOT ou MOD-BOT\`** pour utiliser cette commande.:warning:'); 
            return;
        }

        let tempmute = message.guild.member   (message.mentions.users.first()) || message.guild.member(args[0]);
        message.delete();
        let reason = args.join(" ").slice(22);
        if(!tempmute) return message.channel.sendMessage(":warning:Veuillez spécifier un utilisateur ou son ID! Par exemple *`!tempmute @user#1234`*:warning:");

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

        let mutetime = args[1];
        if(!mutetime) return message.channel.sendMessage(":warning:Veuillez spécifier une durée de mute `!tempmute @user#1234 1h`:warning:");


        await(tempmute.addRole(role.id));
        message.channel.send(`<@${tempmute.id}> est mute pour une durée de ${ms(ms(mutetime))}`);

        setTimeout(function(){
            tempmute.removeRole(role.id);
            message.channel.sendMessage(`<@${tempmute.id}> n'est plus mute !`)
        }, ms(mutetime));


        let tmuteembed = new Discord.RichEmbed()
        .setDescription(`Tempmute de : ${tempmute}`)
        .setColor("#ffffff")
        .addField("Utilisateur mute temporairement :", `${tempmute} avec l'id ${tempmute.id}`)
        .addField("Temporairement mute par:", `${message.author} avec l'id ${message.author.id}`)
        .addField("Durée :", ms(ms(mutetime)))
        .addField("Raison :", reason)
        .addField("Channel :", message.channel)
        .addField("Heure :", message.createdAt);
        
        let tmutechannel = message.guild.channels.find(`name`, "reports");
        if (!tmutechannel) return message.channel.send("Je ne trouve pas le channel");
    
        message.delete().catch(O_o=>{});
        tmutechannel.send(tmuteembed);
    
        return;
    
}

module.exports.help = {
    name: "tempmute"
}