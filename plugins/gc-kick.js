let handler = async (m, { conn, participants }) => {
if (!m.mentionedJid[0] && !m.quoted) throw 'Etiqueta a alguien del grupo para eliminarlo'
  let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
  let owr = await conn.groupMetadata(m.chat)
let name = await conn.getName(m.sender)
  if (user.includes(owr.owner)) return await m.reply(`Lo siento ${name} No puedo eliminar a @${user.split('@')[0]} porque el creó el grupo`)
    if (user.includes(conn.user.jid)) return m.reply('*No puedo eliminarme a mi mismo, hazlo manualmente por favor*\n*Ten en cuenta que si lo haces no volveré a este grupo*');  
    
for (let [jid] of global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)) {
                        let data = (await conn.onWhatsApp(jid))[0] || {}
                        if (data.exists)
if (user == data.jid) return m.reply(`Lo siento ${name}, no puedo eliminar a mi creador`)
                    }
  conn.groupParticipantsUpdate(m.chat, [user], 'remove')
  m.reply(`${name} eliminó a *@${user.split('@')[0]}*`, null, { mentions: [user] })
}

handler.help = ['kick']
handler.tags = ['group']
handler.command = /^(kick|ban|echar|hechar|k)$/i

handler.admin = true
handler.group = true
handler.botAdmin = true


export default handler