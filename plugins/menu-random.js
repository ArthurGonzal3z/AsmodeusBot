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
┃᚛\t\t\t*Random*
┃ *⃝𓍕 _${usedPrefix}kpop <blackpink / exo / bts>_*
┃ *⃝𓍕 _${usedPrefix}cristianoronaldo_*
┃ *⃝𓍕 _${usedPrefix}messi_*
┃ *⃝𓍕 _${usedPrefix}cat_*
┃ *⃝𓍕 _${usedPrefix}dog_*
┃ *⃝𓍕 _${usedPrefix}meme_*
┃ *⃝𓍕 _${usedPrefix}itzy_*
┃ *⃝𓍕 _${usedPrefix}blackpink_*
┃ *⃝𓍕 _${usedPrefix}lolivid_*
┃ *⃝𓍕 _${usedPrefix}loli_*
┃ *⃝𓍕 _${usedPrefix}navidad_*
┃ *⃝𓍕 _${usedPrefix}ppcouple_*
┃ *⃝𓍕 _${usedPrefix}wpmontaña_*
┃ *⃝𓍕 _${usedPrefix}pubg_*
┃ *⃝𓍕 _${usedPrefix}wpgaming_*
┃ *⃝𓍕 _${usedPrefix}wpaesthetic_*
┃ *⃝𓍕 _${usedPrefix}wpaesthetic2_*
┃ *⃝𓍕 _${usedPrefix}wprandom_*
┃ *⃝𓍕 _${usedPrefix}wallhp_*
┃ *⃝𓍕 _${usedPrefix}wpvehiculo_*
┃ *⃝𓍕 _${usedPrefix}wpmoto_*
┃ *⃝𓍕 _${usedPrefix}coffee_*
┃ *⃝𓍕 _${usedPrefix}pentol_*
┃ *⃝𓍕 _${usedPrefix}caricatura_*
┃ *⃝𓍕 _${usedPrefix}ciberespacio_*
┃ *⃝𓍕 _${usedPrefix}technology_*
┃ *⃝𓍕 _${usedPrefix}doraemon_*
┃ *⃝𓍕 _${usedPrefix}hacker_*
┃ *⃝𓍕 _${usedPrefix}planeta_*
┃ *⃝𓍕 _${usedPrefix}randomprofile_*
┃ *⃝𓍕 _${usedPrefix}neko_*
┃ *⃝𓍕 _${usedPrefix}waifu_*
┃ *⃝𓍕 _${usedPrefix}akira_*
┃ *⃝𓍕 _${usedPrefix}akiyama_*
┃ *⃝𓍕 _${usedPrefix}anna_*
┃ *⃝𓍕 _${usedPrefix}asuna_*
┃ *⃝𓍕 _${usedPrefix}ayuzawa_*
┃ *⃝𓍕 _${usedPrefix}boruto_*
┃ *⃝𓍕 _${usedPrefix}chiho_*
┃ *⃝𓍕 _${usedPrefix}chitoge_*
┃ *⃝𓍕 _${usedPrefix}deidara_*
┃ *⃝𓍕 _${usedPrefix}erza_*
┃ *⃝𓍕 _${usedPrefix}elaina_*
┃ *⃝𓍕 _${usedPrefix}eba_*
┃ *⃝𓍕 _${usedPrefix}emilia_*
┃ *⃝𓍕 _${usedPrefix}hestia_*
┃ *⃝𓍕 _${usedPrefix}hinata_*
┃ *⃝𓍕 _${usedPrefix}inori_*
┃ *⃝𓍕 _${usedPrefix}isuzu_*
┃ *⃝𓍕 _${usedPrefix}itachi_*
┃ *⃝𓍕 _${usedPrefix}itori_*
┃ *⃝𓍕 _${usedPrefix}kaga_*
┃ *⃝𓍕 _${usedPrefix}kagura_*
┃ *⃝𓍕 _${usedPrefix}kaori_*
┃ *⃝𓍕 _${usedPrefix}keneki_*
┃ *⃝𓍕 _${usedPrefix}kotori_*
┃ *⃝𓍕 _${usedPrefix}kurumi_*
┃ *⃝𓍕 _${usedPrefix}madara_*
┃ *⃝𓍕 _${usedPrefix}mikasa_*
┃ *⃝𓍕 _${usedPrefix}miku_*
┃ *⃝𓍕 _${usedPrefix}minato_*
┃ *⃝𓍕 _${usedPrefix}naruto_*
┃ *⃝𓍕 _${usedPrefix}nezuko_*
┃ *⃝𓍕 _${usedPrefix}sagiri_*
┃ *⃝𓍕 _${usedPrefix}sasuke_*
┃ *⃝𓍕 _${usedPrefix}sakura_*
┃ *⃝𓍕 _${usedPrefix}cosplay_*
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
handler.command = /^(random|menurandom|randommenu)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}