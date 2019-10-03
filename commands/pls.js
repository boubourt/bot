const Discord = require('discord.js');

module.exports.run = async (bot, message, args) =>{
    message.channel.send({file: './images/pls.gif'})
}

module.exports.help = {
    name: "pls"
}