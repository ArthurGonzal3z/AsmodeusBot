import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*Uso correcto del comando: ${usedPrefix + command} Minecraft*`
await conn.sendMessage(m.chat, { react: { text: "⏱️", key: m.key } })
const res = await googleImage(text)
let image = await res.getRandom()
let link = image
conn.sendFile(m.chat, link, 'error.jpg', `*╰► Resultados de:* ${text}\n*╰► Link:* ${link}\n*╰► Navegador:* Google`, m)}
//let captionn = `🔎 *𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾 𝙳𝙴:* ${text}\n🔗 *𝙻𝙸𝙽𝙺* ${link}\n🌎 *𝙱𝚄𝚂𝙲𝙰𝙳𝙾𝚁:* Google`
//conn.sendButton(m.chat, captionn, author, link, [['🔄 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 🔄', `#imagen ${text}`]], m)}
handler.help = ['gimage <query>', 'imagen <query>']
handler.tags = ['internet', 'tools']
handler.command = /^(gimage|image|imagen)$/i
export default handler