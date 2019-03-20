var Discord = require('discord.js');

exports.run = (bot, msg, args) => {
	
    if (msg.author.bot) return; // will not listen to bots
	if (!msg.content.startsWith('//beat the shit out of')) return;

    mentionedUser = msg.mentions.members.first()
    // console.log(mentionedUser)

    if (!mentionedUser) {
        return msg.channel.send(`Who are you trying to beat the shit out of, ${msg.member.nickname || msg.author.username}?`)
    }
    else {
        let embed = new Discord.RichEmbed() //**${mentionedUser.nickname || mentionedUser.user.username}**    //**${msg.member.nickname || msg.author.username}**
            .setDescription(`**${msg.member.nickname || msg.author.username}** just beat the shit out of **${mentionedUser.nickname || mentionedUser.user.username}** (ง •̀_•́)ง`)
        return msg.channel.send(embed)
    }
	
};

exports.help = {
    name: 'beat the shit out of',
    usage: 'beat the shit out of',
    description: 'Beat the shit out of someone.'
};
