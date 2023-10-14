const handler = async (m, { conn, text, usedPrefix, command }) => {
  const args = text.split(" ");
  const userMention = m.mentionedJid[0] || (m.quoted ? m.quoted.sender : false);
  
  if (!userMention || args.length !== 2) {
    const usage = `*[❗] Usage:*\n${usedPrefix}${command} @user <duration>\nExample: ${usedPrefix}${command} @username 1d`;
    return m.reply(usage);
  }

  const user = global.db.data.users[userMention];
  if (!user) {
    return m.reply("*[❗] Usuario no encontrado.*");
  }

  const duration = args[1].toLowerCase();
  const now = Date.now();

  let multiplier = 0;
  if (duration.endsWith("h")) {
    multiplier = 60 * 60 * 1000; 
  } else if (duration.endsWith("d")) {
    multiplier = 24 * 60 * 60 * 1000; 
  } else if (duration.endsWith("w")) {
    multiplier = 7 * 24 * 60 * 60 * 1000; 
  } else if (duration.endsWith("m")) {
    multiplier = 30 * 24 * 60 * 60 * 1000; 
  }

  if (multiplier === 0) {
    return m.reply("*[❗] Duracion invalida.*");
  }

  const timeToAdd = parseInt(duration) * multiplier;

  if (now < user.premiumTime) {
    user.premiumTime += timeToAdd;
  } else {
    user.premiumTime = now + timeToAdd;
  }

  user.premium = true;

  const timeLeft = await formatTime(user.premiumTime - now);
  const response = `*🎟️ Nuevo Usuario Premium!*\n\n*✨ Usuario: @${userMention.split("@")[0]}*\n*🕐 Duracion: ${duration}*\n*📉 Tiempo Restante: ${timeLeft}*`;

  m.reply(response);
};

handler.help = ['addpremium @user <duration>'];
handler.tags = ['owner'];
handler.command = ['addprem2'];
handler.group = true;
handler.rowner = true;

async function formatTime(ms) {
  let seconds = Math.floor(ms / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  seconds %= 60;
  minutes %= 60;
  hours %= 24;
  let timeString = "";
  if (days) {
    timeString += `${days} dias${days > 1 ? "s" : ""} `;
  }
  if (hours) {
    timeString += `${hours} horas${hours > 1 ? "s" : ""} `;
  }
  if (minutes) {
    timeString += `${minutes} minutos${minutes > 1 ? "s" : ""} `;
  }
  if (seconds) {
    timeString += `${seconds} segundos${seconds > 1 ? "s" : ""} `;
  }
  return timeString.trim();
}
handler.owner = true
export default handler;