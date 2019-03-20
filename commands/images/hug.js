var Discord = require('discord.js');
const superagent = require('superagent');

exports.run = async (bot, msg, args) => {
    if (msg.author.bot) return; // will not listen to bots
    let { body } = await superagent.get(`https://nekos.life/api/v2/img/hug`).catch(error => msg.channel.send(`*welp, that's an error. try again.\ni bet it'll work next time*.\n \`${error}\``));
    mentionedUser = msg.mentions.members.first()

    if (!mentionedUser) {
        let hugnormalEmbed = new Discord.RichEmbed()
            .setAuthor('* hugging sounds *')
            .setImage(body.url)
        msg.channel.send(hugnormalEmbed)
    }
    else {
        let hugnormalEmbed = new Discord.RichEmbed()
            .setDescription(`**${mentionedUser.nickname || mentionedUser.user.username}** was just hugged by **${msg.member.nickname || msg.author.username}** :3`)
            .setColor(0xff8cb4)
            .setImage(body.url)
        msg.channel.send(hugnormalEmbed)
    }
};

exports.help = {
    name: 'hug',
    usage: 'hug',
    description: 'Yay! Hugs!'
};
