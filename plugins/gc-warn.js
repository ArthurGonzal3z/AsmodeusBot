let handler = async (m, { conn, text, command, usedPrefix }) => {
if (m.mentionedJid.includes(conn.user.jid)) return	
let pp = './src/warn.jpg'
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
let user = global.db.data.users[who]
let bot = global.db.data.settings[conn.user.jid] || {}
let warntext = `*Etiqueta o responde a un sms de la persona para advertirlo*\nEjemplo::*\n*${usedPrefix + command} @${global.suittag}*`
if (!who) throw m.reply(warntext, m.chat, { mentions: conn.parseMention(warntext)}) 
user.warn += 1
  
await m.reply(`${user.warn == 1 ? `*@${who.split`@`[0]}*` : `*@${who.split`@`[0]}*`} Has recibido una advertencia en este grupo!\n*ADVERTENCIAS ${user.warn}/3*`, null, { mentions: [who] })
	
if (user.warn >= 3) {
if (!bot.restrict) return m.reply('*El modo Restrict está deshabilitado por mi propietario*')        
user.warn = 0
await m.reply(`*@${who.split`@`[0]}* Has superado las3 advertencias,serás eliminado`, null, { mentions: [who]})
//user.banned = true
await conn.groupParticipantsUpdate(m.chat, [who], 'remove') 
} 
return !1
}
handler.command = /^(advertir|advertencia|warn|warning)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler