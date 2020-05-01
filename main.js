const Discord = require('discord.js');
const { TOKEN, PREFIX } = require("./config");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Le bot ${client.user.tag} a démmaré avec succès!`);
});

client.on('message', msg => {
  if (msg.content.startsWith(`${PREFIX}ping`)) msg.channel.send("***Pong*** 🏓");
  if (msg.content.startsWith(`demute moi`)) msg.reply("***NON PD*** 🏳️‍🌈");
});

client.login(TOKEN);