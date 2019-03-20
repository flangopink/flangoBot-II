var Discord = require('discord.js');

exports.run = (bot, msg) => {
	
    let args = msg.content.split(" ").slice(1);
	
    if (msg.author.bot) return; // will not listen to bots

    if (msg.content.toLowerCase().startsWith('cool beans')) {
        msg.channel.send("cool beans indeed")
    }
	else if (msg.content.toLowerCase().startsWith('ray is gay')) {

			msg.react("😂")   //joy
			msg.react("👌")	 //ok hand
		}	
	else if (msg.content.toLowerCase().startsWith('👃')) {
			msg.react("👃")   //nose
		}	
	else if (msg.content.toLowerCase().startsWith('hm')) {
			msg.react("🤔")   //thinking
		}
	else if (msg.content.toLowerCase().startsWith('//flango')) {
			msg.channel.send(`<:flango:533230324436566047>`)   //flamingo	
			msg.delete(100)
		}
	else if (msg.content.toLowerCase().startsWith('//owo')) {
			msg.channel.send(`<a:owofull:533664028266987529>`)   //owo copypasta	
			msg.delete(100)
			
		}
	else if (msg.content.toLowerCase().startsWith('//monika')) {
			msg.channel.send(`<a:monikaDance1:533663217415880734> \n<a:monikaDance2:533663217457823766> \n<a:monikaDance3:533663217415880714> \n<a:monikaDance4:533663217076142080>`)   //monika	
			msg.delete(100)
			
		}
	else if (msg.content.toLowerCase().startsWith('//polar')) {
			msg.channel.send(`<a:polar:533663446206513163>`)   //polar	
			msg.delete(100)
			
		}
	else if (msg.content.toLowerCase().startsWith('//12vote')) {
		
			msg.channel.send(args.join(" ")|| `Please enter a message`)
			.then (msg => {
			msg.react("1⃣")   //1
			setTimeout(function(){
			msg.react("2⃣")	 //2
			}, 400);   
			})
			msg.delete(800)
		}
			else if (msg.content.toLowerCase().startsWith('//yesnovote')) {
		
			msg.channel.send(args.join(" ")|| `Please enter a message`)
			.then (msg => {
			msg.react("👍")   //upvote
			setTimeout(function(){
			msg.react("👎")	 //downvote
			}, 400);   
			})
			msg.delete(800)
			}
	else if (msg.content.toLowerCase().startsWith('//123vote')) {
		
			msg.channel.send(args.join(" ")|| `Please enter a message`)
			.then (msg => {
			msg.react("1⃣")   //1
			setTimeout(function(){
			msg.react("2⃣")	 //2
			}, 400);   
			setTimeout(function(){
			msg.react("3⃣")   //3
			}, 800); 
			})
			msg.delete(1200)
		}
	else if (msg.content.toLowerCase().startsWith('//1234vote')) {
		
			msg.channel.send(args.join(" ")|| `Please enter a message`)
			.then (msg => {
			msg.react("1⃣")   //1
			setTimeout(function(){
			msg.react("2⃣")	 //2
			}, 400);   
			setTimeout(function(){
			msg.react("3⃣")   //3
			}, 800); 
			setTimeout(function(){
			msg.react("4⃣")   //4
			}, 1200); 
			})
			msg.delete(1600)
		}
	else if (msg.content.toLowerCase().startsWith('//12345vote')) {
		
			msg.channel.send(args.join(" ")|| `Please enter a message`)
			.then (msg => {
			msg.react("1⃣")   //1
			setTimeout(function(){
			msg.react("2⃣")	 //2
			}, 400);   
			setTimeout(function(){
			msg.react("3⃣")   //3
			}, 800); 
			setTimeout(function(){
			msg.react("4⃣")   //4
			}, 1200); 
			setTimeout(function(){
			msg.react("5⃣")   //5
			}, 1600); 
			})
			msg.delete(2000)
		}
	else if (msg.content.toLowerCase().startsWith('//123456vote')) {
		
			msg.channel.send(args.join(" ")|| `Please enter a message`)
			.then (msg => {
			msg.react("1⃣")   //1
			setTimeout(function(){
			msg.react("2⃣")	 //2
			}, 400);   
			setTimeout(function(){
			msg.react("3⃣")   //3
			}, 800); 
			setTimeout(function(){
			msg.react("4⃣")   //4
			}, 1200); 
			setTimeout(function(){
			msg.react("5⃣")   //5
			}, 1600); 
			setTimeout(function(){
			msg.react("6⃣")   //6
			}, 2000); 
			})
			msg.delete(2400)
		}
	else if (msg.content.toLowerCase().startsWith('//1234567vote')) {
		
			msg.channel.send(args.join(" ")|| `Please enter a message`)
			.then (msg => {
			msg.react("1⃣")   //1
			setTimeout(function(){
			msg.react("2⃣")	 //2
			}, 400);   
			setTimeout(function(){
			msg.react("3⃣")   //3
			}, 800); 
			setTimeout(function(){
			msg.react("4⃣")   //4
			}, 1200); 
			setTimeout(function(){
			msg.react("5⃣")   //5
			}, 1600); 
			setTimeout(function(){
			msg.react("6⃣")   //6
			}, 2000); 
			setTimeout(function(){
			msg.react("7⃣")   //7
			}, 2400); 
			})
			msg.delete(2800)
		}
	else if (msg.content.toLowerCase().startsWith('//12345678vote')) {
		
			msg.channel.send(args.join(" ")|| `Please enter a message`)
			.then (msg => {
			msg.react("1⃣")   //1
			setTimeout(function(){
			msg.react("2⃣")	 //2
			}, 400);   
			setTimeout(function(){
			msg.react("3⃣")   //3
			}, 800); 
			setTimeout(function(){
			msg.react("4⃣")   //4
			}, 1200); 
			setTimeout(function(){
			msg.react("5⃣")   //5
			}, 1600); 
			setTimeout(function(){
			msg.react("6⃣")   //6
			}, 2000); 
			setTimeout(function(){
			msg.react("7⃣")   //7
			}, 2400); 
			setTimeout(function(){
			msg.react("8⃣")   //8
			}, 2800); 
			})
			msg.delete(3200)
		}
};

exports.help = {
    name: 'reactions',
    usage: 'reactions',
    description: 'reactions.'
};
