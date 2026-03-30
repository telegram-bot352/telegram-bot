const express = require("express");
const TelegramBot = require("node-telegram-bot-api");

const app = express();
const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

// START UI
bot.onText(/\/start/, (msg) => {
  bot.sendPhoto(
    msg.chat.id,
    "https://i.imgur.com/4AiXzf8.jpeg",
    {
      caption:
        "🔥 *VIRAL VIDEO BOT* 🔥\n\n" +
        "📌 Exclusive viral content available\n" +
        "⚡ Click buttons below to continue\n\n" +
        "👇 Choose option:",
      parse_mode: "Markdown",
      reply_markup: {
        inline_keyboard: [
          [{ text: "📢 Join Channel", url: "https://t.me/secretworld234" }],
          [{ text: "🎬 Watch Video", url: "https://t.me/secretworld234" }],
          [
            { text: "💞 Video Channel", url: "https://viral13236.blogspot.com" },
            { text: "💞 Tiktoker", url: "https://viral13236.blogspot.com" }
          ],
          [
            { text: "💞 Bangladesh 🇧🇩", url: "https://viral13236.blogspot.com" },
            { text: "💞 Korean 🇰🇷", url: "https://viral13236.blogspot.com" }
          ],
          [
            { text: "💞 Pakistan 🇵🇰", url: "https://viral13236.blogspot.com" },
            { text: "💞 Instagram", url: "https://viral13236.blogspot.com" }
          ],
          [{ text: "🎥 ভিডিও দেখুন", url: "https://viral13236.blogspot.com" }]
        ]
      }
    }
  );
});

// SERVER
app.get("/", (req, res) => {
  res.send("Bot is running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
