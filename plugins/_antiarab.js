let handler = m => m
handler.before = async function (m, {conn, isAdmin, isBotAdmin, isOwner, isROwner} ) {
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let bot = global.db.data.settings[conn.user.jid] || {}
if (isBotAdmin && chat.antiArab2 && !isAdmin && !isOwner && !isROwner && bot.restrict) {
		
if (m.sender.startsWith('212' || '212')) {
m.reply(`*En este grupo no se permiten numeros raros o árabes*`)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return 
}
   
if (m.sender.startsWith('265' || '265')) {
m.reply(`*En este grupo no se permiten numeros raros o árabes*`)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return   
} 
	
if (m.sender.startsWith('92' || '92')) {
m.reply(`*En este grupo no se permiten numeros raros o árabes*`)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return   
} 	
    if (m.sender.startsWith('91' || '91')) {
m.reply(`*En este grupo no se permiten numeros raros o árabes*`)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return 
}
if (m.sender.startsWith('500' || '500')) {
m.reply(`*En este grupo no se permiten numeros raros o árabes*`)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return 
}
   if (m.sender.startsWith('84' || '84')) {
m.reply(`*En este grupo no se permiten numeros raros o árabes*`)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return 
}
 if (m.sender.startsWith('88' || '88')) {
m.reply(`*En este grupo no se permiten numeros raros o árabes*`)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return 
}  
  if (m.sender.startsWith('61' || '61')) {
m.reply(`*En este grupo no se permiten numeros raros o árabes*`)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return 
}  
   
   if (m.sender.startsWith('33' || '33')) {
m.reply(`*En este grupo no se permiten numeros raros o árabes*`)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return 
}
 if (m.sender.startsWith('994' || '994')) {
m.reply(`*En este grupo no se permiten numeros raros o árabes*`)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return 
}  
    if (m.sender.startsWith('222' || '222')) {
m.reply(`*En este grupo no se permiten numeros raros o árabes*`)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return 
}
    
 if (m.sender.startsWith('358' || '358')) {
m.reply(`*En este grupo no se permiten numeros raros o árabes*`)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return 
}  
if (m.sender.startsWith('263' || '263')) {
m.reply(`*En este grupo no se permiten numeros raros o árabes*`)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return 
}    
    if (m.sender.startsWith('27' || '27')) {
m.reply(`*En este grupo no se permiten numeros raros o árabes*`)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return 
}
    if (m.sender.startsWith('44' || '44')) {
m.reply(`*En este grupo no se permiten numeros raros o árabes*`)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return 
}
    if (m.sender.startsWith('45' || '45')) {
m.reply(`*En este grupo no se permiten numeros raros o árabes*`)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return 
}
    if (m.sender.startsWith('65' || '65')) {
m.reply(`*En este grupo no se permiten numeros raros o árabes*`)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return 
}
    if (m.sender.startsWith('63' || '63')) {
m.reply(`*En este grupo no se permiten numeros raros o árabes*`)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return 
}
    if (m.sender.startsWith('62' || '62')) {
m.reply(`*En este grupo no se permiten numeros raros o árabes*`)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return 
}
    
}}
export default handler
