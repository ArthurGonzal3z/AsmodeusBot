// rpg-carnada.js

const handler = async (m, { conn }) => {
  const user = global.db.data.users[m.sender];
  
  const maxWorm = 100;
  const costPerWorm = 5; 

  if (user.umpan >= maxWorm) {
    return conn.reply(m.chat, `🪱 Ya tienes la cantidad máxima de carnada (${maxWorm}%). ¡No puedes comprar más!`, m);
  }

  if (user.limit < costPerWorm) {
    return conn.reply(m.chat, `No tienes suficientes diamantes para comprar carnada. Necesitas ${costPerWorm} diamantes por cada 25% de nivel de carnada.`, m);
  }

  global.db.data.users[m.sender].umpan = Math.min(user.umpan + 25, maxWorm);
  global.db.data.users[m.sender].limit -= costPerWorm;

  conn.reply(m.chat, `🪱 Has comprado carnada. Ahora tienes ${user.umpan}% de carnada. \n\nGastaste ${costPerWorm} diamantes.`, m);
};

handler.help = ['comprarcarnada'];
handler.tags = ['economy', 'game'];
handler.command = /^(buyworm|carnada)$/i;
handler.group = true;
handler.admin = false;
handler.botAdmin = false;
handler.exp = 0;
handler.limit = false;
handler.premium = false;
export default handler;