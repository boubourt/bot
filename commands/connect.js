const Discord = require('discord.js')
const YT = require('ytdl-core')

module.exports.run = async (bot, message, args) => {
    return new Promise((resolve, reject) => {
        const voiceChannel = message.member.voiceChannel;
        if (!voiceChannel || voiceChannel.type !== 'voice') return message.reply('Je ne peux pas me connecter dans votre channel');
        voiceChannel.join().then(connection => resolve(connection)).catch(err => reject(err));
    });
}
module.exports.help = {
    name: "connect"
}