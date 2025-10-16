const mineflayer = require('mineflayer');

function startBot() {
  const bot = mineflayer.createBot({
    host: 'xenonmcvn.falixsrv.me', // IP server Falix
    port: 27442,            // cổng (thường giữ nguyên)
    username: 'AFK_Bot',    // tên bot (nếu server crack)
    version: '1.21.4'       // phiên bản Minecraft
  });

  bot.on('spawn', () => {
    console.log('✅ Bot AFK đã vào server thành công!');
    bot.chat('Bot AFK đang giữ server online 24/7!');
  });

  bot.on('end', () => {
    console.log('❌ Bot bị ngắt kết nối, đang thử lại...');
    setTimeout(startBot, 10000); // tự reconnect sau 10 giây
  });
}

startBot();

