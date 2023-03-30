const { Telegraf } = require('telegraf')
require('dotenv').config()

const bot = new Telegraf(process.env.SECRET_KEY)

bot.command('start', (ctx) => {
    
    ctx.reply('Добро пожаловать, '+ ctx.message.chat.first_name)
})
bot.launch()