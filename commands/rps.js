var Discord = require('discord.js');

exports.run = (bot, msg, args) => {
	
    msg.channel.send('this is a placeholder command ass')
	
};

exports.help = {
    name: 'rps',
    usage: 'rps',
    description: 'Rock, Paper, Scissors.'
};
