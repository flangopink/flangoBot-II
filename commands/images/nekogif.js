var Discord = require('discord.js');
const superagent = require('superagent');

exports.run = async (bot, msg, args) => {
	if (msg.author.bot) return; // will not listen to bots
        let { body } = await superagent.get(`https://nekos.life/api/v2/img/ngif`).catch(error => msg.channel.send(`*welp, that's an error. try again.\ni bet it'll work next time*.\n \`${error}\``));

        let nekogifEmbed = new Discord.RichEmbed()
            .setAuthor('uwu nyaa~')
            .setColor(0xff8cb4)
            .setImage(body.url)

        msg.channel.send(nekogifEmbed)
    
};

exports.help = {
    name: 'nekogif',
    usage: 'nekogif',
    description: 'Send a neko gif.'
};
