var Discord = require('discord.js');
var superagent = require('superagent');

exports.run = async (bot, msg, args) => {
	
    if (msg.author.bot) return; // will not listen to bots
    let { body } = await superagent.get(`https://nekos.life/api/v2/img/lizard`).catch(error => msg.channel.send(`*welp, that's an error. try again.\ni bet it'll work next time*.\n \`${error}\``));

    let lizardEmbed = new Discord.RichEmbed()
        .setAuthor('rawr')
        .setColor(0xff8cb4)
        .setImage(body.url)

    msg.channel.send(lizardEmbed)
	
};

exports.help = {
    name: 'lizard',
    usage: 'lizard',
    description: 'Sends a lizard pic.'
};
