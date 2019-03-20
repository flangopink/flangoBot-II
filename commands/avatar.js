var Discord = require('discord.js');

exports.run = (bot, msg, args) => {
	
    if (msg.author.bot) return; // will not listen to bots
    mentionedUser = msg.mentions.members.first()
    // console.log(mentionedUser)

    if (!mentionedUser) {
        return msg.channel.send(msg.author.avatarURL)
    }
    else {
        return msg.channel.send(mentionedUser.user.avatarURL)
    }
	
};

exports.help = {
    name: 'avatar',
    usage: 'avatar',
    description: 'Sends an avatar of you or the mentioned person.'
};
