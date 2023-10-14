let handler = async(m, { conn, text, args }) => {
  if (!args[0]) return m.reply("*Ingresa la Id de un grupo.*")
  if (!args[0].includes('g.us')) return m.reply("Ingresa la id en terminacion *g.us*")
  var __xd = await conn.groupInviteCode(args[0])
  var metada_gp = await conn.groupMetadata(args[0])
  var img_gpxd = await conn.profilePictureUrl(args[0], 'image').catch(_ => 'https://telegra.ph/file/9b1353deceded7f387713.jpg')
  console.log(metada_gp)
  let txt_metada = `
  *Id:* ${metada_gp.id}
  *Nombre:* ${metada_gp.subject}
  *Owner:* ${metada_gp.owner ? '@' + metada_gp.owner.split("@")[0] : 'No result'}
  *Enlace:* https://chat.whatsapp.com/${__xd}
  `
  conn.sendMessage(m.chat, {image: {url: img_gpxd}, caption: txt_metada, mentions: conn.parseMention(txt_metada.trim())}, {quoted: m})
 }
handler.tags = ['tools']
handler.help = ['checkid']
handler.command = ['checkid']
export default handler