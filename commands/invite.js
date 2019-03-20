var Discord = require('discord.js');

exports.run = (bot, msg, args) => {
	
    bot.generateInvite([
        'SEND_MESSAGES',
        'MANAGE_MESSAGES'
    ]).then(invite => {
        // After generating the invite, log it to the console
        msg.channel.send(`\n   **My invite link:**\n<${invite}>`);
    });
	
};

exports.help = {
    name: 'invite',
    usage: 'invite',
    description: 'Sends the invite link.'
};
