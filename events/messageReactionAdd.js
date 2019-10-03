module.exports = async (client, messageReaction, user) => {

const message = messageReaction.message;
const channel = message.guild.channels.find("name", 'test');
const member = message.guild.members.get(user.id)
if(member.user.bot) return;

const pubg = message.guild.roles.get('463478526029332530'); // Moderator
const r6 = message.guild.roles.get('445921745980096537'); // Administrator
const membre = message.guild.roles.get('369575194010058753');
const reglement = message.guild.roles.get('369575194010058753');

if(['📱', '🔫', '✅', '✔'].includes(messageReaction.emoji.name) && message.channel.id === channel.id){
    switch (messageReaction.emoji.name) {
    case '📱':
        member.addRole(pubg).catch(console.error)
        break;
    case '🔫':
        member.addRole(r6).catch(console.error)
        break;

    case '✅':
        member.addRole(membre).catch(console.error)
        break;
    case '✔':
        member.addRole(reglement).catch(console.error)
        break;
    default :
        break;
    }

};
}
