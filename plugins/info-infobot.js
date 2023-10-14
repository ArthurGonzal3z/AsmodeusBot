import { generateWAMessageFromContent } from '@whiskeysockets/baileys'
import os from 'os'
import util from 'util'
import {sizeFormatter} from 'human-readable'
import MessageType from '@whiskeysockets/baileys'
import fs from 'fs'
import { performance } from 'perf_hooks'
import { cpus as _cpus, totalmem, freemem } from 'os'
let format = sizeFormatter({
  std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC'
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
})
let handler = async (m, { conn, usedPrefix }) => {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'))
const groups = chats.filter(([id]) => id.endsWith('@g.us'))
const used = process.memoryUsage()
const { restrict, antiCall, antiprivado, modejadibot } = global.db.data.settings[conn.user.jid] || {}

  const cpus = _cpus().map(cpu => {
    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
    return cpu
  })
  const cpu = cpus.reduce((last, cpu, _, { length }) => {
    last.total += cpu.total
    last.speed += cpu.speed / length
    last.times.user += cpu.times.user
    last.times.nice += cpu.times.nice
    last.times.sys += cpu.times.sys
    last.times.idle += cpu.times.idle
    last.times.irq += cpu.times.irq
    return last
  }, {
    speed: 0,
    total: 0,
    times: {
      user: 0,
      nice: 0,
      sys: 0,
      idle: 0,
      irq: 0
    }
  })
  
const { autoread, gconly, pconly, self } = global.opts || {}
let old = performance.now()
let neww = performance.now()
let pp = imagen4
let speed = neww - old
let info = `┏━━━━━༺᯼༻━━━━━━
┃ ᚛ *Información de Asmodeus*
┃ ᚛ Creador: @${owner[0][0]}
┃ ᚛ Chats Privados: *${chats.length - groups.length}*
┃ ᚛ Grupos: *${groups.length}* 
┃ ᚛ Chats Totales: *${chats.length}* 
┃ ᚛ Tiempo Activo: *${uptime}*
┃ ᚛ Tota de Usuários: *${totalreg}*
┃ ᚛ Autoread: ${autoread ? '*activado*' : '*desactivado*'}
┃ ᚛ Restrict: ${restrict ? '*activado*' : '*desactivado*'} 
┃ ᚛ Pconly: ${pconly ? '*activado*' : '*desactivado*'}
┃ ᚛ Gconly: ${gconly ? '*activado*' : '*desactivado*'}
┃ ᚛ Modo: ${self ? '*privado*' : '*público*'}
┃ ᚛ Antiprivado: ${antiprivado ? '*activado*' : '*desactivado*'}
┃ ᚛ Modejadibot: ${modejadibot ? '*activado*' : '*desactivado*'}
┃ ᚛ Antillamada: ${antiCall ? '*activado*' : '*desactivado*'}
┃ ᚛ Ping: 
┃  *${speed} ms* 
┃ ᚛ *RAM:* ${format(totalmem() - freemem())} / ${format(totalmem())}
┃ ᚛ *FreeRAM:* ${format(freemem())}
┃
┃ ᚛ *Uso de memoria*
${'```' + Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v => v.length)), ' ')}: ${format(used[key])}`).join('\n') + '```'}
┃
┃ ᚛ *Repositorio OFC:*
┃ *https://github.com/ArthurGonzal3z/AsmodeusBot/tree/master*
┗━━━━━༺᯼༻━━━━━━

${wm} 
`.trim() 
if (m.isGroup) {
      conn.sendMessage(m.chat, {text: info.trim(), mentions: [...info.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...info.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net') , "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.linkgc2, "containsAutoReply": true, "mediaType": 1, "thumbnail": pp, "mediaUrl": `https://chat.whatsapp.com/J8ugOEnwmrCIKxPadExhhu`, "sourceUrl": `https://chat.whatsapp.com/J8ugOEnwmrCIKxPadExhhu`}}}, {quoted: m});
 }  else {
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};

      conn.sendMessage(m.chat, {text: info.trim(), mentions: [...info.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...info.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.linkgc2, "containsAutoReply": true, "mediaType": 1, "thumbnail": pp, "mediaUrl": `https://chat.whatsapp.com/J8ugOEnwmrCIKxPadExhhu`, "sourceUrl": `https://chat.whatsapp.com/J8ugOEnwmrCIKxPadExhhu`}}}, {quoted: fkontak2});
    }
} 

handler.help = ['infobot', 'speed']
handler.tags = ['info', 'tools']
handler.command = /^(ping|speed|infobot)$/i
export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}
