// Code by MrPleasant_exe, tag/db custom commands made by BigBrainAFK <3

const Sequelize = require('sequelize');
const { Client, Collection } = require("discord.js");
const { config } = require("dotenv"); //makes it so .env is required before running
const fs = require("fs");
const fetch = require('node-fetch');
const client = new Client({
    disableEveryone: true
})

// Deals with commands 

client.commands = new Collection();
client.aliases = new Collection();
client.availableTags = new Collection();
client.categories = fs.readdirSync("./commands/");


// Tag system by @BigBrainAFK 
// Initilize Database locally and attach it to the client object
// Just change dialect to MySQL for example and change the values accordingly
client.database = new Sequelize('db.name', 'username', 'dbpassword', {
	host: 'IP',
    dialect: 'mariadb', // For local testing
    //dialect: 'mariadb',
    //dialectOptions: {connectTimeout: 1000}, // mariadb connector option
	logging: false,
    // SQLite only
    // Delete this for anything thats not sqlite
	//  storage: 'database.sqlite',
});

client.tags = client.database.define('tags', {
    name: {
        type: Sequelize.STRING,
        unique: true
    },
    message: Sequelize.TEXT
});

client.tags.sync().then(() => {
    client.tags.findAll().then(tagList => {
        tagList.forEach(t => {
            client.availableTags.set(t.name, t.message);
        });
    });
});

// This calls for the bots token in /.env

config({
    path: __dirname + "/.env"
});

["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});


// This is what the bot will be playing of streaming and what will show up on console when being launched
client.on("ready", () => {
    console.log(`${client.user.username} is now online!`);
    client.user.setPresence({
        status: "offline",
        game: {
            name: "Being Developed my Senpai 0w0",
            type: "PLAYING"
        }
    }); 
})


// Basically deals with command prefixs
client.on("message", async message => {
    const prefix = "!";

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    if (command) 
        return command.run(client, message, args);

    let tag = client.availableTags.get(cmd);   
});

// Deletes discord invite links and blocks shady links, help from BigBrainAFK (basically 90% of it)
client.on('message', async (message) => {
    if (/discord\.gg.?[a-z0-9]{5,16}/.test(message.content.toLowerCase()) && !message.member.hasPermission('KICK_MEMBERS')) {
        message.delete();
        message.reply('Please do not post invite links!');
        message.author.send("Your invite link has been removed for safety reasons, feel free to contact WootHelp.");
    }
  });

  client.on('message', message => {
    if (/bit\.ly.?[a-z0-9]{5,16}/.test(message.content.toLowerCase()) && !message.member.hasPermission('KICK_MEMBERS')) {
        message.delete();
        message.reply('Please do not post bit.ly links, it can be used for really shady stuff');
        message.author.send("Your link has been removed for safety reasons, feel free to contact WootHelp.");
    }
  });

  client.on('message', message => {
    if (/bit\.ly.?[a-z0-9]{5,16}/.test(message.content.toLowerCase()) && !message.member.hasPermission('KICK_MEMBERS')) {
        message.delete();
        message.reply('Please do not post bit.ly links, it can be used for really shady stuff');
        message.author.send("Your link has been removed for safety reasons, feel free to contact WootHelp.");
    }
  });

  client.on('message', message => {
    if (/bit\.ly.?[a-z0-9]{5,16}/.test(message.content.toLowerCase()) && !message.member.hasPermission('KICK_MEMBERS')) {
        message.delete();
        message.reply('Please do not post bit.ly links, it can be used for really shady stuff');
        message.author.send("Your link has been removed for safety reasons, feel free to contact WootHelp.");
    }
  });

 // Fun misc stuff 
 client.on('message', message => {
    if (message.content.includes("t3")) {
          client.users.get("365619937122844672").send("Someone is talking about you");  
    }
  });

  //End

client.login(process.env.TOKEN);