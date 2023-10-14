import yts from 'yt-search'
import fs from 'fs'
let handler = async (m, {conn, text }) => {
await conn.sendMessage(m.chat, { react: { text: "🔎", key: m.key } })
  if (!text) throw '*Que quieres que busque en YouTube?*'
  let results = await yts(text)
  let tes = results.all
  console.log(tes)
  let teks = results.all.map(v => {
    switch (v.type) {
      case 'video': return `
╰► *${v.title}*
╰► *Link :* ${v.url}
╰► *Duración :* ${v.timestamp}
╰► *Subido :* ${v.ago}
 *Vistas :* ${v.views}`}}).filter(v => v).join('\n\n𓈀𓈀𓈀𓈀𓈀𓈀𓈀𓈀𓈀𓈀\n\n')
  conn.sendFile(m.chat, tes[0].thumbnail, 'yts.jpeg', teks, m)
}
handler.help = ['ytsearch *<texto>*'] 
handler.tags = ['search']
handler.command = ['ytsearch', 'yts'] 
export default handler
