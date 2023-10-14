import fg from 'api-dylux'

let handler = async(m, {conn, text}) => {
let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
if (!teks) throw 'Ingrese el nombre y el artista de la canción de la cuál desea saber la letra'

const result = await fg.lyrics(teks)


let img = await (await fetch(result.thumb)).buffer()
await conn.sendFile(m.chat, img, 'error.jpg', `Título: *${result.title}*
Artista: *${result.artist}*

Letra:
${result.lyrics}`.trim(), m)
}

handler.help = ['Lyrics'].map(v => v + '')
handler.tags = ['tools']
handler.command = ['letra', 'lyrics', 'letras'] 

export default handler