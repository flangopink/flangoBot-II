var Discord = require('discord.js');

exports.run = (bot, msg) => {
	
    let args = msg.content.split(" ").slice(1);
	
	if (msg.author.bot) return; // will not listen to bots
	
		msg.channel.send(args.join(" ")|| `${msg.author}, please enter a message`)
		.then (msg => {
		msg.react("👍")   //upvote
		setTimeout(function(){
		msg.react("👎")	 //downvote
		}, 400);   
		});
		msg.delete(800)
	
};

exports.help = {
    name: 'voteyesno',
    usage: 'voteyesno',
    description: 'Vote thubms up/down.'
};
