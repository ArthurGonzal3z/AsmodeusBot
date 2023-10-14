/* 𝐂𝐑𝐄𝐀𝐃𝐎 𝐏𝐎𝐑 https://github.com/BrunoSobrino */

let handler = async (m, { conn, usedPrefix, command }) => {
if (!m.quoted) throw `*Responde a un video para convertirlo en gift*`
const q = m.quoted || m
let mime = (q.msg || q).mimetype || ''
if (!/(mp4)/.test(mime)) throw `*El archivo ${mime} No es correcto, responde a un video para convertir en gift con audio*`
m.reply(global.wait)
let media = await q.download()
conn.sendMessage(m.chat, { video: media, gifPlayback: true, caption: '*Aquí tienes*' }, { quoted: m })}
handler.command = ['togifaud']
export default handler
