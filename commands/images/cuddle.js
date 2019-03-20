var Discord = require('discord.js');
var superagent = require('superagent');

exports.run = async (bot, msg, args) => {
	
    if (msg.author.bot) return; // will not listen to bots
    let { body } = await superagent.get(`https://nekos.life/api/v2/img/cuddle`).catch(error => msg.channel.send(`*welp, that's an error. try again.\ni bet it'll work next time*.\n \`${error}\``));

    mentionedUser = msg.mentions.members.first()
    // console.log(mentionedUser)


    if (!mentionedUser) {
        let cuddleEmbed = new Discord.RichEmbed()
            .setAuthor('* cuddling sounds *')
			.setColor(0xff8cb4)
            .setImage(body.url)
        msg.channel.send(cuddleEmbed)
    }
    else {
        let cuddleEmbed = new Discord.RichEmbed()
            .setDescription(`**${mentionedUser.nickname || mentionedUser.user.username}** and **${msg.member.nickname || msg.author.username}** are cuddling :3`)
            .setColor(0xff8cb4)
            .setImage(body.url)
        msg.channel.send(cuddleEmbed)
    }
	
};

exports.help = {
    name: 'cuddle',
    usage: 'cuddle',
    description: 'Cuddle the mentioned persona.'
};
