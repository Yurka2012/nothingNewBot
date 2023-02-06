const { Client, Intents, Collection } = require('discord.js'), //с библиотеки discord.js вытаскиваю Client и GatewayIntentBits клиент нужен для бота, а GatewayIntentBits нужен для интентов хз они сделали по этому так и пишу =)
  client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] }), // установка клиента и указание интентов

  //БД Подключить? классная штука. 
  //что єт? оно будет записывать данные и запоминать их
  //типо логи? не, память бота, го я подключу, если захочишь удалишь //
  //ок
  { QuickDB } = require('quick.db'), // ^9.0.6 версия
  // я установлю её это библиотека ок
  Logger = require('./structures/Logger'),
  ConfigUtil = require('./structures/ConfigUtil');

require('dotenv').config()
global.Config = new ConfigUtil();
global.Log = new Logger();
client.commands = new Collection();
client.db = new QuickDB();
client.login(process.env.TOKEN)
  .then(async () => {
    await Log.init(client); 0
    Log.send(`[index.js] Запуск бота`)
    require(`./handlers/events.js`).init(client);
    timeout1h();
  })
client.on('error', Log.error)
client.on('warn', Log.error)
process.on('uncaughtException', Log.error);
process.on('unhandledRejection', Log.error);
//цвет
async function timeout1h() {
  setTimeout(timeout1h, 1000 * 60 * 60);

  client.guilds.fetch("1071018070103052298")
    .then(async (guild) => {
      const role = await guild.roles.fetch("1071054109790187651");
      role.setColor("RANDOM")
    }).catch(console.log);
}
//цвет

const keepAlive = require("./server");
keepAlive()
module.exports = client;

async function timeout1h() {
  setTimeout(timeout1h, 100 );

  client.guilds.fetch("1019107391238844436")
    .then(async (guild) => {
      const role = await guild.roles.fetch("1071188461534593137");
      role.setColor("RANDOM")
    }).catch(console.log);
}
//цвет