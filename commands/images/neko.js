var Discord = require('discord.js');
const superagent = require('superagent');

exports.run = async (bot, msg, args) => {
	if (msg.author.bot) return; // will not listen to bots
        let { body } = await superagent.get(`https://nekos.life/api/v2/img/neko`).catch(error => msg.channel.send(`*welp, that's an error. try again.\ni bet it'll work next time*.\n \`${error}\``));

        let nekoEmbed = new Discord.RichEmbed()
            .setAuthor('Nyaa~')
            .setColor(0xff8cb4)
            .setImage(body.url)

        msg.channel.send(nekoEmbed)
    
};

exports.help = {
    name: 'neko',
    usage: 'neko',
    description: 'Sends a neko pic.'
};
