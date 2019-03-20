var Discord = require('discord.js');

const randomSelection = (choices) => {
    return choices[Math.floor(Math.random() * choices.length)];
}

exports.run = (bot, msg, args) => {
    if (msg.author.bot) return; // will not listen to bots
    let kissgif = randomSelection([
        'https://media.giphy.com/media/aIoQynMLx3uF2/giphy.gif', // Add more gifs here in the same form
        'https://media1.tenor.com/images/eae91502552b4854749e78778ab18e6b/tenor.gif?itemid=9124291',
        'https://media1.tenor.com/images/4ad93cee6ac511788ed54a993a8c0eb5/tenor.gif?itemid=7358012',
        'https://media1.tenor.com/images/5f48b0a71ca9a17fb31d5ab457d8a7c3/tenor.gif?itemid=11459632',
        'https://media1.tenor.com/images/799b58392575bb009178208ab9c28a9c/tenor.gif?itemid=8959573',
        'https://media1.tenor.com/images/e0e9834936c476d01a27da45fabf6239/tenor.gif?itemid=6096989',
        'https://media1.tenor.com/images/09f3547ad0ee0f4b7834aa1ac0f58f35/tenor.gif?itemid=7841278',
        'https://media1.tenor.com/images/ec216114884c59a90b1de75e3e6750b4/tenor.gif?itemid=6047650',
        'https://media1.tenor.com/images/d2ea8149b5afe52592a4efa449f25cf5/tenor.gif?itemid=9003999',
        'https://media.giphy.com/media/7z1xs4Fl9Kb8A/giphy.gif',
        'https://media.giphy.com/media/EeEx2C4tA4f9m/giphy.gif',
        'https://media.giphy.com/media/cCoBFGC2iLdkc/giphy.gif',
        'https://media1.tenor.com/images/e07b93ee0929806bbd29a3fdb94af0e0/tenor.gif?itemid=6254982',
        'https://media1.tenor.com/images/5533f6796eae4c5c19d552d37e16343b/tenor.gif?itemid=7179316',
        'https://pa1.narvii.com/6387/63c0577c6f58251d16a5dbe75c44aee51ba9a293_hq.gif',
        'https://media.giphy.com/media/s9uDl2wX3Olmo/giphy.gif',
        'https://media.giphy.com/media/117UiFNyf7lLyw/giphy.gif',
        'https://media.giphy.com/media/Z6ifX4I0TC5I4/giphy.gif',
        'https://orig00.deviantart.net/7444/f/2017/223/b/5/bakushima___kiribaku_kiss_gif__d_by_pinku_me-dbjqx2n.gif',
        'https://i.pinimg.com/originals/14/a6/72/14a672d9ff40d803b1f966ae8bf58635.gif',
        'https://i.pinimg.com/originals/eb/00/0b/eb000b8b1d816b277cc933ceb01058a4.gif',
        'https://orig00.deviantart.net/57ec/f/2011/243/9/5/9562e60b4a64b043e92fd261ddf511d3-d48hqi0.gif',
        'https://pa1.narvii.com/6704/ccc16fef5f278140e82c869a08e012faf8a72017_hq.gif',
        'https://data.whicdn.com/images/294410670/original.gif',
        'https://i.pinimg.com/originals/a6/1b/d5/a61bd59dfa449a3f17a7758607371573.gif',
        'https://i.makeagif.com/media/9-05-2017/GrRsbj.gif',
        'https://data.whicdn.com/images/34684926/original.gif',
        'https://data.whicdn.com/images/166972516/original.gif',
        'https://pa1.narvii.com/5757/8108f4491614576f5163c1312e4f2b0e719a617b_hq.gif',
        'http://images6.fanpop.com/image/photos/32900000/JR-gifs-yaoi-32970928-500-268.gif',
        'https://s7.favim.com/orig/151228/gif-yaoi-kiss-Favim.com-3815477.gif',
        'https://data.whicdn.com/images/294410670/original.gif',
        'https://steamusercontent-a.akamaihd.net/ugc/916917266299000965/32AE4AB3E6C0DBF93E22AA675F563A7009CD337B/',
        'https://data.whicdn.com/images/83378582/original.gif',
        'http://data.whicdn.com/images/71828840/large.gif',
        'https://thumbs.gfycat.com/FavorableSafeCrayfish-small.gif',
        'http://cdn47.picsart.com/178651003001202.gif',
        'https://pa1.narvii.com/6119/e8be2ee6f40c7869cfa1b8d5d9192dff516bb835_hq.gif',
        'https://data.whicdn.com/images/35383939/original.gif',
        'http://pa1.narvii.com/5943/c004af41a495d2aed349b0369bb9c398eeeec4f7_hq.gif',

    ]);
    mentionedUser = msg.mentions.members.first()
    // console.log(mentionedUser)
    if (!mentionedUser) {
        let embed = new Discord.RichEmbed()
            .setDescription(`Here's a yaoi gif, **${msg.member.nickname || msg.author.username}** :3`)
			.setColor(0xff8cb4)
            .setImage(kissgif)
        return msg.channel.send(embed)
    }
    else {
        let embed = new Discord.RichEmbed()
            .setDescription(`**${mentionedUser.nickname || mentionedUser.user.username}** was just kissed by **${msg.member.nickname || msg.author.username}** :3`)
			.setColor(0xff8cb4)
            .setImage(kissgif)
        return msg.channel.send(embed)
        // return msg.channel.send(`${msg.author.user.mention} hugged ${mentionedUser}\n${gif}`); // Very simple version
    }
};

exports.help = {
    name: 'ykiss',
    usage: 'ykiss',
    description: 'Sends a yaoi kiss gif.'
};
