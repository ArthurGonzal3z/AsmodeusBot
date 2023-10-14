import { pinterest } from '@bochilteam/scraper'
let handler = async(m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*Ejemplode uso del comand: ${usedPrefix + command} Minecraft*`
const json = await pinterest(text)
conn.sendFile(m.chat, json.getRandom(), 'error.jpg', `
*╰► Resultado*
${text}
`.trim(), m)
}
handler.help = ['pinterest <keyword>']
handler.tags = ['internet']
handler.command = /^(pinterest)$/i
export default handler
