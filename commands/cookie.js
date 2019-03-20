var Discord = require('discord.js');

exports.run = (bot, msg, args) => {
	
    if (msg.author.bot) return; // will not listen to bots

    mentionedUser = msg.mentions.members.first()
    // console.log(mentionedUser)

    if (!mentionedUser) {
        return msg.channel.send(`Who are you trying to give a cookie to, ${msg.member.nickname || msg.author.username}?`)
    }
    else {
        let embed = new Discord.RichEmbed() //**${mentionedUser.nickname || mentionedUser.user.username}**    //**${msg.member.nickname || msg.author.username}**
            .setDescription(`**${msg.member.nickname || msg.author.username}** just gave **${mentionedUser.nickname || mentionedUser.user.username}** a cookie! :cookie:`)
			.setColor(0xff8cb4)
        return msg.channel.send(embed)
    }
};

exports.help = {
    name: 'cookie',
    usage: 'cookie',
    description: 'Give someone a cookie.'
};
