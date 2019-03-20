var Discord = require('discord.js');

exports.run = (bot, msg) => {
	
    let args = msg.content.split(" ").slice(1);
	
	if (msg.author.bot) return; // will not listen to bots
	
		msg.channel.send(args.join(" ")|| `Please enter a message`)
			.then (msg => {
			msg.react("1⃣")   //1
			setTimeout(function(){
			msg.react("2⃣")	 //2
			}, 400);   
			setTimeout(function(){
			msg.react("3⃣")   //3
			}, 800); 
			setTimeout(function(){
			msg.react("4⃣")   //4
			}, 1200); 
			})
			msg.delete(1600)
	
};

exports.help = {
    name: 'vote1234',
    usage: 'vote1234',
    description: 'Vote 1234.'
};

