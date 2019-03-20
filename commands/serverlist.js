var Discord = require('discord.js');

exports.run = (bot, msg, args) => {
    if (msg.author.bot) return; // will not listen to bots

    mentionedUser = msg.mentions.members.first()
    // console.log(mentionedUser)

    if (!mentionedUser) {

        return msg.channel.send({
            embed: {
                color: 0xff8cb4,
                author: {
                    name: bot.user.username,
                    icon_url: bot.user.avatarURL
                },
                title: "Server list",
				description: "," + `${bot.guilds.map(r => r.name + `| **${r.memberCount}** members \n`)}`,
				timestamp: new Date(),
                footer: {
                    icon_url: msg.author.avatarURL,
                    text: "Requested by " + `${msg.member.nickname || msg.author.username}`
                }
			}
		});
	}
};

exports.help = {
    name: 'serverlist',
    usage: 'serverlist',
    description: 'Sends a list of servers this bot is currently operating in.'
};
