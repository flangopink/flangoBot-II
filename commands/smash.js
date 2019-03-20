var Discord = require('discord.js');

exports.run = (bot, msg, args) => {
	
    if (msg.author.bot) return; // will not listen to bots

    mentionedUser = msg.mentions.members.first()
    // console.log(mentionedUser)
    if (!msg.channel.nsfw) {
        return msg.reply(":warning: This channel isn't marked as NSFW.");
    }
    else

        if (!mentionedUser) {
            return msg.channel.send(`Who are you trying to smash, ${msg.member.nickname || msg.author.username}?`)
        }
        else {
            let embed = new Discord.RichEmbed()
                .setDescription(`**${mentionedUser.nickname || mentionedUser.user.username}** just got smashed by **${msg.member.nickname || msg.author.username}** ( ͡° ͜ʖ ͡°)`)
            return msg.channel.send(embed)
        }
	
};

exports.help = {
    name: 'smash',
    usage: 'smash',
    description: 'Smash the mentioned person.'
};
