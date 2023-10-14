/* ⚠ POR FAVOR NO MODIFIQUES NADA DE AQUÍ ⚠ */

import { generateWAMessageFromContent } from '@whiskeysockets/baileys'
import fs from 'fs'
let handler = async (m, { conn, usedPrefix, command }) => {
let pp = imagen4
let name = await conn.getName(m.sender)
let info =`┏━━━━━༺᯼༻━━━━━━
┃ ᚛ *Hola ${name}*
┃ ᚛ No pido nada pero si quieres 
┃ hacerme una donación estaré 
┃ muy agradecido contigo
┃ ᚛ Aquí te dejaré los datos por
┃ si quieres apoyarme
┃ ᚛ *Banco: BPA* 
┃ ᚛ *Beneficiario: Arthur González*   
┃ ᚛ *Tarjeta:*
┃ ᚛ *9205 1299 7988 9350*
┃ ᚛ Escríbeme si tienes alguna 
┃ duda o algo que decirme :) 
┃ ᚛ wa.me/16714828922 
┃ ᚛  *Estaría agradecido si me sigues*
┃ *en GitHub y me dejas tu estrellita*
┃
https://github.com/ArthurGonzal3z/AsmodeusBot/tree/master
┃ ᚛ Vamos que no cuesta nada:) 
┗━━━━━༺᯼༻━━━━━━
`.trim()

if (m.isGroup) {
      conn.sendMessage(m.chat, {text: info.trim(), mentions: [...info.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...info.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net') , "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.script, "containsAutoReply": true, "mediaType": 1, "thumbnail": pp, "mediaUrl": `https://wa.me/16714828922`, "sourceUrl": `https://wa.me/16714828922`}}}, {quoted: m});
 }  else {
const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};

      conn.sendMessage(m.chat, {text: info.trim(), mentions: [...info.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...info.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.script, "containsAutoReply": true, "mediaType": 1, "thumbnail": pp, "mediaUrl": `https://wa.me/16714828922`, "sourceUrl": `https://wa.me/16714828922`}}}, {quoted: fkontak2});
    }
} 

handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)|donar|apoyar$/i
export default handler