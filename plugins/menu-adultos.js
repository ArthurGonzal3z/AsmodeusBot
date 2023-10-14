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
┃᚛\t\t\t*Adultos*
┃ *⃝𓍕 _${usedPrefix}pack_*
┃ *⃝𓍕 _${usedPrefix}pack2_*
┃ *⃝𓍕 _${usedPrefix}pack3_*
┃ *⃝𓍕 _${usedPrefix}videoxxx_*
┃ *⃝𓍕 _${usedPrefix}videolesbixxx_*
┃ *⃝𓍕 _${usedPrefix}tetas_*
┃ *⃝𓍕 _${usedPrefix}booty_*
┃ *⃝𓍕 _${usedPrefix}ecchi_*
┃ *⃝𓍕 _${usedPrefix}furro_*
┃ *⃝𓍕 _${usedPrefix}imagenlesbians_*
┃ *⃝𓍕 _${usedPrefix}panties_*
┃ *⃝𓍕 _${usedPrefix}pene_*
┃ *⃝𓍕 _${usedPrefix}porno_*
┃ *⃝𓍕 _${usedPrefix}randomxxx_*
┃ *⃝𓍕 _${usedPrefix}pechos_*
┃ *⃝𓍕 _${usedPrefix}yaoi_*
┃ *⃝𓍕 _${usedPrefix}yaoi2_*
┃ *⃝𓍕 _${usedPrefix}yuri_*
┃ *⃝𓍕 _${usedPrefix}yuri2_*
┃ *⃝𓍕 _${usedPrefix}trapito_*
┃ *⃝𓍕 _${usedPrefix}hentai_*
┃ *⃝𓍕 _${usedPrefix}nsfwloli_*
┃ *⃝𓍕 _${usedPrefix}nsfworgy_*
┃ *⃝𓍕 _${usedPrefix}nsfwfoot_*
┃ *⃝𓍕 _${usedPrefix}nsfwass_*
┃ *⃝𓍕 _${usedPrefix}nsfwbdsm_*
┃ *⃝𓍕 _${usedPrefix}nsfwcum_*
┃ *⃝𓍕 _${usedPrefix}nsfwero_*
┃ *⃝𓍕 _${usedPrefix}nsfwfemdom_*
┃ *⃝𓍕 _${usedPrefix}nsfwglass_*
┃ *⃝𓍕 _${usedPrefix}hentaipdf <texto>_*
┃ *⃝𓍕 _${usedPrefix}hentaisearch <texto>_*
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
handler.command = /^(adultos|menuadultos|adultosmenu)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}