let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Ingresa un nombre para el bot`
  try {
    await conn.updateProfileName(text)
    m.reply('Nombre Cambiado!')
  } catch (e) {
    console.log(e)
    throw `Error`
  }
}
handler.help = ['setbotname <teks>']
handler.tags = ['owner']
handler.command = /^(setbotname)$/i

handler.owner = true

export default handler