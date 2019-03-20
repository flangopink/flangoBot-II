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
			setTimeout(function(){
			msg.react("5⃣")   //5
			}, 1600); 
			})
			msg.delete(2000)
	
};

exports.help = {
    name: 'vote12345',
    usage: 'vote12345',
    description: 'Vote 12345.'
};
