var serverRunning = false;

function run() {
    if (!serverRunning) {
        console.log('starting server... \n\n');
        serverRunning = true;


        // initialize dotenv
        require("dotenv").config({ path: __dirname + '\\.env' });
        const debugMode = process.env.DEBUG_MODE == 'true' ? true :
            process.env.DEBUG_MODE == 'false' ? false : undefined;
        if (debugMode === undefined)
            throw new Error('please insert the right input for debug mode in the inverontment variable(true or false)');


        // initialize express
        const express = require('express');
        const api = express();
        api.use(express.static(__dirname + '/public'))
        api.use(express.json({ limit: '1mb' }));


        // // initialize nedb as a database
        // const DataStore = require('nedb');
        // const database = new DataStore('database.db');
        // database.loadDatabase();n


        // initialize Discord.js
        const apiKey = String(process.env.API_KEY);
        //import message embed
        const { MessageEmbed } = require('discord.js');
        const Discord = require('discord.js');
        const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
        client.login(apiKey);


        // initialize json
        const fs = require('fs');
        const path = require('path');
        var localData = JSON.parse(fs.readFileSync(path.resolve(__dirname, './data/data.json')));


        // discord channels
        var TestChannel;
        //only for boxlessbot:
        var RequestChannel;

        var usedChannel;

        //Discord bot script
        client.on('ready', () => {
            console.log(`Sucsesfully Logged in as ${client.user.username}`);

            TestChannel = client.channels.cache.get(process.env.TEST_CHANNEL);
            RequestChannel = client.channels.cache.get(process.env.REQUEST_CHANNEL);
            usedChannel = debugMode ? TestChannel : RequestChannel;

            if (!debugMode)
                TestChannel.send('Bot Started :robot:'); //disable when using nodemon
        })

        // client.on('message', msg => {
        //     console.log(msg.content);
        // })



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

            // send data to discord
            const discordMsg = new MessageEmbed()
                .setColor('273e56')
                .setTitle('Incoming Request!')
                // .setURL(`${__dirname}\\public\\Media\\index.html`) //need to be released to a legit server first
                .setThumbnail(localData['media']['picture']['botPFP'])
                // .setAuthor({ name: client.user.username, iconURL: localData['media']['picture']['botPFP'], url: `${__dirname}\\public\\Media` })
                .addFields(
                    { name: 'From:', value: `\`${data.name}\`` },
                    { name: 'email:', value: `\`${data.email}\`` }
                )
                .setDescription(data.message)
                .setTimestamp();

            usedChannel.send({ embeds: [discordMsg] });
            if (!debugMode)
                usedChannel.send(`<@!${process.env.BOXLESSCREATIVE_DISCORD_ID}>`)

            res.json({ status: 'sucses' });
        })
    }
}
module.exports = {
    run
}
run();