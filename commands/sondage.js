const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    if(message.member.hasPermission("BAN_MEMBERS")) {
			
        let args = message.content.split(" ").slice(1);
        let thingToEcho = args.join(" ")
        var embed = new Discord.RichEmbed()
            .setDescription('Hawkcraft.fr')
            //.addField(thingToEcho, "Répondre avec <:valide:375443260811771915> ou <:refuse:375443260883206146>")
            .addField(thingToEcho, "Répondre avec :white_check_mark:  ou :x:")
            .setColor("0xB40404")
            .setTimestamp()
        message.channel.sendEmbed(embed)
        .then(function (message){
            message.react('✅')
            //message.react("375443260811771915")
            //message.react("375443260883206146")
            message.react('❌')
        }).catch(function(){
            
        });
        message.delete()
    }else{
        return message.reply("Tu n'as pas la permission.")
    }
}

module.exports.help = {
    name: "sondage"
}