// Built-in libraries from Node.JS
const Discord = require('discord.js');
const path = require('path');
const fs = require('fs');
const superagent = require('superagent');
const randomPuppy = require('random-puppy');

// Only import the Client class from Discord.js
const { Client } = require('discord.js');

// My ID
const ownerID = '424486293330984961';


// Super fancy config loader/validator
const config = (() => {
    // Make sure the config file exists
    if (!fs.existsSync('config.json')) {
        // They must not have copied the config-example.json file yet,
        // so just exit
        console.error('Please copy the config-example.json file and rename it to config.json, filling out all required fields.');
        process.exit(1);
    }

    let json;
    try {
        // Parse the JSON file
        json = JSON.parse(fs.readFileSync('config.json').toString());
    } catch (error) {
        // Catch any parser errors or read errors and exit
        console.error(`Failed to load/parse the config.json file: ${error}`);
        process.exit(1);
    }

    // If there isn't a token, the bot won't start, but if there is then
    // we want to make sure it's a valid bot token
    if (json.token && !/^[a-zA-Z0-9_\.\-]{59}$/.test(json.token)) {
        console.error('The token you entered is invalid! Please carefully re-enter the token and restart the bot.');
        process.exit(1);
    }

    return json;
})();

// Store the commands in a Map (slightly better than a raw object)
const commands = new Map();
// Create the client
const bot = new Client({ disableEveryone:true, autoReconnect:true });

// Store the config and commands on the bot variable so as to make them
// easily accessible in commands and other files
bot.config = config;
bot.commands = commands;





// Read every file in ./commands and filter out the non-JS files

fs.readdirSync(path.resolve(__dirname, 'commands'))
	.filter(f => f.endsWith('.js'))
	.forEach(f => {
		delete require.cache[require.resolve(`./commands/${f}`)]
		// Attempt to load the file
		console.log(`Loading command ${f}`);
		try {
			// Require the raw file
			let command = require(`./commands/${f}`);
			// Validate that there's a run function and a valid help object
			if (typeof command.run !== 'function') {
				throw 'Command is missing a run function!';
			} else if (!command.help || !command.help.name) {
				throw 'Command is missing a valid help object!';
			}
			
			let ops = { ownerID: ownerID }
			
			// Store the command in the map based on its name
			commands.set(command.help.name, command);
		} catch (error) {
			// Log any errors from the validator or from requiring the file
			console.error(`Failed to load command ${f}: ${error}`);
		}
	});
	
fs.readdirSync(path.resolve(__dirname, 'commands/images'))
	.filter(f => f.endsWith('.js'))
	.forEach(f => {
		delete require.cache[require.resolve(`./commands/images/${f}`)]
		// Attempt to load the file
		console.log(`Loading command ${f}`);
		try {
			// Require the raw file
			let command = require(`./commands/images/${f}`);
			// Validate that there's a run function and a valid help object
			if (typeof command.run !== 'function') {
				throw 'Command is missing a run function!';
			} else if (!command.help || !command.help.name) {
				throw 'Command is missing a valid help object!';
			}
			
			let ops = { ownerID: ownerID }
			
			// Store the command in the map based on its name
			commands.set(command.help.name, command);
		} catch (error) {
			// Log any errors from the validator or from requiring the file
			console.error(`Failed to load command ${f}: ${error}`);
		}
	});
	
fs.readdirSync(path.resolve(__dirname, 'commands/votes'))
	.filter(f => f.endsWith('.js'))
	.forEach(f => {
		delete require.cache[require.resolve(`./commands/votes/${f}`)]
		// Attempt to load the file
		console.log(`Loading command ${f}`);
		try {
			// Require the raw file
			let command = require(`./commands/votes/${f}`);
			// Validate that there's a run function and a valid help object
			if (typeof command.run !== 'function') {
				throw 'Command is missing a run function!';
			} else if (!command.help || !command.help.name) {
				throw 'Command is missing a valid help object!';
			}
			
			let ops = { ownerID: ownerID }
			
			// Store the command in the map based on its name
			commands.set(command.help.name, command);
		} catch (error) {
			// Log any errors from the validator or from requiring the file
			console.error(`Failed to load command ${f}: ${error}`);
		}
	});

	
	
	
	
	
	
	
	
	
bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag} (ID: ${bot.user.id})`)
    bot.generateInvite([
        'SEND_MESSAGES',
        'MANAGE_MESSAGES',
        // Here are some other common permissions you might want to include:
        // (Complete list can be found at https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=s-FLAGS)
        //
        // *** General moderation permissions:
        // 'KICK_MEMBERS',
        // 'BAN_MEMBERS',
        // *** Guild settings permissions:
        // 'MANAGE_CHANNELS',
        // 'MANAGE_GUILD',
        // 'MANAGE_NICKNAMES',
        // 'MANAGE_ROLES',
        // *** Voice permissions:
        // 'CONNECT',
        // 'SPEAK',
        // *** Voice moderation permissions:
        // 'MOVE_MEMBERS',
        // 'MUTE_MEMBERS',
        // 'DEAFEN_MEMBERS',
    ]).then(invite => {
        // After generating the invite, log it to the console
        console.log(`Click here to invite the bot to your guild:\n${invite}`);
    });
});

bot.on('message', message => {
    // Ignore messages from bots and from DMs (non-guild channels)
    if (message.author.bot || !message.guild) {
        return;
    }

    // Just a shorthand variable
    let { content } = message;
    // Ignore any messages that don't start with the configurable prefix
    if (!content.startsWith(config.prefix)) {
        return;
    }

    // Take all the text after the prefix and split it into an array,
    // splitting at every space (so 'hello world' becomes ['hello', 'world'])
    let split = content.substr(config.prefix.length).split(' ');
    // Get the command label (which is the first word after the prefix)
    let label = split[0];
    // Get the rest of the words after the prefix
    let args = split.slice(1);

    // If there's a command with that given label...
    if (commands.get(label)) {
        // ... get the command with that label and run it with the bot, the
        // message variable, and the args as parameters
        commands.get(label).run(bot, message, args);
    }
});


// Automatically reconnect if the bot disconnects due to inactivity
bot.on('disconnect', function(error) {
    console.error(`----- Bot disconnected from Discord with code ${f} for reason:`, error, `-----`);
    bot.connect();
});



const guilds = require("./data/guilds.json");
//console.log(guilds)


//welcome
bot.on('guildMemberAdd', member => {

    console.log(guilds)
    console.log(member.guild.id)
    console.log(guilds[member.guild.id])

    let logChannel = member.guild.channels.get(guilds[member.guild.id].logChannelID)
    try {
        logChannel.send({
            embed: new Discord.RichEmbed()
				.setColor(0xff8cb4)
                .setThumbnail(member.user.displayAvatarURL)
                .setDescription(`${member} - ${member.user.tag}`)
                .setFooter(`ID: ${member.id}`)
                .setAuthor(`Member joined!`, member.user.displayAvatarURL)
                .setTimestamp()
        });
    }
    catch (error) {
        if (!logChannel) console.log('No logchannel defined for this guild!');
        else console.log(error);
    }
    console.log(`Member joined! ${member.user.tag}`);
});

//bye
bot.on('guildMemberRemove', member => {

    console.log(guilds)
    console.log(member.guild.id)
    console.log(guilds[member.guild.id])

    let logChannel = member.guild.channels.get(guilds[member.guild.id].logChannelID)
    try {
        logChannel.send({
            embed: new Discord.RichEmbed()
				.setColor(0xff8cb4)
                .setThumbnail(member.user.displayAvatarURL)
                .setDescription(`${member} - ${member.user.tag}`)
                .setFooter(`ID: ${member.id}`)
                .setAuthor(`Member left.`, member.user.displayAvatarURL)
                .setTimestamp()
        })
    }
    catch (error) {
        if (!logChannel) console.log('No logchannel defined for this guild!');
        else console.log(error);
    }
    console.log(`Member left! ${member.user.tag}`);
});

///////DELETED MESSAGES LOG
bot.on('messageDelete', message => {
	
    if (message.author.bot || !message.guild || !message.guild.channels || (!message.cleanContent && !message.attachments.first())) {
        return;
    };
	
	if (message.author.id != "543500621752303636" || "282179094496542721") return;
	
    let channel = message.guild.channels.find(c => c.name === "datas-deleted-messages");
    if (!channel) return;

    let embed = new Discord.RichEmbed()
                .setTitle('Message Deleted!')
                .setDescription(`\`\`\`\n${(message.cleanContent).substr(0, 1950)}\n\`\`\``)
                .addField('Channel', `${message.channel}`)
                .setColor(0xff8cb4)
                .setTimestamp(new Date())
                .setFooter(`Author: @${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
                .setColor(0xff8cb4)

    if (message.attachments.size > 0) {
        const attachment = message.attachments.first();
        if (attachment.width) {
            embed.setImage(attachment.url);
        } else {
            embed.attachFile(attachment.url);
        }
        if (message.cleanContent) {
            embed.setDescription(`\`\`\`\n${(message.cleanContent).substr(0, 1950)}\n\`\`\`\n[File](${attachment.url})`)
        } else embed.setDescription(`[File](${attachment.url})`);
    } else if (message.cleanContent) embed.setDescription(`\`\`\`\n${(message.cleanContent).substr(0, 1750)}\n\`\`\``);
	
    channel.send({ embed });
});







