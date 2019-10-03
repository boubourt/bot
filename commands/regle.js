const Discord = require('discord.js')

exports.run = async (client, message, args) => {

    await message.delete().catch(O_o=>{});


    const reglement = message.guild.roles.get('369575194010058753'); // Developer

    

    const embed = new Discord.RichEmbed()
        .setTitle('Règle du serveur')
        .setDescription(`
        Voici les règles disponibles sur le serveur ${message.guild.name} !
        bla bla 
        bla bla
        Veuillez confirmer le règlement en utilisant la réaction ✔
        ✔ => Membre 

        `)
        .setColor(0xdd9323)
        .setFooter(`ID: ${message.author.id}`);
        
    message.channel.send(embed).then(async msg => {
        await msg.react('✔');

        
    });
     

};

exports.help = {
    name: 'regle'
};