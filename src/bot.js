// BoxlessBot script:
console.log('Starting BoxlessBot 🤖')

//initialize dotenv
require("dotenv").config({ path: __dirname + '\\.env' });

const apiKey = String(process.env.API_KEY);

// initialize Discord.js
const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
client.login(apiKey);


client.on('ready', () => {
    var TestChannel = client.channels.cache.get(process.env.TEST_CHANNEL);
    console.log('Sucsesfully Logged in 👍');
})