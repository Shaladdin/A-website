console.log('starting server... \n\n');


// initialize dotenv
require("dotenv").config({ path: __dirname + '\\.env' });


// initialize express
const express = require('express');
const api = express();
api.use(express.static(__dirname + '/public'))
api.use(express.json({ limit: '1mb' }));


// initialize nedb as a database
const DataStore = require('nedb');
const database = new DataStore('database.db');
database.loadDatabase();


// initialize Discord.js
const apiKey = String(process.env.API_KEY);
const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
client.login(apiKey);


// discord channels
var TestChannel;
//only for boxlessbot:
var RequestChannel;

//Discord bot script
client.on('ready', () => {
    console.log('Sucsesfully Logged in 👍');

    TestChannel = client.channels.cache.get(process.env.TEST_CHANNEL);
    RequestChannel = client.channels.cache.get(process.env.REQUEST_CHANNEL);

    if (process.env.DEBUG_MODE == false)
        TestChannel.send('Bot Started :robot:'); //disable when using nodemon
})




// backend stuff using express

api.listen(3000, () => {
    console.log('API up and running');
});

api.post('/send_massage', (req, res) => {
    console.log('\n\nIncoming request:');

    data = req.body;
    const timeStamp = Date.now();
    data.timeStamp = timeStamp;

    console.log(data);
    // database.insert(data);

    var discordMsg =

        `from: ${data.name} \n
         with email: ${data.email} \n
         \n
          ${data.massage}`;

    TestChannel.send(discordMsg);

    res.json({ status: 'sucses' });
})