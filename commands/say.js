var Discord = require('discord.js');

exports.run = (bot, msg, args) => {
	
    if (msg.author.bot) return; // will not listen to bots

    args = msg.content.split(" ").slice(1);
	
    msg.channel.send(args.join(" ") || `Please enter a message`);
	
};

exports.help = {
    name: 'say',
    usage: 'say',
    description: 'Repeats after you.'
};
