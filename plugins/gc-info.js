let handler = async (m, { conn, participants, groupMetadata }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/avatar_contact.png'
const { antiToxic, antiTraba, antiviewonce, isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, antiLink2, modohorny, autosticker, modoadmin, audios, delete: del } = global.db.data.chats[m.chat]
const groupAdmins = participants.filter(p => p.admin)
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
let text = `┏━━━━━༺᯼༻━━━━━━
┃ *ID del grupo:* 
┃ ${groupMetadata.id}
┃
┃ *NOMBRE:* 
┃ ${groupMetadata.subject}
┃
┃ *DESCRIPCIÓN:* 
┃ ${groupMetadata.desc?.toString() || '𝚂𝙸𝙽 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝙲𝙸𝙾𝙽'}
┃
┃ *Miembros Totales:*
┃ ${participants.length} Participantes
┃
┃ *Propietario del grupo:* 
┃ @${owner.split('@')[0]}
┃
┃ *Admins del Grupo:*
${listAdmin}
┃
┃ *Comandos Automáticos:*
┃ ᚛ welcome: ${welcome ? '✅' : '❌'}
┃ ᚛ detect: ${detect ? '✅' : '❌'} 
┃ ᚛  antilink: ${antiLink ? '✅' : '❌'} 
┃ ᚛  antilink 𝟸: ${antiLink2 ? '✅' : '❌'} 
┃ ᚛ modo horny: ${modohorny ? '✅' : '❌'} 
┃ ᚛ autostickers: ${autosticker ? '✅' : '❌'} 
┃ ᚛ audios: ${audios ? '✅' : '❌'} 
┃ ᚛ antiviewonce: ${antiviewonce ? '✅' : '❌'} 
┃ ᚛ antitoxic: ${antiToxic ? '✅' : '❌'} 
┃ ᚛ antitraba: ${antiTraba ? '✅' : '❌'} 
┃ ᚛ modoadmin: ${modoadmin ? '✅' : '❌'} 

${wm} `.trim()
conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}
handler.help = ['infogrup']
handler.tags = ['group']
handler.command = /^(infogrupo|gro?upinfo|info(gro?up|gc))$/i
handler.group = true
export default handler
