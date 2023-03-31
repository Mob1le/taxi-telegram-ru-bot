const { Telegraf } = require('telegraf')
require('dotenv').config()

const bot = new Telegraf(process.env.SECRET_KEY)    //Связь с ботом

bot.start((ctx) => ctx.reply('Welcome, @' + ctx.message.chat.username));  // Приветствие при команде /start

bot.command('taxi', (ctx) => {      //Начало сбора информации о клиенте
    ctx.reply('Ваш номер телефона?', { reply_markup: { keyboard: [[{text: '📲 Поделиться своим номером телефона', request_contact: true}]] } })
})
bot.on('contact', (ctx) => {        //Как только собрался контакт запрашиваем местоположение (Для Desctop недоступно)
    ctx.reply('Ваше местоположение?', { reply_markup: { keyboard: [[{text: ' Отправить своё местоположение', request_location: true}]] } })
})
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));