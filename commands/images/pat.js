var Discord = require('discord.js');
const superagent = require('superagent');

exports.run = async (bot, msg, args) => {
	if (msg.author.bot) return; // will not listen to bots
    let { body } = await superagent.get(`https://nekos.life/api/v2/img/pat`).catch(error => msg.channel.send(`*welp, that's an error. try again.\ni bet it'll work next time*.\n \`${error}\``));
    mentionedUser = msg.mentions.members.first()

    if (!mentionedUser) {
        let patEmbed = new Discord.RichEmbed()
            .setAuthor('* patting sounds *')
            .setImage(body.url)
        msg.channel.send(patEmbed)
    }
    else {
        let patEmbed = new Discord.RichEmbed()
            .setDescription(`**${mentionedUser.nickname || mentionedUser.user.username}** was just patted by **${msg.member.nickname || msg.author.username}** :3`)
            .setColor(0xff8cb4)
            .setImage(body.url)
        msg.channel.send(patEmbed)
    }
};

exports.help = {
    name: 'pat',
    usage: 'pat',
    description: 'Pat a person.'
};
