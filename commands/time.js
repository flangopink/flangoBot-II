var Discord = require('discord.js');

exports.run = (bot, msg, args) => {
	
    if (msg.author.bot) return; // will not listen to bots

    mentionedUser = msg.mentions.members.first()
    // console.log(mentionedUser)

    if (!mentionedUser) {

        return msg.channel.send({
            embed: {
                color: 0xff8cb4,
                timestamp: new Date(),

            }
        });
    }
	
};

exports.help = {
    name: 'time',
    usage: 'time',
    description: 'Current time.'
};
