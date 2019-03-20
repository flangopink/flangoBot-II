var Discord = require('discord.js');
var superagent = require('superagent');

exports.run = async (bot, msg, args) => {
	
    if (msg.author.bot) return; // will not listen to bots
    let { body } = await superagent.get(`https://nekos.life/api/v2/img/tickle`).catch(error => msg.channel.send(`*welp, that's an error. try again.\ni bet it'll work next time*.\n \`${error}\``));

    mentionedUser = msg.mentions.members.first()
    // console.log(mentionedUser)


    if (!mentionedUser) {
        let tickleEmbed = new Discord.RichEmbed()
            .setAuthor('* tickling sounds *')
            .setImage(body.url)
			msg.channel.send(tickleEmbed)

    }
    else {
        let tickleEmbed = new Discord.RichEmbed()
            .setDescription(`**${mentionedUser.nickname || mentionedUser.user.username}** just got tickled by **${msg.member.nickname || msg.author.username}**`)
            .setColor(0xff8cb4)
            .setImage(body.url)
        msg.channel.send(tickleEmbed)
    }
	
};

exports.help = {
    name: 'tickle',
    usage: 'tickle',
    description: 'Tickle the mentioned person.'
};
