const {Telegraf} = require('telegraf');
const SocksAgent = require('socks5-https-client/lib/Agent');
const TelegrafInlineMenu = require('telegraf-inline-menu');
const ENV = require('./config');

const menu = new TelegrafInlineMenu(ctx => `Hey ${ctx.from.first_name}!`)

try {
    const socksAgent = new SocksAgent({
      socksHost: ENV.SOCKS5_HOST,
      socksPort: ENV.SOCKS5_PORT,
      socksUsername: SOCKS5_USERNAME,
      socksPassword: SOCKS5_PASSWORD,
    });
  
    const bot = new Telegraf('839724186:AAECSrTzy07tcDF4L4pJ5PNo0HHP-2MEM0Q', {
      telegram: { agent: socksAgent },
    });
  
    bot.start((ctx) => ctx.reply('Добро пожаловать! Это бот поможет выявить COVID-19 с помощью простых вопросов. Выберите через меню, что хотите сделать.'));
    bot.command('помочь не умереть', (ctx) => {
        ctx.reply('pupa');
    })
    bot.help((ctx) => ctx.reply('Send me a sticker'));
    bot.on('sticker', (ctx) => ctx.reply('👍'));
    bot.hears('hi', (ctx) => ctx.reply('Hey there'));
    bot.launch();
  
    console.log('[BOT] Initialized.');
  } catch (err) {
    console.error(err);
  }