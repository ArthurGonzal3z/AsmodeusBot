let handler = async (m, { text }) => {
let user = global.db.data.users[m.sender]
await conn.sendMessage(m.chat, { react: { text: "😴", key: m.key } })
user.afk = + new Date
user.afkReason = text
m.reply(`*╰► ${conn.getName(m.sender)} Estará inactivo (AFK) Por favor no le etiqueten*\n\n*╰► Motivo de su inactividad${text ? ': ' + text : ''}*
`)}
handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^afk$/i
export default handler