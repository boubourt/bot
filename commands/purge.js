const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    async function purge() {
        message.delete(); 
    
            let modRole = message.guild.roles.find("name", "MOD-BOT");
            let admRole = message.guild.roles.find("name", "ADMIN-BOT");
    
            if (!message.member.roles.has(admRole.id) && !message.member.roles.has(modRole.id)) { 
                message.channel.send(':warning:Vous avez besoin du role **\`ADMIN-BOT ou MOD-BOT\`** pour utiliser cette commande.:warning:'); 
                return;
            }
    
            
            if (isNaN(args[0])) {
                message.channel.send(':warning:Choissisez un montant de message a supprimer \n Usage: *`!purge <amount>`*:warning:'); 
                return;
            }
    
            const fetched = await message.channel.fetchMessages({limit: args[0]}); 
           
            //Suppression message
            message.channel.bulkDelete(fetched)
            .catch(error => message.channel.send(`Error: ${error}`));
            let purgeembed = new Discord.RichEmbed()
            .setDescription(`Purge de : ${args} messages`)
            .setColor("#ffffff")
            .addField("Purge par:", `${message.author} avec l'id ${message.author.id}`)
            .addField("Nombre de message purge :", args)
            .addField("Channel :", message.channel)
            .addField("Heure :", message.createdAt)
    
            let purgechannel = message.guild.channels.find(`name`, "reports");
            if (!purgechannel) return message.channel.send("Je ne trouve pas le channel");
            message.delete().catch(O_o=>{});
            purgechannel.send(purgeembed);
        }
            purge(); 
}

module.exports.help = {
    name: "purge"
}