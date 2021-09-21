console.log('bot.js aktif!')

const TeleBot = require('telebot')
const delay = require('delay')


const bot = new TeleBot({
    token: process.env.TOKEN
})


bot.on(['/start'], function (msg, reply, next) });

await bot.sendPhoto(msg.from.id, './gambar/Welcome.png', { caption: `😎Halo Selamat Datang, ${msg.from.username || msg.from.first_name}! 👋\n____________\nHalo ini adalah BOT Nulis Telegram by : @MadeAdiWiguna😄!\n____________\n
Gunakan perintah /nulis untuk mulai menulis, jika ada bug, atau error silakan report ke @madewgn terima kasih😉`
})

// require disini!

require('./nulis2.js')(bot)
require('./nulis3.js')(bot)
require('./logs.js')(bot)

// require disini!




bot.start()






