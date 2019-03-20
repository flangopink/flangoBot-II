var Discord = require('discord.js');


exports.run = (bot, msg, args) => {
	
	const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
	
    if (msg.author.bot) return; // will not listen to bots
    bot.user.setActivity(activities_list[index]);
	
};

exports.help = {
    name: 'changeactivity',
    usage: 'changeactivity',
    description: 'Change current bot activity.'
};
