let handler = async (m, { conn, text, usedPrefix, command, args }) => {
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}
let toUser = `${m.sender.split("@")[0]}`
let aa = toUser + '@s.whatsapp.net'	
let template = (args[0] || '').toLowerCase() 
if (/comprar|prem1/i.test(command)) {
var tiempoPremium = 5 * text 
var tiempoDecretado = 5 * 1 
const hades = 15
let user = global.db.data.users[m.sender]
    
if (!text) return conn.reply(m.chat, `${mg}ɪɴɢʀᴇsᴇ ʟᴀ ᴄᴀɴᴛɪᴅᴀᴅ ǫᴜᴇ ǫᴜɪᴇʀᴇs ᴄᴏᴍᴘʀᴀʀ🌀️ 1 = ${tiempoDecretado} HORA(S)*\n*✤ ${hades} ${rpgshop.emoticon('joincount')}*\n\n*EJEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (isNaN(text)) return conn.reply(m.chat, `${mg}sᴏʟᴏ sᴇ ᴀᴄᴇᴘᴛᴀɴ ɴúᴍᴇʀᴏs🍁\n*EJEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (user.joincount < hades) return conn.reply(m.chat, `${ag}No tienes suficientes ${rpgshop.emoticon('joincount')}para comprar premium, compre ${rpgshopp.emoticon('joincount')} en la tienda, usa el comando:\n${usedPrefix}buy`, fkontak, m)
user.joincount -= hades * text
    
var tiempo = 1800000 * text 
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
const imgpre = [ 
'https://i.imgur.com/aOU8mzP.jpg', 
'https://i.imgur.com/HE1dWt6.png',
'https://i.imgur.com/jRA9pwD.jpeg'];


await conn.reply(m.chat, `╭─────°.♡.°‧─────
│ Asmodeus Bot✍  
│📑ɴᴏᴍʙʀᴇ»${user.name}
│💰ᴘᴀɢᴏ»${hades * text} ${rpgshopp.emoticon('joincount')} *Tokens 🪙*
│📜ᴛɪᴇɴᴅᴀ»ᴘʀᴇᴍɪᴜᴍ
│⏳ᴘᴀʀᴀ ᴠᴇʀ ᴛᴜ ᴛɪᴇᴍᴘᴏ» /listprem
╰─────°.♡.°‧─────\n\n🌀ᴀʜᴏʀᴀ ᴛɪᴇɴᴇ ᴘʀᴇᴍɪᴜᴍ ᴘᴏʀ ʟᴏ ᴛᴀɴᴛᴏ ɴᴏ ᴠᴀ ᴛᴇɴᴇʀ ʟíᴍɪᴛᴇs\n${wm}`, fkontak, { mentions: [aa,] })}

if (/prem2/i.test(command)) {
var tiempoPremium = 150 * text 
var tiempoDecretado = 150 * 1 
const hades = 25
let user = global.db.data.users[m.sender]
    
if (!text) return conn.reply(m.chat, `${mg}ɪɴɢʀᴇsᴇ ʟᴀ ᴄᴀɴᴛɪᴅᴀᴅ ǫᴜᴇ ǫᴜɪᴇʀᴇs ᴄᴏᴍᴘʀᴀʀ🌀️ 1 = ${tiempoDecretado} HORA(S)*\n*✤ ${hades} ${rpgshop.emoticon('joincount')}*\n\n*EJEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (isNaN(text)) return conn.reply(m.chat, `${mg}sᴏʟᴏ sᴇ ᴀᴄᴇᴘᴛᴀɴ ɴúᴍᴇʀᴏs🍁\n*EJEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (user.joincount < hades) return conn.reply(m.chat, `${ag}ɴᴏ ᴛɪᴇɴᴇ ✴️sᴜғɪᴄɪᴇɴᴛᴇ ${rpgshop.emoticon('joincount')}para obtener premium compre ${rpgshopp.emoticon('joincount')}🍁en la tienda usando:\n${usedPrefix}ʙᴜʏ`, fkontak, m)
user.joincount -= hades * text
    
var tiempo = 3500000 * text 
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
const imgpre = [ 
'https://i.imgur.com/aOU8mzP.jpg', 
'https://i.imgur.com/HE1dWt6.png',
'https://i.imgur.com/jRA9pwD.jpeg'];

await conn.reply(m.chat, `╭─────°.♡.°‧─────
│ Asmodeus Bot✍   
│📑ɴᴏᴍʙʀᴇ»${user.name}
│💰ᴘᴀɢᴏ»${hades * text} ${rpgshopp.emoticon('joincount')} *tokens 🪙*
│📜ᴛɪᴇɴᴅᴀ»ᴘʀᴇᴍɪᴜᴍ
│⏳ᴘᴀʀᴀ ᴠᴇʀ ᴛᴜ ᴛɪᴇᴍᴘᴏ» /listprem
╰─────°.♡.°‧─────\n\n🌀ᴀʜᴏʀᴀ ᴛɪᴇɴᴇ ᴘʀᴇᴍɪᴜᴍ ᴘᴏʀ ʟᴏ ᴛᴀɴᴛᴏ ɴᴏ ᴠᴀ ᴛᴇɴᴇʀ ʟíᴍɪᴛᴇs\n${wm}`, fkontak, { mentions: [aa,] })}
if (/prem3/i.test(command)) {
var tiempoPremium = 300 * text 
var tiempoDecretado = 300 * 1 
const hades = 35
let user = global.db.data.users[m.sender]
    
if (!text) return conn.reply(m.chat, `${mg}ɪɴɢʀᴇsᴇ ʟᴀ ᴄᴀɴᴛɪᴅᴀᴅ ǫᴜᴇ ǫᴜɪᴇʀᴇs ᴄᴏᴍᴘʀᴀʀ🌀️ 1 = ${tiempoDecretado} HORA(S)*\n*✤ ${hades} ${rpgshop.emoticon('joincount')}*\n\n*EJEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (isNaN(text)) return conn.reply(m.chat, `${mg}sᴏʟᴏ sᴇ ᴀᴄᴇᴘᴛᴀɴ ɴúᴍᴇʀᴏs🍁\n*EJEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (user.joincount < hades) return conn.reply(m.chat, `${ag}ɴᴏ ᴛɪᴇɴᴇ ✴️sᴜғɪᴄɪᴇɴᴛᴇ ${rpgshop.emoticon('joincount')}Comprar premium 🛒, compre ${rpgshopp.emoticon('joincount')}🍁En la tienda usando:\n${usedPrefix}ʙᴜʏ`, fkontak, m)
user.joincount -= hades * text
    
var tiempo = 7300000 * text 
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
const imgpre = [ 
'https://i.imgur.com/aOU8mzP.jpg', 
'https://i.imgur.com/HE1dWt6.png',
'https://i.imgur.com/jRA9pwD.jpeg'];

await conn.reply(m.chat, `╭─────°.♡.°‧─────
│Asmodeus bot ✍  
│📑ɴᴏᴍʙʀᴇ»${user.name}
│💰ᴘᴀɢᴏ»${hades * text} ${rpgshopp.emoticon('joincount')} *tokens 🪙*
│📜ᴛɪᴇɴᴅᴀ»ᴘʀᴇᴍɪᴜᴍ
│⏳ᴘᴀʀᴀ ᴠᴇʀ ᴛᴜ ᴛɪᴇᴍᴘᴏ» /listprem
╰─────°.♡.°‧─────\n\n🌀ᴀʜᴏʀᴀ ᴛɪᴇɴᴇ ᴘʀᴇᴍɪᴜᴍ ᴘᴏʀ ʟᴏ ᴛᴀɴᴛᴏ ɴᴏ ᴠᴀ ᴛᴇɴᴇʀ ʟíᴍɪᴛᴇs\n${wm}`, fkontak, { mentions: [aa,] })}
if (/prem4/i.test(command)) {
var tiempoPremium = 50 * text 
var tiempoDecretado = 50 * 1 
const hades = 50
let user = global.db.data.users[m.sender]
    
if (!text) return conn.reply(m.chat, `${mg}ɪɴɢʀᴇsᴇ ʟᴀ ᴄᴀɴᴛɪᴅᴀᴅ ǫᴜᴇ ǫᴜɪᴇʀᴇs ᴄᴏᴍᴘʀᴀʀ🌀️ 1 = ${tiempoDecretado} HORA(S)*\n*✤ ${hades} ${rpgshop.emoticon('joincount')}*\n\n*EJEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (isNaN(text)) return conn.reply(m.chat, `${mg}sᴏʟᴏ sᴇ ᴀᴄᴇᴘᴛᴀɴ ɴúᴍᴇʀᴏs🍁\n*EJEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (user.joincount < hades) return conn.reply(m.chat, `${ag}ɴᴏ ᴛɪᴇɴᴇ ✴️sᴜғɪᴄɪᴇɴᴛᴇ ${rpgshop.emoticon('joincount')}Para obtener premium compre ${rpgshopp.emoticon('joincount')}🍁 en la tienda usando:\n${usedPrefix}buy`, fkontak, m)
user.joincount -= hades * text
    
var tiempo = 18000000 * text 
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
const imgpre = [ 
'https://i.imgur.com/aOU8mzP.jpg', 
'https://i.imgur.com/HE1dWt6.png',
'https://i.imgur.com/jRA9pwD.jpeg'];

await conn.reply(m.chat, `╭─────°.♡.°‧─────
│Asmodeus Bot ✍     
│📑ɴᴏᴍʙʀᴇ»${user.name}
│💰ᴘᴀɢᴏ»${hades * text} ${rpgshopp.emoticon('joincount')}
│📜ᴛɪᴇɴᴅᴀ»${user.joincount} ${rpgshopp.emoticon('joincount')}*
│⏳ʟᴇ ǫᴜᴇᴅᴀ ᴛɪᴇᴍᴘᴏ»${tiempoPremium} min
│⌚ᴛɪᴍᴇʀ»${user.premiumTime - now} seg
╰─────°.♡.°‧─────\n\n🌀ᴀʜᴏʀᴀ ᴛɪᴇɴᴇ ᴘʀᴇᴍɪᴜᴍ ᴘᴏʀ ʟᴏ ᴛᴀɴᴛᴏ ɴᴏ ᴠᴀ ᴛᴇɴᴇʀ ʟíᴍɪᴛᴇs\n${wm}`, fkontak, { mentions: [aa,] })}
if (/prem5/i.test(command)) {
var tiempoPremium = 90 * text 
var tiempoDecretado = 90 * 1 
const hades = 60
let user = global.db.data.users[m.sender]
    
if (!text) return conn.reply(m.chat, `${mg}ɪɴɢʀᴇsᴇ ʟᴀ ᴄᴀɴᴛɪᴅᴀᴅ ǫᴜᴇ ǫᴜɪᴇʀᴇs ᴄᴏᴍᴘʀᴀʀ🌀️ 1 = ${tiempoDecretado} HORA(S)*\n*✤ ${hades} ${rpgshop.emoticon('joincount')}*\n\n*EJEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (isNaN(text)) return conn.reply(m.chat, `${mg}sᴏʟᴏ sᴇ ᴀᴄᴇᴘᴛᴀɴ ɴúᴍᴇʀᴏs🍁\n*EJEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (user.joincount < hades) return conn.reply(m.chat, `${ag}ɴᴏ ᴛɪᴇɴᴇ ✴️sᴜғɪᴄɪᴇɴᴛᴇ  ${rpgshop.emoticon('joincount')} para adquirir premium compre ${rpgshopp.emoticon('joincount')}en la tienda usando:\n${usedPrefix}ʙᴜʏ`, fkontak, m)
user.joincount -= hades * text
    
var tiempo = 30500000 * text 
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
const imgpre = [ 
'https://i.imgur.com/aOU8mzP.jpg', 
'https://i.imgur.com/HE1dWt6.png',
'https://i.imgur.com/jRA9pwD.jpeg'];

await conn.reply(m.chat, `╭─────°.♡.°‧─────
│ Asmodeus Bot✍   
│📑ɴᴏᴍʙʀᴇ»${user.name}
│💰ᴘᴀɢᴏ»${hades * text} ${rpgshopp.emoticon('joincount')} *tokens*
│📜ᴛɪᴇɴᴅᴀ»ᴘʀᴇᴍɪᴜᴍ
│⏳ᴘᴀʀᴀ ᴠᴇʀ ᴛᴜ ᴛɪᴇᴍᴘᴏ» /listprem
╰─────°.♡.°‧─────\n\n🌀ᴀʜᴏʀᴀ ᴛɪᴇɴᴇ ᴘʀᴇᴍɪᴜᴍ ᴘᴏʀ ʟᴏ ᴛᴀɴᴛᴏ ɴᴏ ᴠᴀ ᴛᴇɴᴇʀ ʟíᴍɪᴛᴇs\n${wm}`, fkontak, { mentions: [aa,] })}
if (/prem6/i.test(command)) {
var tiempoPremium = 130 * text  
var tiempoDecretado = 130 * 1 
const hades = 70
let user = global.db.data.users[m.sender]
    
if (!text) return conn.reply(m.chat, `${mg}ɪɴɢʀᴇsᴇ ʟᴀ ᴄᴀɴᴛɪᴅᴀᴅ ǫᴜᴇ ǫᴜɪᴇʀᴇs ᴄᴏᴍᴘʀᴀʀ🌀️ 1 = ${tiempoDecretado} HORA(S)*\n*✤ ${hades} ${rpgshop.emoticon('joincount')}*\n\n*EJEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (isNaN(text)) return conn.reply(m.chat, `${mg}sᴏʟᴏ sᴇ ᴀᴄᴇᴘᴛᴀɴ ɴúᴍᴇʀᴏs🍁\n*EJEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (user.joincount < hades) return conn.reply(m.chat, `${ag}ɴᴏ ᴛɪᴇɴᴇ ✴️sᴜғɪᴄɪᴇɴᴛᴇ${rpgshop.emoticon('joincount')}Para adquirir premium compre ${rpgshopp.emoticon('joincount')}🍁en la tienda usando:\n${usedPrefix}buy`, fkontak, m)
user.joincount -= hades * text
    
var tiempo = 45000000 * text 
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
const imgpre = [ 
'https://i.imgur.com/aOU8mzP.jpg', 
'https://i.imgur.com/HE1dWt6.png',
'https://i.imgur.com/jRA9pwD.jpeg'];


await conn.reply(m.chat, `╭─────°.♡.°‧─────
│ Asmodeus Bot✍   
│📑ɴᴏᴍʙʀᴇ»${user.name}
│💰ᴘᴀɢᴏ»${hades * text} ${rpgshopp.emoticon('joincount')} *tokens 🪙*
│📜ᴛɪᴇɴᴅᴀ»ᴘʀᴇᴍɪᴜᴍ
│⏳ᴘᴀʀᴀ ᴠᴇʀ ᴛᴜ ᴛɪᴇᴍᴘᴏ» /listprem
╰─────°.♡.°‧─────\n\n🌀ᴀʜᴏʀᴀ ᴛɪᴇɴᴇ ᴘʀᴇᴍɪᴜᴍ ᴘᴏʀ ʟᴏ ᴛᴀɴᴛᴏ ɴᴏ ᴠᴀ ᴛᴇɴᴇʀ ʟíᴍɪᴛᴇs\n${wm}`, fkontak, { mentions: [aa,] })}
if (/prem7/i.test(command)) {
var tiempoPremium = 180 * text 
var tiempoDecretado = 180 * 1  
const hades = 80
let user = global.db.data.users[m.sender]
    
if (!text) return conn.reply(m.chat, `${mg}ɪɴɢʀᴇsᴇ ʟᴀ ᴄᴀɴᴛɪᴅᴀᴅ ǫᴜᴇ ǫᴜɪᴇʀᴇs ᴄᴏᴍᴘʀᴀʀ🌀️ 1 = ${tiempoDecretado} HORA(S)*\n*✤ ${hades} ${rpgshop.emoticon('joincount')}*\n\n*EJEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (isNaN(text)) return conn.reply(m.chat, `${mg}sᴏʟᴏ sᴇ ᴀᴄᴇᴘᴛᴀɴ ɴúᴍᴇʀᴏs🍁\n*EJEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (user.joincount < hades) return conn.reply(m.chat, `${ag}ɴᴏ ᴛɪᴇɴᴇ ✴️sᴜғɪᴄɪᴇɴᴛᴇ ${rpgshop.emoticon('joincount')} Para adquirir premium compre ${rpgshopp.emoticon('joincount')}🍁en la tienda usando:\n${usedPrefix}ʙᴜʏ`, fkontak, m)
user.joincount -= hades * text
    
var tiempo = 86400000 * text 
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
const imgpre = [ 
'https://i.imgur.com/aOU8mzP.jpg', 
'https://i.imgur.com/HE1dWt6.png',
'https://i.imgur.com/jRA9pwD.jpeg'];

await conn.reply(m.chat, `╭─────°.♡.°‧─────
│ Asmodeus Bot✍    
│📑ɴᴏᴍʙʀᴇ»${user.name}
│💰ᴘᴀɢᴏ»${hades * text} ${rpgshopp.emoticon('joincount')}* tokens 🪙*
│📜ᴛɪᴇɴᴅᴀ»ᴘʀᴇᴍɪᴜᴍ
│⏳ᴘᴀʀᴀ ᴠᴇʀ ᴛᴜ ᴛɪᴇᴍᴘᴏ» /listprem
╰─────°.♡.°‧─────\n\n🌀ᴀʜᴏʀᴀ ᴛɪᴇɴᴇ ᴘʀᴇᴍɪᴜᴍ ᴘᴏʀ ʟᴏ ᴛᴀɴᴛᴏ ɴᴏ ᴠᴀ ᴛᴇɴᴇʀ ʟíᴍɪᴛᴇs\n${wm}`, fkontak, { mentions: [aa,] })}

if (/prem8/i.test(command)) {
var tiempoPremium = 250 * text 
var tiempoDecretado = 250 * 1 
const hades = 120
let user = global.db.data.users[m.sender]
    
if (!text) return conn.reply(m.chat, `${mg}ɪɴɢʀᴇsᴇ ʟᴀ ᴄᴀɴᴛɪᴅᴀᴅ ǫᴜᴇ ǫᴜɪᴇʀᴇs ᴄᴏᴍᴘʀᴀʀ🌀️ 1 = ${tiempoDecretado} HORA(S)*\n*✤ ${hades} ${rpgshop.emoticon('joincount')}*\n\n*EJEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (isNaN(text)) return conn.reply(m.chat, `${mg}sᴏʟᴏ sᴇ ᴀᴄᴇᴘᴛᴀɴ ɴúᴍᴇʀᴏs🍁\n*EJEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (user.joincount < hades) return conn.reply(m.chat, `${ag}ɴᴏ ᴛɪᴇɴᴇ ✴️sᴜғɪᴄɪᴇɴᴛᴇ ${rpgshop.emoticon('joincount')} Para adquirir premium compre ${rpgshopp.emoticon('joincount')}🍁en la tienda usando:\n${usedPrefix}ʙᴜʏ`, fkontak, m)
user.joincount -= hades * text
    
var tiempo = 259200000 * text 
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
const imgpre = [ 
'https://i.imgur.com/aOU8mzP.jpg', 
'https://i.imgur.com/HE1dWt6.png',
'https://i.imgur.com/jRA9pwD.jpeg'];

await conn.reply(m.chat, `╭─────°.♡.°‧─────
│ Asmodeus Bot✍  
│📑ɴᴏᴍʙʀᴇ»${user.name}
│💰ᴘᴀɢᴏ»${hades * text} ${rpgshopp.emoticon('joincount')} *dolares💵*
│📜ᴛɪᴇɴᴅᴀ»ᴘʀᴇᴍɪᴜᴍ
│⏳ᴘᴀʀᴀ ᴠᴇʀ ᴛᴜ ᴛɪᴇᴍᴘᴏ» /listprem
╰─────°.♡.°‧─────\n\n🌀ᴀʜᴏʀᴀ ᴛɪᴇɴᴇ ᴘʀᴇᴍɪᴜᴍ ᴘᴏʀ ʟᴏ ᴛᴀɴᴛᴏ ɴᴏ ᴠᴀ ᴛᴇɴᴇʀ ʟíᴍɪᴛᴇs\n${wm}`, fkontak, { mentions: [aa,] })}
	if (command) {
switch (template) {		
case 'eifjf':
case 'didudud':
case 'djdjd':
case 'djdjd':
case 'djdjdjd':
await conn.reply(m.chat, `ᴘʀᴇᴍɪᴜᴍ»ᴄʟᴀsᴇ»⓵ᴘᴀss»⓵» /prem1 1✪»ᴘᴀsᴇ»ʙásɪᴄᴏ»ᴘᴀss»✪
15  *dolares💵* ➟*5>Horas* ᴘʀᴇᴍɪᴜᴍ\n
\n\n┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅\n\n
🌀ᴘʀᴇᴍɪᴜᴍ»ᴄʟᴀsᴇ»⓶ᴘᴀss»⓶» /prem2 
  1✪»ᴘᴀsᴇ»ᴛᴏʀʀᴇ ᴅᴇ ᴇɴᴄᴜᴇɴᴛʀᴏ»ᴘᴀss»✪
25 *dolares💵* ➟*15Horas* ᴘʀᴇᴍɪᴜᴍ
\n\n┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅\n\n
💚ᴘʀᴇᴍɪᴜᴍ»ᴄʟᴀsᴇ»⓷ᴘᴀss»⓷» /prem3 
  1 ✪»ᴘᴀsᴇ»ᴠᴇʀᴅᴜᴢᴄᴏ»ᴘᴀss»✪
35 *dolares💵* *➟Días1➟6Horas* ᴘʀᴇᴍɪᴜᴍ
\n\n┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅\n\n
🗑ᴘʀᴇᴍɪᴜᴍ»ᴄʟᴀsᴇ»⓸ᴘᴀss»⓸» /prem4 
  1✪»ᴘᴀsᴇ»ʀᴇsɪᴅᴜᴏs ᴄᴀᴢᴀ»ᴘᴀss»✪
50 *dolares💵* *➟Días2➟1Horas* ᴘʀᴇᴍɪᴜᴍ
\n\n┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅\n\n
♦ᴘʀᴇᴍɪᴜᴍ️»ᴄʟᴀsᴇ»⓹ᴘᴀss»⓹» /prem5 
  1✪»ᴘᴀsᴇ»ʙʀɪʟʟᴀɴᴛᴇ»ᴘᴀss»✪
60 *dolares💵* *➟Días3➟18Horas* ᴘʀᴇᴍɪᴜᴍ\n
\n\n┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅\n\n
🪙ᴘʀᴇᴍɪᴜᴍ»ᴄʟᴀsᴇ»⓺ᴘᴀss»⓺» /prem6 
  1✪»ᴘᴀsᴇ»ᴀᴍᴏ ᴅᴇʟ ᴄʀɪᴘᴛᴏ»ᴘᴀss»✪
70 *dolares💵* *➟Días5➟10Horas* ᴘʀᴇᴍɪᴜᴍ\n
\n\n┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅\n\n
💎+ᴘʀᴇᴍɪᴜᴍ»ᴄʟᴀsᴇ»⓻ᴘᴀss»⓻» /prem7 
  1✪»ᴘᴀsᴇ»ɢᴀᴍᴀ ᴘʟᴜs»ᴘᴀss»✪
80 *dolares💵* *➟Díasd7➟12Horas* ᴘʀᴇᴍɪᴜᴍ
\n\n┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅\n\n
👑ᴘʀᴇᴍɪᴜᴍ»ᴄʟᴀsᴇ»⓼ᴘᴀss»⓼» /prem8 
 1✪»ᴘᴀsᴇ»ᴛɪᴇᴍᴘᴏ ᴅᴇ ᴏʀᴏ»ᴘᴀss»✪
100 *dolares💵* *➟Días10➟10Horas* ᴘʀᴇᴍɪᴜᴍ\n`, fkontak, { mentions: [aa,] })

break	
		
}}}

handler.help = ['addprem [@user] <days>']
handler.tags = ['owner']
handler.command = /^(comprar|prem1|prem2|prem3|prem4|prem5|prem6|prem7|prem8|prem)$/i

export default handler