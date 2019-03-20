var Discord = require('discord.js');

// My ID
const ownerID = '424486293330984961';

exports.run = (bot, msg, args, ops) => {
	
    if (msg.author.id !== ownerID) return msg.channel.send (`you're not my dad!`);
	
	try {
		delete require.cache[require.resolve(`.${args[0]}.js`)];
	} catch (error) {
		return msg.channel.send(`Unable to reload: ${args[0]}`);
	}
	
	msg.channel.send(`Successfully reloaded: ${args[0]}`);
};

exports.help = {
    name: 'reload',
    usage: 'reload',
    description: 'Reload commands.'
};
