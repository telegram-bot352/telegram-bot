const TelegramBot = require("node-telegram-bot-api");

const bot = new TelegramBot(process.env.BOT_TOKEN, {
  polling: true,
});

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  // 🎬 GIF (attention grab)
  bot.sendAnimation(
    chatId,
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjkycmI0emFhMnhyOXBwbjVucTc1amMwMDBtdGZkcGd1dWw2YXI3ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qErKT3fGsg6Mm23nZN/giphy.gif"
  );

  // 🖼 Image + Buttons
  bot.sendPhoto(chatId, "https://i.imgur.com/8Km9tLL.jpeg", {
    caption: `✨ WELCOME TO VIRAL VIDEO BOT ✨

✅ আমাদের সব চ্যানেলে জয়েন করুন ✅

📽 ভিডিও দেখতে হলে নিচের বাটনগুলো ব্যবহার করুন 👇`,
    reply_markup: {
      inline_keyboard: [
        [
          { text: "💖 Backup Channel", url: "https://t.me/secretworld234" },
          { text: "🎬 Watch Video", url: "https://t.me/secretworld234" },
        ],
        [
          {
            text: "💕 Video Channel",
            web_app: { url: "https://viral13236.blogspot.com" },
          },
          {
            text: "💕 Tiktoker",
            web_app: { url: "https://viral13236.blogspot.com" },
          },
        ],
        [
          {
            text: "💕 Bangladesh 🇧🇩",
            web_app: { url: "https://viral13236.blogspot.com" },
          },
          {
            text: "💕 Thailand 🇹🇭",
            web_app: { url: "https://viral13236.blogspot.com" },
          },
        ],
        [
          {
            text: "💕 Pakistan 🇵🇰",
            web_app: { url: "https://viral13236.blogspot.com" },
          },
          {
            text: "💕 Instagram",
            web_app: { url: "https://viral13236.blogspot.com" },
          },
        ],
      ],
    },
  });
});
