let handler = async (m, { conn, text, args, usedPrefix, command }) => {

if (!args[0] || !args[1] || !args[2] || !args[3]) throw `Ejemplo\n.setime 50246028932 2022-04-30 15:30 hola`

let obj = { 
tanggal: `${args[1]}`, 
jam: `${args[2]}`
}

let date1 = +new Date()

let date2 = +new Date(obj.tanggal + " " + obj.jam)

let poster = m.sender
let txt = text.replace(args[0] + ' ', '').replace(args[1] + ' ', '').replace(args[2] + ' ', '')
let res = `Mensaje programado para: *@${args[0]},* en la fecha: *${args[1]},* a la hora: *${args[2]}.*`
await conn.reply(m.chat, res, m, {mentions: conn.parseMention(res)})
setTimeout(() => conn.reply(args[0] + "@s.whatsapp.net", `*TIME CHAT BOT*
*From:* @${poster.split("@")[0]}
*Text Content:*
${txt}
`, null, {mentions: [poster]}), date2 - date1)

}

handler.help = ['setchattime']
handler.tags = ['tools']

handler.command = /^(set(chat)?(time)?)$/i
handler.limit = false
export default handler