var Discord = require('discord.js');


exports.run = (bot, msg, args) => {
	
	let totalSeconds = (bot.uptime / 1000);
	let days = Math.floor(totalSeconds / 86400);
	let hours = Math.floor(totalSeconds / 3600);
	totalSeconds %= 3600;
	let minutes = Math.floor(totalSeconds / 60);
	let seconds = (totalSeconds % 60).toFixed(1);

    if (msg.author.bot) return; // will not listen to bots
	
	let uptime = `I've been online for ${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds!`;
	msg.channel.send(uptime)
	
global.uptime = uptime
};


exports.help = {
    name: 'uptime',
    usage: 'uptime',
    description: `Show bot's uptime.`
};
