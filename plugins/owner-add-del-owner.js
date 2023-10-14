const handler = async (m, { conn, text, args, usedPrefix, command }) => {
  const why = `*Uso incorrecto del comando.*\n\n*⪧ Ejemplo de uso válido:*\n*${usedPrefix + command} @${m.sender.split('@')[0]}*\n*${usedPrefix + command} ${m.sender.split('@')[0]}*\n*${usedPrefix + command} <mensaje citado>*`;
  const who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false;
  if (!who) return conn.reply(m.chat, why, m, {mentions: [m.sender]});
  switch (command) {
    case 'addowner':
      const nuevoNumero = who;
      global.owner.push([nuevoNumero]);
      await conn.reply(m.chat, '*El número ha sido agregado al listado de owners.*', m);
      break;
    case 'delowner':
      const numeroAEliminar = who;
      const index = global.owner.findIndex(owner => owner[0] === numeroAEliminar);
      if (index !== -1) {
        global.owner.splice(index, 1);
        await conn.reply(m.chat, '*El número ya no es owner de este bot.*', m);
      } else {
        await conn.reply(m.chat, '*El número no existe como owner en este bot*', m);
      }
      break;
  }
};
handler.command = /^(addowner|delowner)$/i;
handler.rowner = true;
export default handler;