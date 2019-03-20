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
			setTimeout(function(){
			msg.react("6⃣")   //6
			}, 2000); 
			setTimeout(function(){
			msg.react("7⃣")   //7
			}, 2400); 
			})
			msg.delete(2800)
	
};

exports.help = {
    name: 'vote1234567',
    usage: 'vote1234567',
    description: 'Vote 1234567.'
};