const activities_list = [
    "with other flamingos", 
    "dead",
	"with fire",
	"Minecraft",
	"literally nothing",
	"a prank on you",
	"Discord",
	"with anime girls",
	"something",
	"against the rules",
	"poker",
	"Minesweeper",
	"with code",
	"with cute boys",
	"guitar",
	"Team Fortress 2",
	"osu!",
	"with imaginary friends",
	"with data",
	"or not 🤔",
	"against the first rule.",
	"--use //help for help--",
	"--use //help for help--",
	"--use //help for help--",
	"--use //help for help--",
	"--use //help for help--",
	"--use //help for help--",
	"--use //help for help--",
	"--use //help for help--"
    ]; // creates an arraylist containing phrases you want your bot to switch through.

bot.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
        bot.user.setActivity(activities_list[index]); // sets bot's activities to one of the phrases in the arraylist.
    }, 60000); // Runs this every 60 seconds.
});
global.activities_list = activities_list




/*
bot.on('message', (message, args) => {
	
	if (message.author.bot || !message.guild || !message.guild.channels || (!message.cleanContent && !message.attachments.first())) {
        return;
    };
	if (!channel) console.log('No uptime log channel defined for this guild!');
	
    setInterval(() => {
		
	let channel = bot.channels.find(c => c.name === "bot-uptime");
		
        let totalSeconds = (bot.uptime / 1000);
		let days = Math.floor(totalSeconds / 86400);
		let hours = Math.floor(totalSeconds / 3600);
		totalSeconds %= 3600;
		let minutes = Math.floor(totalSeconds / 60);
		let seconds = (totalSeconds % 60).toFixed(1);
	
		let uptime = `Uptime: ${days} days, ${hours} hours, ${minutes} minutes. :watch:`;
		channel.send(uptime).then(m => {
        m.edit(`Uptime: ${days} days, ${hours} hours, ${minutes} minutes. \`${m.createdTimestamp - message.createdTimestamp}ms\``);
    });
		
    }, 10000); // Runs this every 10 fucking seconds.
	
	console.log(`${uptime}`);
});



bot.on('message', function(message) {
		
    if (message.content === "//uptimeloop") { 
        var interval = setInterval (function () {
            // use the message's channel (TextChannel) to send a new message
            message.channel.send("//uptimecheckin")
        }, 10000); // 1 minute
    }
});

*/


//////the most important command ever

bot.on('message', msg => {
	
	if (msg.author.bot) return; // will not listen to bots
	if (msg.content.toLowerCase().startsWith('cool beans')) {
        msg.channel.send("cool beans indeed")
    }
});




