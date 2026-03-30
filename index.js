const express = require("express");
const TelegramBot = require("node-telegram-bot-api");

const app = express();

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

// START + BUTTON
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id,
    "✨ WELCOME TO VIRAL VIDEO BOT ✨\n\n👇 নিচের button ব্যবহার করুন",
    {
      reply_markup: {
        inline_keyboard: [
          [{ text: "💖 Backup Channel", url: "https://t.me/secretworld234" }],
          [{ text: "💞 Video Channel", url: "https://t.me/secretworld234" }],
          [{ text: "🎥 ভিডিও দেখুন", callback_data: "watch" }]
        ]
      }
    }
  );
});

// BUTTON CLICK
bot.on("callback_query", (query) => {
  const chatId = query.message.chat.id;

  if (query.data === "watch") {
    bot.sendMessage(chatId, "🎥 ভিডিও দেখতে নিচে ক্লিক করুন:\nhttps://viral13236.blogspot.com");
  }

  bot.answerCallbackQuery(query.id);
});

// SERVER
app.get("/", (req, res) => {
  res.send("Bot is running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
