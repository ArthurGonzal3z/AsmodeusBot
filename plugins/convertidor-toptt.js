import { toPTT } from '../lib/converter.js'
let handler = async (m, { conn, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
if (!/video|audio/.test(mime)) throw `*Responde a un video o audio para convertirlo en nota de voz*`
let media = await q.download?.()
if (!media && !/video/.test(mime)) throw '*Ocurrió un error, vuelva a intentarlo*'
if (!media && !/audio/.test(mime)) throw '*Ocurrió un error, vuelva a intentarlo*'
let audio = await toPTT(media, 'mp4')
if (!audio.data && !/audio/.test(mime)) throw '*Ocurrió un error, vuelva a intentarlo*'
if (!audio.data && !/video/.test(mime)) throw '*Ocurrió un error, vuelva a intentarlo*'
let aa = conn.sendFile(m.chat, audio.data, 'error.mp3', '', m, true, { mimetype: 'audio/mp4' })
if (!aa) return conn.sendMessage(m.chat, { audio: { url: media }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })
}
handler.help = ['tovn (reply)']
handler.tags = ['audio']
handler.command = /^to(vn|(ptt)?)$/i
export default handler