//////////I DONT HAVE ANY IDEA HOW TO MAKE A WORKING /HELP MODULE 

////////////HELP
bot.on('message', msg => {
    if (msg.author.bot) return; // will not listen to bots
    if (!msg.content.startsWith('//help')) return; // Will only respond if the start of the message is "/hug"

    mentionedUser = msg.mentions.members.first()
    // console.log(mentionedUser)

    if (!mentionedUser) {

        return msg.author.send({
            embed: {
                color: 0xff8cb4,
                author: {
                    name: bot.user.username,
                    icon_url: bot.user.avatarURL
                },
                title: "By Flango <:flango:533230324436566047> (bot base by Rayzr)",
                description: "__**List of commands (Page 1):**__",
                fields: [


                    {
                        name: ":robot: **__BOT COMMANDS__**",
                        value: ":wrench: __ping pong__"
                    },


                    {
                        name: "//help",
                        value: "Shows this message."
                    },
					{
                        name: "//mischelp",
                        value: "Shows a list of other commands which are mostly useless."
                    },
                    {
                        name: "//ping",
                        value: "Pings the bot."
                    },
                    {
                        name: "//uptime",
                        value: "Bot's current uptime."
                    },
                    {
                        name: "//invite",
                        value: "Bot's invite link."
                    },
                    {
                        name: "//changeactivity",
                        value: "Change current activity (`Playing ...`)."
                    },
                    {
                        name: "~~/reset |  /reboot  |  /restart  |  /kys~~",
                        value: "~~Reboots the bot. (Admins only)~~"
                    },
					{
                        name: "//contactdev `*message*`",
                        value: "Sends a DM to bot's dev. \n Use it in case the bot breaks or does weird shit"
                    },
                    {
                        name: "//say `*message*`",
                        value: "Repeats after you."
                    },
					
					{
                        name: "~~/yesnovote  |  /12vote  |  /123vote  |  /1234vote  |  /12345vote  |  /123456vote  |  /1234567vote  |  /12345678vote `*message*`~~",
                        value: "~~Sets up a vote.~~"
                    },

					
                    {
                        name: ":thinking: **__USEFUL STUFF__**",
                        value: ":tools: __(more will be added)__"
                    },

					
                    {
                        name: "//avatar @someone",
                        value: "Sends an avatar of the mentioned person."
                    },
					
                ],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.avatarURL,
                    text: "Requested by " + `${msg.member.nickname || msg.author.username}`
                }
            }
        });
    }
})



bot.on('message', msg => {
	if (msg.author.bot) return; // will not listen to bots
    if (!msg.content.startsWith('//help')) return; // Will only respond if the start of the message is "/hug"

    mentionedUser = msg.mentions.members.first()
    // console.log(mentionedUser)

    if (!mentionedUser) {

        return msg.author.send({
            embed: {
                color: 0xff8cb4,
                author: {
                    name: bot.user.username,
                    icon_url: bot.user.avatarURL
                },
                title: "BLUE TEXT",
                url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                description: "__**List of commands (Page 2):**__",
                fields: [
					
                    {
                        name: ":revolving_hearts: **__INTERACTIONS__**",
                        value: ":heartpulse: __hug, kiss and beat people up!__"
                    },


                    {
                        name: "//kiss @someone",
                        value: "Kiss the mentioned person."
                    },
                    {
                        name: "//hug @someone",
                        value: "Hug the mentioned person."
                    },

                    {
                        name: "//ykiss @someone",
                        value: "Sends a yaoi kiss gif."
                    },
                    {
                        name: "//yhug @someone",
                        value: "Sends a yaoi hug gif."
                    },

                    {
                        name: "//cuddle @someone",
                        value: "Cuddle with the mentioned person."
                    },
					
                    {
                        name: "//pat @someone",
                        value: "Pat the mentioned person."
                    },
					
					{
                        name: "//tickle @someone",
                        value: "Tickle the mentioned person."
                    },
					
                    {
                        name: "//cookie @someone",
                        value: "Give a cookie to the mentioned person."
                    },
					
                    {
                        name: "//beat the shit out of @someone",
                        value: "Self explanatory."
                    },

                    {
                        name: "//smash @someone",
                        value: "Sends a nsfw yaoi gif probably **(WIP)**."
                    },

                ],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.avatarURL,
                    text: "Requested by " + `${msg.member.nickname || msg.author.username}`
                }
            }
        });
    }
})


