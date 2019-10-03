const Discord = require('discord.js');

module.exports.run = async (bot, message, args) =>{
    message.channel.send({file: './images/reglement.png'})
}

module.exports.help = {
    name: "reglesss"
}