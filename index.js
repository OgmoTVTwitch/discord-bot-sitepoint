require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
};

{ if(msg.content.starsWith('!info')) {
 eslseif (msg.mentions.users.size)  {
    const taggedUser = msg.mentions.users.first()
    msg.channel.send(`Voici les info de: ${taggedUser.username}`);
 } else {
   msg.reply('Please tage a valid user! ');
  }
}  

module.exports = {
  Info: require('./info'),
  name: 'info',
  description: 'Info!',
  execute(msg, args) {
    msg.reply('Voici les info de');
    msg.channel.send('Voici les info de');
  },
};
       
