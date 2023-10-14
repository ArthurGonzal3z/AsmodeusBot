import db from '../lib/database.js'
import { canLevelUp, xpRange } from '../lib/levelling.js'
import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command}) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let bio = await conn.fetchStatus(who).catch(_ => 'undefined')
  let biot = bio.status?.toString() || 'Sin Info'
 // let biot = bio.Status(who).catch(_ => 'Sin Bio')
  let user = global.db.data.users[who]
  let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png')
  let { name, exp, limit, lastclaim, registered, regTime, age, level, role, joincount } = global.db.data.users[who]
  let { min, xp, max } = xpRange(user.level, global.multiplier)
  let username = conn.getName(who)
  let prem = global.prems.includes(who.split`@`[0])
  let sn = createHash('md5').update(who).digest('hex')
  let str = `\t\t\t\t\t*⪧ Info de ${username}•*

*𓍕 • Nombre:* ${username}
*𓍕 • Bio:* ${biot}
*𓍕 • Tag:* @${who.replace(/@.+/, '')}
*𓍕 • Numero:* ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
*𓍕 • Link:* wa.me/${who.split`@`[0]}
*𓍕 • Diamantes:* ${limit}
*𓍕 • Tokens:* ${joincount} 
*𓍕 • Nivel:* ${level}
*𓍕 • Exp:* ${exp}
*𓍕 • Exp nivel:* ${user.exp - min}/${xp}
*𓍕 • Rango:* ${role}
*𓍕 • Premium:* ${prem ? 'Si' : 'No'}
*𓍕 • Ultimo claim:* ${lastclaim > 0 ? `${formatDate(lastclaim)}` : '×'}
*𓍕 • Registrado:* ${registered ? 'Si': 'No'}
*𓍕 • Fecha:* ${registered ? `${formatDate(regTime)}` : '×'}
*𓍕 • Hora:* ${registered ? `${formatHour(regTime)}` : '×'}
*𓍕 • Nombre:* ${registered ? `${name}` : '×'}
*𓍕 • Edad:* ${registered ? `${age} años` : '×'}


${wm}`
 
  let mentionedJid = [who]
  conn.sendFile(m.chat, pp, 'Error.jpg', str, m, false, { contextInfo: { mentionedJid }})
}

handler.help = ['perfil', 'perfil *@user*']
handler.tags = ['group']
handler.command = /^(perfil|profile)$/i
handler.register = true

export default handler


const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function formatDate(n, locale = 'es-US') {
  let d = new Date(n)
  return d.toLocaleDateString(locale, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}

function formatHour(n, locale = 'en-US') {
  let d = new Date(n)
  return d.toLocaleString(locale, {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true
  })
}