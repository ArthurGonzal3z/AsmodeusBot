import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
 

  let pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => global.imagen1)

  if (user.registered === true) throw `${name2} ya estas verificado, si quieres borrar tu registro usa el comando:\n*${usedPrefix}unreg* <Número de serie>\n\nPara obtener el número de serie usa el comando ${usedPrefix}myns`
  if (!Reg.test(text)) throw `*El uso correcto es: ${usedPrefix + command} nombre.edad*\n*╰► Ejemplo: ${usedPrefix + command} Arthur.22*`
let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw '*Debes poner un nombre*'
  if (!age) throw '*Define tubedas*'
  if (name.length >= 30) throw 'El nombre es muy largo' 
  age = parseInt(age)
  if (age > 100) throw '*Lo siento abuelo, eres demasiado viejo 👴🏻*'
  if (age < 5) throw '*Lo siento, eres demasiado pequeño 😲*'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let caption = `
𓍕 Registro Exitoso
⪧ *Nombre:* ${name}
⪧ *Edad:* ${age} años
⪧ *Número de serie:* 
${sn}
➛ Tu número de serie servirá para borrar tu registro en este bot

${wm}`
//let author = global.author
await conn.sendFile(m.chat, pp, 'mystic.jpg', caption)
//conn.sendButton(m.chat, caption, `¡𝚃𝚄 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴 𝚂𝙴𝚁𝙸𝙴 𝚃𝙴 𝚂𝙴𝚁𝚅𝙸𝚁𝙰 𝙿𝙾𝚁 𝚂𝙸 𝙳𝙴𝚂𝙴𝙰𝚂 𝙱𝙾𝚁𝚁𝙰𝚁 𝚃𝚄 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙾 𝙴𝙽 𝙴𝙻 𝙱𝙾𝚃!\n${author}`, [['¡¡𝙰𝙷𝙾𝚁𝙰 𝚂𝙾𝚈 𝚄𝙽 𝚅𝙴𝚁𝙸𝙵𝙸𝙲𝙰𝙳𝙾/𝙰!!', '/profile']], m)
global.db.data.users[m.sender].money += 10000
global.db.data.users[m.sender].exp += 10000
}
handler.help = ['verificar']
handler.tags = ['xp']
handler.command = /^(verify|register|verificar|reg|registrar)$/i
export default handler