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
			setTimeout(function(){
			msg.react("8⃣")   //8
			}, 2800); 
			})
			msg.delete(3200)
	
};

exports.help = {
    name: 'vote12345678',
    usage: 'vote12345678',
    description: 'Vote 12345678.'
};
