const Disco = require("discord.js") 
const bot = new Disco.Client();
const server = require('./server.js')
bot.on('message', (message) => {
if(message == 'test');
message.react('😆');
}
bot.login("")
