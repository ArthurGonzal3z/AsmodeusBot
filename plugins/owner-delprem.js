let handler = async (m, { conn, text, usedPrefix, command }) => {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
else who = m.chat
let user = global.db.data.users[who]
if (!who) throw `*Taguea o responde a un mensaje de la persona que desea eliminar de la lista de premium*`
if (!user) throw `*@${who.split`@`[0]} no se encuentra en mi Base de Datos*`
if (user.premiumTime = 0) throw '*@${who.split`@`[0]} No es un usuario premium*'
let txt = text.replace('@' + who.split`@`[0], '').trim()

user.premiumTime = 0
  
user.premium = false
  
let textdelprem = `*@${who.split`@`[0]}  Ya no es usuario premium*`
m.reply(textdelprem, null, { mentions: conn.parseMention(textdelprem) })  
    
}
handler.help = ['delprem <@user>']
handler.tags = ['owner']
handler.command = /^(remove|-|del)prem$/i
handler.group = true
handler.rowner = true
export default handler