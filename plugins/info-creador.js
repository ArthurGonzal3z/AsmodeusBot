let handler = async (m, { conn, usedPrefix }) => {
const pp = imagen4;
  const img = await(await fetch('https://github.com/ArthurGonzal3z.png')).buffer();
    await conn.sendMessage(m.chat, { react: { text: "🌸", key: m.key } })
 let name = await conn.getName(m.sender)
let text = `┏━━━━━༺᯼༻━━━━━━
┃ Hola ${name} 
┃ aca te dejaré el enlace se mi creador
┃ @${owner[0][0]}
┃ no lo molestes si no es urgente 
┗━━━━━༺᯼༻━━━━━━
`.trim() 
if (m.isGroup) {
      conn.sendMessage(m.chat, {text: text.trim(), mentions: [...text.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...text.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net') , "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.script, "containsAutoReply": true, "mediaType": 1, "thumbnail": pp, "mediaUrl": `http://wa.me/16714828922`, "sourceUrl": `http://wa.me/16714828922`}}}, {quoted: m});
 }  else {
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};

      conn.sendMessage(m.chat, {text: text.trim(), mentions: [...text.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...text.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.script, "containsAutoReply": true, "mediaType": 1, "thumbnail": pp, "mediaUrl": `http://wa.me/16714828922`, "sourceUrl": `http://wa.me/16714828922`}}}, {quoted: fkontak2});
    }
} 


handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator|creador|propietario)$/i
export default handler