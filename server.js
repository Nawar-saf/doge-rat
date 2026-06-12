const express = require('express');
const TelegramBot = require('node-telegram-bot-api');

// ⚠️ هنا نحط بياناتنا من المرحلة الأولى ⚠️
const token = '8680770239:AAGJPgKUH8oK0ir4AAQPPkXuqUnZzA2I7_k';
const chatId = '5703615014';

const app = express();
const bot = new TelegramBot(token, { polling: true });

// نرسل رسالة تأكيد لأيقونة التليجرام عشان نتأكد إن البوت شغال
bot.sendMessage(chatId, '✅ الخادم شغال!');

app.get('/', (req, res) => {
    res.send('DogeRat Server is Active');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
