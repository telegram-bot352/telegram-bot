const TelegramBot = require("node-telegram-bot-api");
const express = require("express");

const TOKEN = process.env.BOT_TOKEN;
const bot = new TelegramBot(TOKEN, { polling: true });

// keep alive server (Render sleep fix)
const app = express();
app.get("/", (req, res) => res.send("Bot is running"));
const PORT = process.env.PORT || 3000;
app.listen(PORT);

// START command
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  // 🔥 GIF (MUST)
  bot.sendAnimation(
    chatId,
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjkycmI0emFhMnhyOXBwbjVucTc1amMwMDBtdGZkcGd1dWw2YXI3ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qErKT3fGsg6Mm23nZN/giphy.gif"
  );

  // 🔘 Buttons (2nd image style)
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

  // ✨ Message
  bot.sendMessage(
    chatId,
    "✨ WELCOME TO VIRAL VIDEO BOT ✨\n\n" +
    "✅ আমাদের সব চ্যানেলে জয়েন করুন ✅\n\n" +
    "📽 ভিডিও দেখতে হলে নিচের বাটনগুলো ব্যবহার করুন 👇",
    { reply_markup: keyboard }
  );
});
