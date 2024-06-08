require('dotenv').config();
const { token } = process.env;
const {Client, Collection, GatewayIntentBits} = require('discord.js');
const fs = require('fs'); //fs allows you to work with file system

const client = Client({ intents: GatewayIntentBits.Guilds});
client.commands = new Collection();
client.commandArray = [];


const functionFolders = fs.readdirSync('./src/functions');
for (const folder of functionFolders) {
    const functionFiles = fs.readdirSync(`./src/functions/${folder}`).filter(file => file.endsWith('.js'));
    for (const file of functionFiles) {
        require(`./src/functions/${folder}/${file}`)(client);
    }
}



