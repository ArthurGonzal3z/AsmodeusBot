import fs from 'fs'
import acrcloud from 'acrcloud'
let acr = new acrcloud({
host: 'identify-eu-west-1.acrcloud.com',
access_key: 'c33c767d683f78bd17d4bd4991955d81',
access_secret: 'bvgaIAEtADBTbLwiPGYlxupWqkNGIjT7J9Ag2vIu'
})

let handler = async (m) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (/audio|video/.test(mime)) { if ((q.msg || q).seconds > 400) return m.reply('El archivo que carga es demasiado grande, le sugerimos que corte el archivo grande a un archivo más pequeño, 400 segundos Los datos de audio son suficientes para identificar') 
let media = await q.download()
let ext = mime.split('/')[1]
fs.writeFileSync(`./tmp/${m.sender}.${ext}`, media)
let res = await acr.identify(fs.readFileSync(`./tmp/${m.sender}.${ext}`))
let { code, msg } = res.status
if (code !== 0) throw msg
let { title, artists, album, genres, release_date } = res.metadata.music[0]
let txt = `
*RESULTADOS*

╰► TÍTULO: ${title}
╰► ARTISTA: ${artists !== undefined ? artists.map(v => v.name).join(', ') : 'No encontrado'}
╰► ÁLBUM: ${album.name || 'No encontrado'}
╰► GÊNERO: ${genres !== undefined ? genres.map(v => v.name).join(', ') : 'No encontrado'}
╰► 𝙵𝙴𝙲𝙷𝙰 𝙳𝙴 𝙻𝙰𝙽𝚉𝙰𝙼𝙸𝙴𝙽𝚃𝙾: ${release_date || 'No encontrado'}
`.trim()
fs.unlinkSync(`./tmp/${m.sender}.${ext}`)
m.reply(txt)
} else throw '*Repone a un audio*'
}
handler.premium = true
handler.command = /^quemusica|quemusicaes|whatmusic$/i
export default handler