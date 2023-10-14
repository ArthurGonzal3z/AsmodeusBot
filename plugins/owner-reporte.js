let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*Escribe el mensaje que deseas enviar al propietario como reporte, ejemplo:*\n*${usedPrefix + command} el comando ${usedPrefix}play no manda nada*`
if (text.length < 10) throw `*El reporte debe contener mínimo 10 caracteres*`
if (text.length > 1000) throw `*El reporte no debe exceder los 1000 caracteres*`
let teks = `*▭▬▭▬Reporte▭▬▭▬*\n*ᥫ*\n*ᥫ╰► Número:* wa.me/${m.sender.split`@`[0]}\n*ᥫ*\n*ᥫ*\n*ᥫ╰► Mensaje:* ${text}`
conn.reply('5355495621@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, { contextInfo: { mentionedJid: [m.sender] }})
conn.reply('16714828922@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, { contextInfo: { mentionedJid: [m.sender] }})
m.reply(`*Reporte enviado, será atendido lo antes posible, por favor sea paciente*\n*Tenga en cuenta que este comando es solo para uso excepcional, si usted hace uso de este comando de manera indevida será bloqueado del bot*`)
}
handler.help = ['reporte', 'request'].map(v => v + ' <teks>')
handler.tags = ['info']
handler.command = /^(report|request|reporte|bugs|bug|report-owner|reportes)$/i
export default handler