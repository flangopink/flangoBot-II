var Discord = require('discord.js');

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

exports.run = (bot, msg, args) => {
	
    if (msg.author.bot) return; // will not listen to bots

    if (msg.content.toLowerCase().startsWith('//coin')) { //The coinflip Message
        var msg2 = Array(2);
        msg2[1] = ":cd: **Heads**";
        msg2[2] = ":cd: **Tails**";

        var x = getRandomInt(0, 8);
        if (x < 4) {
            msg.channel.send(msg2[1]);
        }
        else {
            msg.channel.send(msg2[2]);
        }
    }
	
};

exports.help = {
    name: 'coin',
    usage: 'coin',
    description: 'Flip a coin.'
};
