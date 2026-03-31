const TelegramBot = require("node-telegram-bot-api");
const express = require("express");

const TOKEN = process.env.BOT_TOKEN;
const PORT = process.env.PORT || 3000;

let bot;

// 🔁 bot start function (auto restart)
function startBot() {
  bot = new TelegramBot(TOKEN, {
    polling: {
      interval: 300,
      autoStart: true,
      params: { timeout: 10 }
    }
  });

  console.log("Bot started ✅");

  // ❗ error ধরলেই restart
  bot.on("polling_error", (err) => {
    console.log("Polling error:", err.message);
    restartBot();
  });

  bot.on("error", (err) => {
    console.log("Bot error:", err.message);
    restartBot();
  });

  // ✅ /start
  bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;

    const SITE = "https://viral13236.blogspot.com/?m=1";
    const TG = "https://t.me/secretworld234";

    const keyboard = {
      inline_keyboard: [
        [
          { text: "Backup Channel", url: TG },
          { text: "Watch Channel", url: TG }
        ],
        [
          { text: "Tiktoker", url: SITE },
          { text: "Bangladeshi 🇧🇩", url: SITE }
        ],
        [
          { text: "USA 🇺🇸", url: SITE },
          { text: "Pakistan 🇵🇰", url: SITE }
        ],
        [
          { text: "Instagram", url: SITE },
          { text: "🎬 ভিডিও দেখুন", url: SITE }
        ]
      ]
    };

    bot.sendAnimation(
      chatId,
      "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjkycmI0emFhMnhyOXBwbjVucTc1amMwMDBtdGZkcGd1dWw2YXI3ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qErKT3fGsg6Mm23nZN/giphy.gif",
      {
        caption: `✨ WELCOME TO VIRAL VIDEO BOT ✨

✅ আমাদের সব চ্যানেলে জয়েন করুন ✅

🎬 ভিডিও দেখতে নিচের বাটন ব্যবহার করুন 👇`,
        reply_markup: keyboard
      }
    );
  });
}

// 🔁 restart function
function restartBot() {
  try {
    bot.stopPolling();
  } catch (e) {}
  console.log("Restarting bot... 🔁");
  setTimeout(startBot, 2000);
}

// 🚀 start
startBot();

// 🌐 keep alive (Render sleep prevent)
const app = express();
app.get("/", (req, res) => res.send("Bot alive ✅"));
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
