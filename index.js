const TelegramBot = require("node-telegram-bot-api");
const express = require("express");

const TOKEN = process.env.BOT_TOKEN;
const PORT = process.env.PORT || 3000;

let bot;

// 🔁 Start bot (auto-restart)
function startBot() {
  bot = new TelegramBot(TOKEN, {
    polling: {
      interval: 300,
      autoStart: true,
      params: { timeout: 10 }
    }
  });

  console.log("Bot started ✅");

  // ❗ Error হলে restart
  bot.on("polling_error", (err) => {
    console.log("Polling error:", err.message);
    restartBot();
  });

  bot.on("error", (err) => {
    console.log("Bot error:", err.message);
    restartBot();
  });

  // 🚀 /start command
  bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;

    const SITE = "https://viral13236.blogspot.com/?m=1";
    const TG = "https://t.me/secretworld234";

    const keyboard = {
      inline_keyboard: [
        [
          { text: "🌸 Backup Channel", url: TG },
          { text: "🌸 Watch Channel", url: TG }
        ],
        [
          { text: "💖 Tiktoker", web_app: { url: SITE } },
          { text: "💖 Bangladeshi 🇧🇩", web_app: { url: SITE } }
        ],
        [
          { text: "💗 USA 🇺🇸", web_app: { url: SITE } },
          { text: "💗 Pakistan 🇵🇰", web_app: { url: SITE } }
        ],
        [
          { text: "🌷 Instagram", web_app: { url: SITE } },
          { text: "🌷 🎬 ভিডিও দেখুন", web_app: { url: SITE } }
        ]
      ]
    };

    // 🔥 ONE message (GIF + caption + buttons)
    bot.sendAnimation(
      chatId,
      "https://media3.giphy.com/media/qErKT3fGsg6Mm23nZN/giphy.gif",
      {
        caption: `✨ WELCOME TO VIRAL VIDEO BOT ✨

✅ আমাদের সব চ্যানেলে জয়েন করুন ✅

🎬 ভিডিও দেখতে নিচের বাটন ব্যবহার করুন 👇`,
        reply_markup: keyboard
      }
    );
  });
}

// 🔁 Restart system
function restartBot() {
  try {
    bot.stopPolling();
  } catch (e) {}
  console.log("Restarting bot... 🔁");
  setTimeout(startBot, 2000);
}

// 🚀 Run bot
startBot();

// 🌐 Keep alive (Render)
const app = express();
app.get("/", (req, res) => res.send("Bot alive ✅ — 24/7 running"));
app.listen(PORT, () => console.log(`Web running on ${PORT}`));
