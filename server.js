//Load modules
const telegraf = require('telegraf')
//Create a Bot
const bot = new telegraf('<BOT TOKEN HERE>')

//Do something when start command was executed
bot.start(ctx => {
//Yes, you need callback son.

//Send a message when /start command has executed
ctx.reply('Hello, Human!');
})

//Launch the bot
bot.launch().then(() => {
        console.log("Logged as "+bot.context.botInfo.first_name)
        //If it's shows your bot name, Then try execute /start Command, Enjoy!
});
