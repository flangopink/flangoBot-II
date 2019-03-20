var Discord = require('discord.js');

exports.run = (bot, msg, args) => {
	
    if (msg.author.bot) return; // will not listen to bots

	mentionedUser = msg.mentions.members.first()

    if (!mentionedUser) {
		
		let args = msg.content.split(" ").slice(1);
		
		msg.channel.send(`Sending DM...`)
		.then(msg => {
		msg.edit(`Done!`)
		})
		
		bot.users.get('424486293330984961').send({
            embed: {
                color: 0xff8cb4,
                author: {
                    name: bot.user.username,
                    icon_url: bot.user.avatarURL
                },
                title: "IF YOU SEE THIS I MIGHT BE BORKED",
                description: "Message: " + `${args.join(" ")}` + "\n \n User tag: " + `${msg.member.user.tag}` + "\n User ID: " + `${msg.member.user.id}` + "\n \n Server name: " + `${msg.guild.name}` + "\n Server ID: " + `${msg.guild.id}`,
				timestamp: new Date(),
                footer: {
                    icon_url: msg.author.avatarURL,
                    text: "Requested by " + `${msg.member.nickname || msg.author.username}`
                }
			}
		});
	}
	
};

exports.help = {
    name: 'contactdev',
    usage: 'contactdev',
    description: 'Contact the developer in case something doesnt work or something.'
};
