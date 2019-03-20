exports.run = (bot, msg, args) => {
    msg.channel.send(':watch: | Ping!').then(m => {
        m.edit(`:ping_pong: | Pong! \`${m.createdTimestamp - msg.createdTimestamp}ms\``);
    });
};

exports.help = {
    name: 'ping',
    usage: 'ping',
    description: 'Pings the bot to check its connection speed.'
};
