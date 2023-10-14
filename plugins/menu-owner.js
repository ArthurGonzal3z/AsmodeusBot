import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
try {
let pp = imagen4
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
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let str = `┏━━━━━༺᯼༻━━━━━━
┃ ᚛ *Hola ${taguser}*
┗━━━━━༺᯼༻━━━━━━
┏━━━━━༺᯼༻━━━━━━
┃᚛\t\t\t*Propietario*
┃ *⃝𓍕 > <funcion>*
┃ *⃝𓍕 => <funcion>*
┃ *⃝𓍕 $ <funcion>*
┃ *⃝𓍕 _${usedPrefix}setprefix <prefijo>_*
┃ *⃝𓍕 _${usedPrefix}desactivarwa <numero>_*
┃ *⃝𓍕 _${usedPrefix}resetprefix_*
┃ *⃝𓍕 _${usedPrefix}autoadmin_*
┃ *⃝𓍕 _${usedPrefix}leavegc_*
┃ *⃝𓍕 _${usedPrefix}cajafuerte_*
┃ *⃝𓍕 _${usedPrefix}blocklist_*
┃ *⃝𓍕 _${usedPrefix}block <@tag / numero>_*
┃ *⃝𓍕 _${usedPrefix}unblock <@tag / numero>_*
┃ *⃝𓍕 _${usedPrefix}enable restrict_*
┃ *⃝𓍕 _${usedPrefix}disable restrict_*
┃ *⃝𓍕 _${usedPrefix}enable autoread_*
┃ *⃝𓍕 _${usedPrefix}disable autoread_*
┃ *⃝𓍕 _${usedPrefix}enable public_*
┃ *⃝𓍕 _${usedPrefix}disable public_*
┃ *⃝𓍕 _${usedPrefix}enable pconly_*
┃ *⃝𓍕 _${usedPrefix}disable pconly_*
┃ *⃝𓍕 _${usedPrefix}enable gconly_*
┃ *⃝𓍕 _${usedPrefix}disable gconly_*
┃ *⃝𓍕 _${usedPrefix}enable anticall_*
┃ *⃝𓍕 _${usedPrefix}disable anticall_*
┃ *⃝𓍕 _${usedPrefix}enable antiprivado_*
┃ *⃝𓍕 _${usedPrefix}disable antiprivado_*
┃ *⃝𓍕 _${usedPrefix}enable modejadibot_*
┃ *⃝𓍕 _${usedPrefix}disable modejadibot_*
┃ *⃝𓍕 _${usedPrefix}msg <texto>_*
┃ *⃝𓍕 _${usedPrefix}banchat_*
┃ *⃝𓍕 _${usedPrefix}unbanchat_*
┃ *⃝𓍕 _${usedPrefix}banuser <@tag>_*
┃ *⃝𓍕 _${usedPrefix}unbanuser <@tag>_*
┃ *⃝𓍕 _${usedPrefix}dardiamantes <@tag>_*
┃ *⃝𓍕 _${usedPrefix}añadirxp <@tag>_*
┃ *⃝𓍕 _${usedPrefix}banuser <@tag>_*
┃ *⃝𓍕 _${usedPrefix}bc <texto>_*
┃ *⃝𓍕 _${usedPrefix}bcchats <texto>_*
┃ *⃝𓍕 _${usedPrefix}bcgc <texto>_*
┃ *⃝𓍕 _${usedPrefix}bcgc2 <audio>_*
┃ *⃝𓍕 _${usedPrefix}bcgc2 <video>_*
┃ *⃝𓍕 _${usedPrefix}bcgc2 <imagen>_*
┃ *⃝𓍕 _${usedPrefix}bcbot <texto>_*
┃ *⃝𓍕 _${usedPrefix}cleartpm_*
┃ *⃝𓍕 _${usedPrefix}restart_*
┃ *⃝𓍕 _${usedPrefix}update_*
┃ *⃝𓍕 _${usedPrefix}linkid_*
┃ *⃝𓍕 _${usedPrefix}banlist_*
┃ *⃝𓍕 _${usedPrefix}addprem <@tag> <tiempo>_*
┃ *⃝𓍕 _${usedPrefix}addprem2 <@tag> <tiempo>_*
┃ *⃝𓍕 _${usedPrefix}addprem3 <@tag> <tiempo>_*
┃ *⃝𓍕 _${usedPrefix}addprem4 <@tag> <tiempo>_*
┃ *⃝𓍕 _${usedPrefix}delprem <@tag>_*
┃ *⃝𓍕 _${usedPrefix}listcmd_*
┃ *⃝𓍕 _${usedPrefix}setppbot <responder a imagen>_*
┃ *⃝𓍕 _${usedPrefix}addcmd <texto> <responder a sticker/_*
┃ *_imagen>_*
┃ *⃝𓍕 _${usedPrefix}delcmd <responder a sticker_/*
┃ *_imagen con comando o texto asignado>_*
┗━━━━━༺᯼༻━━━━━━
`.trim()
if (m.isGroup) {
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })  
} else {    
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })}
} catch {
conn.reply(m.chat, '*El menú tiene un error, si el error persiste por favor reportelo al propietario*', m)
}}
handler.command = /^(om|ownermenu|menuowner)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}