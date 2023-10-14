// Creditos del codigo a @Gatito-kw //

/* GitHub: https://github.com/Gatito-kw */

/* Bot: https://github.com/Gatito-kw/nekobot-md */

import { WAMessageStubType } from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, { conn, participants }) {
if (!m.messageStubType || !m.isGroup) return !0
   let groupName = (await conn.groupMetadata(m.chat)).subject
   let groupAdmins = participants.filter(p => p.admin)
   let pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => 'https://telegra.ph/file/274aec55ac4d0e5f5a2cf.jpg')
   let img = await (await fetch(pp)).buffer()
   let chat = global.db.data.chats[m.chat]
   const mentionsString = [m.sender, m.messageStubParameters[0], ...groupAdmins.map(v => v.id)]
   const mentionsContentM = [m.sender, m.messageStubParameters[0]]
   let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
 
   if (chat.detect2 && m.messageStubType == 29) {
      let txt1 = `┏━━━━━༺᯼༻━━━━━━\n┃ ${groupName}\n┃ @${m.sender.split`@`[0]} Le ha dado Admin a:\n┃ @${m.messageStubParameters[0].split`@`[0]}\n┗━━━━━༺᯼༻━━━━━━`
await conn.sendMessage(m.chat, { image: img, caption: txt1, mentions: mentionsString }, { quoted: fkontak2 })     
}
    
   if (chat.detect2 && m.messageStubType == 30) {
      let txt2 = `┏━━━━━༺᯼༻━━━━━━\n┃ ${groupName}\n┃ @${m.sender.split`@`[0]} Le ha quitado Admin a:\n┃ @${m.messageStubParameters[0].split`@`[0]}\n┗━━━━━༺᯼༻━━━━━━`
await conn.sendMessage(m.chat, { image: img, caption: txt2, mentions: mentionsString }, { quoted: fkontak2 })
}

if (chat.detect2 && m.messageStubType == 27) {
      let txt3 = `@${m.sender.split`@`[0]} Ha añadido a @${m.messageStubParameters[0].split`@`[0]}`

await conn.sendMessage(m.chat, { image: img, caption: txt3, mentions: mentionsContentM }, { quoted: fkontak2 })
}
    
 /*  if (chat.detect2 && m.messageStubType == 28) {
      let txt4 = `@${m.sender.split`@`[0]} ha eliminado a @${m.messageStubParameters[0].split`@`[0]}`

await conn.sendMessage(m.chat, { image: { url: pp }, caption: txt4, mentions: mentionsContentM }, { quoted: fkontak2 })
}
       
  /if (chat.detect2 && m.messageStubType == 32) {
      let ax 
    if (m.messageStubParameters[0] === m.sender) {
    ax = 'salido'    
    } else {
    ax = 'eliminado'    
    }
      let txt5 = `*Recientemente se ha ${ax} un miembro del grupo.*\n\n`
         txt5 += `*◦  Grupo:* ${groupName}\n`
     if (ax === 'eliminado') {       
         txt5 += `*◦  Se eliminoó a:* @${m.messageStubParameters[0].split`@`[0]}\n`
         txt5 += `*◦  Ejecutado por:* @${m.sender.split`@`[0]}`
   } else {
         txt5 += `*◦  Se salió:* @${m.messageStubParameters[0].split`@`[0]}\n`   
   }            
await conn.sendMessage(m.chat, { image: { url: pp }, caption: txt5, mentions: mentionsContentM }, { quoted: fkontak2 })
}    */
    
   if (chat.detect2 && m.messageStubType == 26) {
      let accion  
    if (m.messageStubParameters[0].split`@`[0] === 'on') {
      accion = 'cerrado'    
      } else {
      accion = 'abierto'   
      }
      let txt6 = `┏━━━━━༺᯼༻━━━━━━\n@${m.sender.split`@`[0]} Ha ${'```' + accion + '```'} ${groupName}\n┗━━━━━༺᯼༻━━━━━━`
await conn.sendMessage(m.chat, { image: { url: pp }, caption: txt6, mentions: mentionsContentM }, { quoted: fkontak2 })
}
    
   if (chat.detect2 && m.messageStubType == 21) {
      let txt7 = `┏━━━━━༺᯼༻━━━━━━\n@${m.sender.split`@`[0]} Ha cambiado el nombre del grupo a:\n${'```' + groupName + '```'}\n┗━━━━━༺᯼༻━━━━━━`
await conn.sendMessage(m.chat, { image: { url: pp }, caption: txt7, mentions: mentionsContentM }, { quoted: fkontak2 })
}

} /* Cierre del comando */