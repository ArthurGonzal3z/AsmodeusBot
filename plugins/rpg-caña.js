// rpg-cana.js

const handler = async (m, { conn }) => {
  const user = global.db.data.users[m.sender];

  const maxCanaDePescar = 6;
  const baseCostPerLevel = 5; 

  if (user.pancing >= maxCanaDePescar) {
    return conn.reply(m.chat, `🎣Ya tienes el nivel máximo de caña de pescar (${maxCanaDePescar}). \n\n¡No puedes comprar más!`, m);
  }

  const costPerLevel = baseCostPerLevel * (user.pancing + 1);

  if (user.limit < costPerLevel) {
    return conn.reply(m.chat, `No tienes suficientes diamantes para comprar un nivel de caña de pescar. Necesitas ${costPerLevel} diamantes.`, m);
  }

  global.db.data.users[m.sender].pancing = (user.pancing || 0) + 1;
  global.db.data.users[m.sender].limit -= costPerLevel;

  conn.reply(m.chat, `🎣 Has comprado un nivel de caña de pescar. \n\nAhora tienes ${user.pancing + 1}/${maxCanaDePescar} niveles de caña de pescar. \n\nGastaste ${costPerLevel} diamantes.`, m);
};

handler.help = ['comprarcana'];
handler.tags = ['economy', 'game'];
handler.command = /^(cana|buyfishingrod|caña)$/i;
handler.group = true;
handler.admin = false;
handler.botAdmin = false;
handler.exp = 0;
handler.limit = false;
handler.premium = false;
export default handler;