const TelegramBot = require("node-telegram-bot-api");
const express = require("express");

const TOKEN = process.env.BOT_TOKEN;

// ✅ SAFE polling (conflict কমানোর জন্য)
const bot = new TelegramBot(TOKEN, {
  polling: {
    interval: 300,
    autoStart: true,
    params: { timeout: 10 }
  }
});

// keep alive server
const app = express();
app.get("/", (req, res) => res.send("Bot is running"));
const PORT = process.env.PORT || 3000;
app.listen(PORT);

// ✅ FIXED SITE (purple bypass)
const SITE = "https://l.facebook.com/l.php?u=https://viral13236.blogspot.com";

// START COMMAND
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  // ✅ GIF (only this, extra image না)
  bot.sendAnimation(
    chatId,
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjkycmI0emFhMnhyOXBwbjVucTc1amMwMDBtdGZkcGd1dWw2YXI3ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qErKT3fGsg6Mm23nZN/giphy.gif"
  );

  // buttons
  const keyboard = {
    inline_keyboard: [
      [
        { text: "💖 Backup Channel", url: "https://t.me/secretworld234" },
        { text: "🎬 Watch Video", url: SITE }
      ],
      [
        { text: "💕 Video Channel", url: SITE },
        { text: "💕 Tiktoker", url: SITE }
      ],
      [
        { text: "💕 Bangladeshi 🇧🇩", url: SITE },
        { text: "💕 Thailand 🇹🇭", url: SITE }
      ],
      [
        { text: "💕 Pakistan 🇵🇰", url: SITE },
        { text: "💕 Instagram", url: SITE }
      ],
      [
        { text: "📽 ভিডিও দেখুন", url: SITE }
      ]
    ]
  };

  // message
  bot.sendMessage(
    chatId,
    `<b>✨ WELCOME TO VIRAL VIDEO BOT ✨</b>

<b>✅ আমাদের সব চ্যানেলে জয়েন করুন ✅</b>

<b>📽 ভিডিও দেখতে হলে নিচের বাটনগুলো ব্যবহার করুন 👇</b>`,
    {
      parse_mode: "HTML",
      reply_markup: keyboard
    }
  );
});
