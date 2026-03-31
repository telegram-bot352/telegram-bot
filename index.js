const TelegramBot = require("node-telegram-bot-api");
const express = require("express");

const TOKEN = process.env.BOT_TOKEN;

const bot = new TelegramBot(TOKEN, {
  polling: {
    interval: 300,
    autoStart: true,
    params: { timeout: 10 }
  }
});

const app = express();
app.get("/", (req, res) => res.send("Bot is running"));
const PORT = process.env.PORT || 3000;
app.listen(PORT);

const SITE = "https://viral13236.blogspot.com/?m=1";
const TG = "https://t.me/secretworld234";

bot.onText(/\/start/, async (msg) => {
  const chatId = msg.chat.id;

  // ✅ GIF first (top)
  await bot.sendAnimation(
    chatId,
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjkycmI0emFhMnhyOXBwbjVucTc1amMwMDBtdGZkcGd1dWw2YXI3ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qErKT3fGsg6Mm23nZN/giphy.gif"
  );

  // ✅ Buttons (web_app fixed)
  const keyboard = {
    inline_keyboard: [
      [
        { text: "Backup Channel", url: TG },
        { text: "Watch Channel", url: TG }
      ],
      [
        { text: "Tiktoker", web_app: { url: SITE } },
        { text: "Bangladeshi 🇧🇩", web_app: { url: SITE } }
      ],
      [
        { text: "USA 🇺🇸", web_app: { url: SITE } },
        { text: "Pakistan 🇵🇰", web_app: { url: SITE } }
      ],
      [
        { text: "Instagram", web_app: { url: SITE } },
        { text: "🎬 ভিডিও দেখুন", web_app: { url: SITE } }
      ]
    ]
  };

  // ✅ Caption + buttons
  bot.sendMessage(
    chatId,
    `✨ WELCOME TO VIRAL VIDEO BOT ✨

✅ আমাদের সব চ্যানেলে জয়েন করুন ✅

🎬 ভিডিও দেখতে নিচের বাটন ব্যবহার করুন 👇`,
    {
      reply_markup: keyboard
    }
  );
});
