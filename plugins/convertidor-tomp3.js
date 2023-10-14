import { toAudio } from '../lib/converter.js'
let handler = async (m, { conn, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (q || q.msg).mimetype || q.mediaType || ''
if (!/video|audio/.test(mime)) throw `*Responde al video que desee convertir en audio*`
let media = await q.download()
if (!media) throw '*Ocurrió un error, vuelva a intentarlo*'
let audio = await toAudio(media, 'mp4')
if (!audio.data) throw '*Ocurrió un error, por favor vuelva a intentarlo*'
conn.sendMessage(m.chat, { audio: audio.data,  mimetype: 'audio/mpeg' }, { quoted: m })
}
handler.alias = ['tomp3', 'toaudio']
handler.command = /^to(mp3|audio)$/i
export default handler
