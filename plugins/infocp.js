let handler = async (m, { conn, usedPrefix }) => {
let text = `
*@⁨ Bienvenido/a:*
*╰►7s・Store*
*Acá tienes los precios del cp:⇊*
⚜️ *_PRECIOS_* ⚜️
➖➖➖➖➖➖➖➖➖➖➖➖
🪙 5,000 CP - 650 mx
🪙 10,000 CP - 1180 mx
🪙 20,000 CP - 2300 mx
🪙 30,000 CP - 3380 mx
🪙 40,000 CP - 4500 mx
🪙 50,000 CP - 5600 mx
➖➖➖➖➖➖➖➖➖➖➖➖

⚜️ 𝘿𝙄𝙎𝘾𝙊𝙍𝘿 ⚜️
https://discord.gg/team7sons
➖➖➖➖➖➖➖➖➖➖➖➖
📌 *Para recargas etiquetar a @admins (no mandar mensaje al bot)*
`.trim()   
m.reply(text)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(créditos|cp|tienda|credito|codpoints)$/i
export default handler