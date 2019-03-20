var Discord = require('discord.js');

exports.run = (bot, msg) => {
	
    let args = msg.content.split(" ").slice(1);
	
	if (msg.author.bot) return; // will not listen to bots
	
		msg.channel.send(args.join(" ")|| `${msg.author}, please enter a message`)
		.then (msg => {
		msg.react("1⃣")   //1
		setTimeout(function(){
		msg.react("2⃣")	 //2
		}, 400);   
		});
		msg.delete(800)
	
};

exports.help = {
    name: 'vote12',
    usage: 'vote12',
    description: 'Vote 12.'
};
