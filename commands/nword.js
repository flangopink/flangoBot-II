var Discord = require('discord.js');

exports.run = (bot, msg, args) => {
	
    if (msg.author.bot) return; // will not listen to bots

	mentionedUser = msg.mentions.members.first()

    if (!mentionedUser) {
		
		return msg.channel.send(`N`)
		.then(msg => {
		msg.edit(`NI`)
		.then(msg => {
		msg.edit(`NIG`)
		.then(msg => {
		msg.edit(`NIGG`)
		.then(msg => {
		msg.edit(`:boom:`)
		.then(msg => {
		msg.delete(1000)
		})})})})})
	}
	msg.delete(2000)
	
};

exports.help = {
    name: 'nword',
    usage: 'nword',
    description: 'nword.'
};
