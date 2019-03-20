var Discord = require('discord.js');
var randomPuppy = require('random-puppy');

exports.run = (bot, msg, args) => {
    if (msg.author.bot) return; // will not listen to bots
    randomPuppy('memes').then(url => {
        let memeEmbed = new Discord.RichEmbed()
            .setTitle('Meme')
            .setImage(url)
            .setColor('0xff8cb4')
        msg.channel.send(memeEmbed)
    })
};

exports.help = {
    name: 'meme',
    usage: 'meme',
    description: 'Sends a random meme.'
};
