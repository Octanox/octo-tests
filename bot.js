//Irc bot 
//Version 0.0.2
//This code sucks 

// Configuration
var config = {
	version : "0.0.3"
	channels: ["#RealRoleplayRPG"],
	server: "irc.freenode.net",
	botName: "RRR-Bot",
	prefix: "!"
};
var irc = require("irc");
var bot = new irc.Client(config.server, config.botName, {
	channels: config.channels
});
bot.addListener("join", function(channel, who) {
	bot.say(channel, who + "Welcome to Real Roleplay RPG !");
});

//Private message
//Btw I need to know how to make it a command ; Since as of rite now it will send this no matter what is said
bot.addListener("message", function(from, to, text, message) {
	if(message.startsWith(config.prefix)){}
		var e = {
			from: from,
			to: to,
			text: text,
			message: message
		};
		var passedMessage = message.substring(1).split(" ");
		if(!passedMessage[0])
			return;
		if(commands[passedMessage[0]]){
			commands[passedMessage[0]].action(bot, e);
		}
		//bot.say(from, "Bot version is " + config.version);
	}
});

//Read data from txt file ?


var commands = {
	ping : {
		action: function(bot, e){
			bot.say(e.from, "Pong!\nThis bot is running version " + config.version);
		}
	}

}