bot.on('message', msg => {
    if (msg.author.bot) return; // will not listen to bots
    if (!msg.content.startsWith('//help')) return; // Will only respond if the start of the message is "/hug"

    mentionedUser = msg.mentions.members.first()
    // console.log(mentionedUser)

    if (!mentionedUser) {

        return msg.author.send({
            embed: {
                color: 0xff8cb4,
                author: {
                    name: bot.user.username,
                    icon_url: bot.user.avatarURL
                },
                title: "BLUE TEXT",
                url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                description: "__**List of commands (Page 3):**__",
                fields: [

                    {
                        name: ":space_invader: **__GAMES__**",
                        value: ":game_die: __(more will be added)__"
                    },


                    {
                        name: "//coin",
                        value: "Flip a coin."
                    },

                    {
                        name: "//rps~",
                        value: "Rock, Paper, Scissors."
                    },


                    {
                        name: ":cat: **__RANDOM PICS AND GIFS__**",
                        value: ":dog: __meowers, woofers, memes and cute girls!__"
                    },


                    {
                        name: "//meme",
                        value: "Sends a meme."
                    },

                    {
                        name: "~~//lewd~~",
                        value: "~~Sends a nsfw pic/gif. (**WIP**)~~"
                    },


                    {
                        name: "//cat",
                        value: "Sends a cat pic."
                    },

                    {
                        name: "//dog",
                        value: "Sends a doggo pic."
                    },

                    {
                        name: "//neko",
                        value: "Sends a neko pic."
                    },

                    {
                        name: "//gifneko",
                        value: "Sends a neko gif. (sometimes may be a little nsfw)"
                    },

                    {
                        name: "//smug",
                        value: "Sends a smug gif."
                    },

                    {
                        name: "//lizard",
                        value: "Sends a lizard pic."
                    },

                ],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.avatarURL,
                    text: "Requested by " + `${msg.member.nickname || msg.author.username}`
                }
            }
        });
    }
})






bot.on('message', msg => {
    if (msg.author.bot) return; // will not listen to bots
    if (!msg.content.startsWith('//mischelp')) return; // Will only respond if the start of the message is "/hug"

    mentionedUser = msg.mentions.members.first()
    // console.log(mentionedUser)

    if (!mentionedUser) {

        return msg.author.send({
            embed: {
                color: 0xff8cb4,
                author: {
                    name: bot.user.username,
                    icon_url: bot.user.avatarURL
                },
                title: "MISC COMMANDS",
                description: "__**List of useless commands:**__",
                fields: [

                    {
                        name: ":floppy_disk:  **__COMMANDS__**",
                        value: ":boom: __(more will be added)__"
                    },

                    {
                        name: "//time",
                        value: "Current time."
                    },

                    {
                        name: "//nword",
                        value: "THAT'S RACIST, YOU CAN'T SAY THE N-WORD!"
                    },
					
                    {
                        name: "//rr",
                        value: "This command will never give you up."
                    },
					
					{
                        name: ":thinking:  **__REACTIONS__**",
                        value: ":joy: __(more will be added)__"
                    },
					
					{
                        name: "messages",
                        value: "`ray is gay`, 👃, `cool beans`, `hm`, "
                    },
					
					{
                        name: "<:flango:533230324436566047>  **__EMOJI__**",
                        value: ":snake: __(more will be added)__"
                    },
					
					{
                        name: "commands",
                        value: "`//flango`, `//owo`, `//monika`, `//polar`, "
                    },
                ],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.avatarURL,
                    text: "Requested by " + `${msg.member.nickname || msg.author.username}`
                }
            }
        });
    }
})


// Only run the bot if the token was provided
config.token && bot.login(config.token);
