const Discord = require('discord.js')

exports.run = async (client, message, args) => {

    await message.delete().catch(O_o=>{});

    const pubg = message.guild.roles.get('463478526029332530'); // Moderator
    const r6 = message.guild.roles.get('445921745980096537'); // Administrator
    const member = message.guild.roles.get('369575194010058753'); // Developer

    

    const embed = new Discord.RichEmbed()
        .setTitle('Rôles disponibles')
        .setDescription(`
        Voici les rôles disponibles sur ${message.guild.name} ! Vous pouvez les rejoindre en cliquant sur la réaction et les quitter en enlevant la réaction !
        📱 => PUBG Mobile
        🔫 => R6 Siège
        ✅ => Membre 

        `)
        .setColor(0xdd9323)
        .setFooter(`ID: ${message.author.id}`);
        
    message.channel.send(embed).then(async msg => {

        await msg.react('📱');
        await msg.react('🔫');
        await msg.react('✅');

        
    });
     

};

exports.help = {
    name: 'role'
};