const TelegramBot = require("node-telegram-bot-api");
const express = require("express");

const TOKEN = process.env.BOT_TOKEN;
const bot = new TelegramBot(TOKEN, { polling: true });

// keep alive server
const app = express();
app.get("/", (req, res) => res.send("Bot is running"));
const PORT = process.env.PORT || 3000;
app.listen(PORT);

// START
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  // 🔘 Buttons
  const keyboard = {
    inline_keyboard: [
      [
        { text: "💖 Backup Channel", url: "https://t.me/secretworld234" },
        { text: "🎬 Watch Video", url: "https://viral13236.blogspot.com" }
      ],
      [
        { text: "💕 Video Channel", url: "https://viral13236.blogspot.com" },
        { text: "💕 Tiktoker", url: "https://viral13236.blogspot.com" }
      ],
      [
        { text: "💕 Bangladeshi 🇧🇩", url: "https://viral13236.blogspot.com" },
        { text: "💕 Thailand 🇹🇭", url: "https://viral13236.blogspot.com" }
      ],
      [
        { text: "💕 Pakistan 🇵🇰", url: "https://viral13236.blogspot.com" },
        { text: "💕 Instagram", url: "https://viral13236.blogspot.com" }
      ],
      [
        { text: "📽 ভিডিও দেখুন", url: "https://viral13236.blogspot.com" }
      ]
    ]
  };

  // ✨ CENTER TEXT
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
