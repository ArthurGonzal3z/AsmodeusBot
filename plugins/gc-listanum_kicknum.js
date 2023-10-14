/*              Codigo Creado Por Bruno Sobrino 
      (https://github.com/BrunoSobrino/TheMystic-Bot-MD) 
*/

let handler = async (m, { conn, args, groupMetadata, participants, usedPrefix, command, isBotAdmin, isSuperAdmin }) => {
if (!args[0]) return m.reply(`*Ingresa algún prefijo para buscar en este grupo, ejemplo: ${usedPrefix + command} 52*`) 
if (isNaN(args[0])) return m.reply(`*Ingresa el prefijo de algún país para buscar números en este grupo de dicho país, ejemplo:${usedPrefix + command} 53*`) 
let lol = args[0].replace(/[+]/g, '')
let ps = participants.map(u => u.id).filter(v => v !== conn.user.jid && v.startsWith(lol || lol)) 
let bot = global.db.data.settings[conn.user.jid] || {}
if (ps == '') return m.reply(`*En este grupo no hay personas con el prefijo +${lol}*`)
let numeros = ps.map(v=> '⭔ @' + v.replace(/@.+/, ''))
const delay = time => new Promise(res=>setTimeout(res,time));
switch (command) {
case "listanum": 
conn.reply(m.chat, `*Listado de números con el prefijo +${lol} miembros de este grupo*\n\n` + numeros.join`\n`, m, { mentions: ps })
break   
case "kicknum":  
if (!bot.restrict) return m.reply('*El modo restrict está deshabilitado actualmente, por lo tanto no puedo realizar la eliminación*') 
if (!isBotAdmin) return m.reply('*Asciende el bot a admin*')          
conn.reply(m.chat, `*Iniciando eliminación de números con prefijo +${lol}, cada 10 segundos será eliminado un usuario de los señalados*`, m)            
let ownerGroup = m.chat.split`-`[0] + '@s.whatsapp.net'
let users = participants.map(u => u.id).filter(v => v !== conn.user.jid && v.startsWith(lol || lol))
for (let user of users) {
let error = `@${user.split("@")[0]} ya fue eliminado o abandonó el grupo*`    
if (user !== ownerGroup + '@s.whatsapp.net' && user !== global.conn.user.jid && user !== global.owner + '@s.whatsapp.net' && user.startsWith(lol || lol) && user !== isSuperAdmin && isBotAdmin && bot.restrict) { 
await delay(2000)    
let responseb = await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
if (responseb[0].status === "404") m.reply(error, m.chat, { mentions: conn.parseMention(error)})  
await delay(10000)
} else return m.reply('error')}
break            
}}
handler.command = /^(listanum|kicknum)$/i
handler.group = handler.botAdmin = handler.admin = true
handler.fail = null
export default handler
