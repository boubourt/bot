const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    var request = require('request');
    var mcIP = '37.187.172.224'; 
    var mcPort = '25565'; 

        var url = 'http://mcapi.us/server/status?ip=' + mcIP + '&port=' + mcPort;
        request(url, function(err, response, body) {
            if(err) {
                console.log(err);
                return message.channel.send("Je n'arrive pas à avoir le status du serveur");
            }
            body = JSON.parse(body);
            var status = '*Le serveur est actuellement hors-ligne*';
            if(body.online) {
                status = '**Hawkcraft** est **en-ligne**  -  ';
                if(body.players.now) {
                    status += '**' + body.players.now + '** personnes sont entrain de jouer!';
                } else {
                    status += '*personne est entrain de jouer!*';
                }
            }
            message.channel.send(status);
    });
}
module.exports.help = {
    name: "hawkcraft"
}