const { Telegraf } = require('telegraf')
require('dotenv').config()

const bot = new Telegraf(process.env.SECRET_KEY)

//console.log(process.env)
bot.launch()