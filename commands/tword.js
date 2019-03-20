var Discord = require('discord.js');

const tword_list = [
    "trapezohedron", 
    "trapshooting", 
    "trapshooter", 
    "trapezohedra", 
    "trapnested", 
    "trapanning", 
    "trapezoid", 
    "trapezius", 
    "trapezium", 
    "trapezist", 
    "trapesing", 
    "trapezial", 
    "trapdoor", 
    "trapball", 
    "trapping", 
    "trapnest", 
    "trapline", 
    "traprock", 
    "trapunto", 
    "trapezii", 
    "trapesed", 
    "trapezia", 
    "trapeze", 
    "traplike", 
    "trappous", 
    "trapper", 
    "trappose", 
    "trappean", 
    "trapans", 
    "trapped", 
    "trapes", 
    "trapan", 
    "trap", 
    "trapt", 
    "mousetrap. wait. this it's a t word. :thinking:"
    ];

exports.run = (bot, msg, args) => {
	
	const index = Math.floor(Math.random() * (tword_list.length - 1) + 1);
	
    if (msg.author.bot) return; // will not listen to bots

	mentionedUser = msg.mentions.members.first();

    if (!mentionedUser) {
		return msg.channel.send(tword_list[index]);
	}
	
};

exports.help = {
    name: 'tword',
    usage: 'tword',
    description: 'tword.'
};
