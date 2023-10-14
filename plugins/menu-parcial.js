import fetch from 'node-fetch'
import { delay } from "@whiskeysockets/baileys" 
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
try {
let pp = imagen7
//let vn = './media/menu.mp3'
let img = await(await fetch('https://i.imgur.com/JP52fdP.jpg')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let name = await conn.getName(m.sender)
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
const { key } = await conn.sendMessage(m.chat, {text: `┏━━━━━༺᯼༻━━━━━━ 
┃ El menú del bot se está cargando
┗━━━━━༺᯼༻━━━━━━`}, {quoted: m});
await delay(1000 * 1);
await conn.sendMessage(m.chat, {text: `《 █▒▒▒▒▒▒▒▒▒▒▒》10%`, edit: key});
await delay(1000 * 1);
await conn.sendMessage(m.chat, {text: `《 ████▒▒▒▒▒▒▒▒》30%`, edit: key});
await delay(1000 * 1);
await conn.sendMessage(m.chat, {text: `《 ███████▒▒▒▒▒》50%`, edit: key});
await delay(1000 * 1);
await conn.sendMessage(m.chat, {text: `《 ██████████▒▒》80%`, edit: key});
 await delay(1000 * 1);
await conn.sendMessage(m.chat, {text: `《 ████████████》100%`, edit: key});
await delay(1000 * 1);
await conn.sendMessage(m.chat, {text: `┏━━━━━༺᯼༻━━━━━━
┃ ×Carga Finalizada×
┗━━━━━༺᯼༻━━━━━━`, edit: key});
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let str = `┏━━━━━༺᯼༻━━━━━━
┃\t\t\t\t\t*⪧ Hola, ${taguser}*
┃\t\t\t\t\t*⪧ Bienvenido al Menu Principal*
┃\t\t\t\t\t*De 𝐴𝑠𝑚𝑜𝑑𝑒𝑢𝑠*
┃\t\t\t\t\t*⪧ Propietario: @${owner[0][0]}*
┃\t\t\t\t\t*⪧ Bot ofc:* wa.me/590690455341
┃\t\t\t\t\t*⪧ Repositorio OFC:*
┃https://github.com/ArthurGonzal3z/AsmodeusBot/tree/master
┃\t\t\t\t\t*⪧ Fecha:* ${date}
┃\t\t\t\t\t*⪧ Tiempo activo:* ${uptime}
┃\t\t\t\t\t*⪧ Usuarios Registrados:* ${rtotalreg}
┗━━━━━༺᯼༻━━━━━━
${readMore}
┏━━━━━༺᯼༻━━━━━━
┃᚛\t\t\t\t\t*Bot OFC y Sub Bots*
┃𓍕 ${(conn.user.jid == global.conn.user.jid ? '' : `Jadibot de: https://wa.me/${global.conn.user.jid.split`@`[0]}`) || '*Este es el Bot oficial*'}
┗━━━━━༺᯼༻━━━━━━
┏━━━━━༺᯼༻━━━━━━
┃  ᚛\t\t\t\t\t*Menu Completo del Bot*
┃ 𓍕 _${usedPrefix}allmenu_
┗━━━━━༺᯼༻━━━━━━ 
┏━━━━━༺᯼༻━━━━━━
┃᚛\t\t\t\t\t*Información del Bot*
┃𓍕 _${usedPrefix}infomenu_
┗━━━━━༺᯼༻━━━━━━
┏━━━━━༺᯼༻━━━━━━
┃᚛\t\t\t\t\t*Une al bot a tu grupo*
┃𓍕 _${usedPrefix}join *<enlace / link / url>*_
┃𓍕 _${usedPrefix}addbot_
┗━━━━━༺᯼༻━━━━━━
┏━━━━━༺᯼༻━━━━━━
┃᚛\t\t\t\t\t*Serbot>*
┃𓍕 _${usedPrefix}serbot_
┃𓍕 _${usedPrefix}stop_
┃𓍕 _${usedPrefix}bots_
┗━━━━━༺᯼༻━━━━━━
┏━━━━━༺᯼༻━━━━━━
┃᚛\t\t\t\t\t*Juegos*
┃𓍕 _${usedPrefix}juegos_
┃➛ *Para ver el menú de juegos*
┗━━━━━༺᯼༻━━━━━━
┏━━━━━༺᯼༻━━━━━━
┃᚛\t\t\t\t\t*Enable/Disable*
┃𓍕 _${usedPrefix}enable/disable_
┃➛ *Para ver las opciones de*
┃ *activación en grupos*
┗━━━━━༺᯼༻━━━━━━
┏━━━━━༺᯼༻━━━━━━
┃᚛\t\t\t\t\t*Reportes*
┃𓍕 _${usedPrefix}reporte *<texto>*_
┗━━━━━༺᯼༻━━━━━━
┏━━━━━༺᯼༻━━━━━━
┃᚛\t\t\t\t\t*Descargas*
┃𓍕 _${usedPrefix}descargas_
┃➛ *Para ver las opciones*
┃ *de descargas*
┗━━━━━༺᯼༻━━━━━━
┏━━━━━༺᯼༻━━━━━━
┃᚛\t\t\t\t\t*Grupos* 
┃𓍕 _${usedPrefix}menugrupos_
┃➛ *Para ver el menu de grupos*
┗━━━━━༺᯼༻━━━━━━
┏━━━━━༺᯼༻━━━━━━
┃\t\t\t\t\t*Convertidores*
┃𓍕 ┃_${usedPrefix}menuconvertodires_
┃➛  *Para ver el menu de convertidores*
┗━━━━━༺᯼༻━━━━━━
┏━━━━━༺᯼༻━━━━━━
┃᚛\t\t\t\t\t*Efectos y Logos*
┃𓍕 _${usedPrefix}efectosmenu_
┃➛ *Para ver el menu de efectos*
┗━━━━━༺᯼༻━━━━━━
┏━━━━━༺᯼༻━━━━━━
┃᚛\t\t\t\t\t*Frases*
┃𓍕 _${usedPrefix}frasesmenu_
┃➛ *Para ver el menu de frases*
┗━━━━━༺᯼༻━━━━━━
┏━━━━━༺᯼༻━━━━━━
┃᚛\t\t\t\t\t*Random*
┃𓍕 _${usedPrefix}menurandom_
┃➛ *Para ver el menu de imágenes random*
┗━━━━━༺᯼༻━━━━━━
┏━━━━━༺᯼༻━━━━━━
┃᚛\t\t\t\t\t*Adultos*
┃𓍕 _${usedPrefix}menuadultos_
┃➛ *Para ver el menu de adultos*
┗━━━━━༺᯼༻━━━━━━
┏━━━━━༺᯼༻━━━━━━
┃᚛\t\t\t\t\t*Efectos de Audios*
┃𓍕 _${usedPrefix}audioefectos_
┃➛ *Para ver el menu de efectos de audios*
┗━━━━━༺᯼༻━━━━━━
┏━━━━━༺᯼༻━━━━━━
┃᚛\t\t\t\t\t*Chat Anónimo*
┃𓍕 _${usedPrefix}start_
┃𓍕 _${usedPrefix}next_
┃𓍕 _${usedPrefix}leave_
┗━━━━━༺᯼༻━━━━━━
┏━━━━━༺᯼༻━━━━━━
┃᚛\t\t\t\t\t*Buscadores*
┃𓍕 _${usedPrefix}buscadoresmenu_
┃➛ *Para ver el menu de buscadores*
┗━━━━━༺᯼༻━━━━━━
┏━━━━━༺᯼༻━━━━━━
┃᚛\t\t\t\t\t*Audios* 
┃𓍕 _${usedPrefix}audios_
┃➛ *Para ver el menu de audios*
┗━━━━━༺᯼༻━━━━━━
┏━━━━━༺᯼༻━━━━━━
┃᚛\t\t\t\t\t*Herramientas*
┃𓍕 _${usedPrefix}herramientasmenu_
┃➛ *Para ver el menu de herramientas*
┗━━━━━༺᯼༻━━━━━━
┏━━━━━༺᯼༻━━━━━━
┃᚛\t\t\t\t\t*RPG*
┃𓍕 _${usedPrefix}economia_
┃➛ *Para ver el menu de economía*
┗━━━━━༺᯼༻━━━━━━
┏━━━━━༺᯼༻━━━━━━
┃᚛\t\t\t\t\t*Stickers*
┃𓍕 _${usedPrefix}stickersmenu_
┃➛ *Para ver el menu de stiekrs*
┗━━━━━༺᯼༻━━━━━━
┏━━━━━༺᯼༻━━━━━━
┃᚛\t\t\t\t\t*Propietario*
┃𓍕 _${usedPrefix}ownermenu_
┃➛ *Para ver el menu del owner*
┗━━━━━༺᯼༻━━━━━━
`.trim()
if (m.isGroup) {
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { video: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })  
} else {    
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, fileLength: 666333333333, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })}
} catch {
conn.reply(m.chat, '*El menú tiene un error, si este persiste por favor reportelo al creador*', m)
}}
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i
handler.register = true
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}