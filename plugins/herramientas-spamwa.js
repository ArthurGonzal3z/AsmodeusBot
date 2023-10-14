let handler = async (m, { conn, text }) => {

let [nomor, pesan, jumlah] = text.split('|')
if (!nomor) throw '*Ingresael número al cualssele realizaráel spam ejemplode uso:*\n#spamwa numero|texto|cantidad*\n*𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\n*➛ #spamwa 687857524|responde :v|25*'
if (!pesan) throw '*Ingrese el mensaje a spamear, ejemplo:*\n#spamwa numero|texto|cantidad*\n*𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\n*➛ #spamwa 687857524|responde :v|25*'
if (jumlah && isNaN(jumlah)) throw '*La cantidad debe er un número, ejemplo:*\n#spamwa numero|texto|cantidad*\n*𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\n*➛ #spamwa 687857524|responde :v|25*'

let fixedNumber = nomor.replace(/[-+<>@]/g, '').replace(/ +/g, '').replace(/^[0]/g, '62') + '@s.whatsapp.net'
let fixedJumlah = jumlah ? jumlah * 1 : 10
if (fixedJumlah > 50) throw '*La cantidad debe ser menor a 50*️'
await m.reply(`*Elnspam de mensajs al ${nomor} fue enviado*\n*Cantidad:*\n*╰► ${fixedJumlah} Veces!*`)
for (let i = fixedJumlah; i > 1; i--) {
if (i !== 0) conn.reply(fixedNumber, pesan.trim(), m)
}}
handler.help = ['spamwa <number>|<mesage>|<no of messages>']
handler.tags = ['General']
handler.command = /^spam(wa)?$/i
handler.group = false
handler.premium = true
handler.private = true
//handler.limit = true
export default handler
