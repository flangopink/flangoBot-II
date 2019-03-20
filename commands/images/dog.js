var Discord = require('discord.js');
var superagent = require('superagent');

exports.run = async (bot, msg, args) => {
    if (msg.author.bot) return; // will not listen to bots
    let { body } = await superagent.get(`https://nekos.life/api/v2/img/woof`).catch(error => msg.channel.send(`*welp, that's an error. try again.\ni bet it'll work next time*.\n \`${error}\``));
    if (!{ body }) return msg.channel.send("no message body?! oopsie!")

    let dogEmbed = new Discord.RichEmbed()
        .setAuthor('Woof')
        .setColor(0xff8cb4)
        .setImage(body.url)

    msg.channel.send(dogEmbed)
};

exports.help = {
    name: 'dog',
    usage: 'dog',
    description: 'Sends a picture of a random dog.'
};
