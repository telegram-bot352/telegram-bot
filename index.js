const { Telegraf } = require("telegraf");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const bot = new Telegraf(process.env.BOT_TOKEN);

// Inline Keyboard
const keyboard = {
  reply_markup: {
    inline_keyboard: [
      [
        { text: "💖 Backup Channel", url: "https://t.me/secretworld234" },
        { text: "💖 Video Channel", url: "https://t.me/secretworld234" }
      ],
      [
        { text: "💖 Tiktoker", web_app: { url: "https://viral13236.blogspot.com/?m=1" } },
        { text: "💖 Bangladeshi 🇧🇩", web_app: { url: "https://viral13236.blogspot.com/?m=1" } }
      ],
      [
        { text: "💖 USA 🇺🇸", web_app: { url: "https://viral13236.blogspot.com/?m=1" } },
        { text: "💖 Pakistan 🇵🇰", web_app: { url: "https://viral13236.blogspot.com/?m=1" } }
      ],
      [
        { text: "💖 Instagram", web_app: { url: "https://viral13236.blogspot.com/?m=1" } }
      ],
      [
        { text: "🎬 ভিডিও দেখুন", web_app: { url: "https://viral13236.blogspot.com/?m=1" } }
      ]
    ]
  }
};

// Start Command
bot.start((ctx) => {
  ctx.reply("Welcome 💖", keyboard);
});

// WebApp সার্ভার চালু
app.get("/", (req, res) => res.send("Bot alive ✅ — WebApp running"));
app.listen(PORT, () => console.log(`Web App running on port ${PORT}`));

bot.launch();
