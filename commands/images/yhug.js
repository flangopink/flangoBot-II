var Discord = require('discord.js');

const randomSelection = (choices) => {
    return choices[Math.floor(Math.random() * choices.length)];
}

exports.run = (bot, msg, args) => {
    if (msg.author.bot) return; // will not listen to bots
    let gif = randomSelection([
        'https://media1.tenor.com/images/6c5e677daefaac0ec08bb1a5b52e00ab/tenor.gif?itemid=8967586',
        'https://media1.tenor.com/images/9df38618eefe4998c7c6a2398808bef4/tenor.gif?itemid=5754557', // Add more gifs here in the same form
        'https://media1.tenor.com/images/19cf84b7a56e9a64fe7fd5559ad287bf/tenor.gif?itemid=10243168',
        'https://media1.tenor.com/images/8cf8eafae079be517f61d7f65e3c813f/tenor.gif?itemid=9554711',
        'https://media1.tenor.com/images/38236017468622beae12b0ccc8f6e1ae/tenor.gif?itemid=7189187',
        'https://media1.tenor.com/images/77eb8960ea7e7480aab1a706ee497e96/tenor.gif?itemid=7250491',
        'https://media.giphy.com/media/DLuo0gtyq1bdm/giphy.gif',
        'https://pa1.narvii.com/6358/7957f0766674be87b6a5158d999c22ba85b075d4_hq.gif',
        'https://data.whicdn.com/images/131285334/original.gif',
        'https://ladygeekgirl.files.wordpress.com/2016/07/doukyuusei-rihito-hikaru-hug-htm.gif?w=584',
        'https://thumbs.gfycat.com/JealousFlakyArabianwildcat-max-1mb.gif',
        'https://lh4.googleusercontent.com/-qllD6IGHS_k/Umo_677W7xI/AAAAAAAAAO8/2C0_jCBigdY/w500-h265/tumblr_lx508spRpW1qff0oqo1_500.gif',



    ]);
    mentionedUser = msg.mentions.members.first()
    // console.log(mentionedUser)
    if (!mentionedUser) {
        let embed = new Discord.RichEmbed()
            .setDescription(`Here's a hug, **${msg.member.nickname || msg.author.username}**`)
			.setColor(0xff8cb4)
            .setImage(gif)
        return msg.channel.send(embed)
    }
    else {
        let embed = new Discord.RichEmbed()
            .setDescription(`**${mentionedUser.nickname || mentionedUser.user.username}** was just hugged by **${msg.member.nickname || msg.author.username}**`)
			.setColor(0xff8cb4)
            .setImage(gif)
        return msg.channel.send(embed)
        // return msg.channel.send(`${msg.author.user.mention} hugged ${mentionedUser}\n${gif}`); // Very simple version
    }
};

exports.help = {
    name: 'yhug',
    usage: 'yhug',
    description: 'Yaoi hugs!'
};
