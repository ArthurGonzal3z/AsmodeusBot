let handler = async (m, { conn, usedPrefix }) => {
let text = `
ᥫ╰►Listado de opciones premium 

▭▬▭▬▭▬▭▬▭▬▭▬▭▬

╰► Premium nivel 1 ↴
╰─► ${usedPrefix}prem1 + cantidad de tokens ↴
╰► Ejemplo de uso: ↴
╰─► ${usedPrefix}prem1 1
╰► Valor: 15 *tokens 🪙* = *30 min* premium

┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅

╰► Premium nivel 2 ↴
╰─► ${usedPrefix}prem2 + cantidad de tokens ↴
╰► Ejemplo de uso: ↴
╰─► ${usedPrefix}prem2 1
╰► Valor: 25 *Tokens 🪙* = *1 hora* premium

┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅

╰► Premium nivel 3 ↴
╰─► ${usedPrefix}prem3 + cantidad de tokens ↴
╰► Ejemplo de uso: ↴
╰─► ${usedPrefix}prem3 1
╰► Valor: 35 *Tokens 🪙* = *2 horas premium* premium

┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅

╰► Premium nivel 4 ↴
╰─► ${usedPrefix}prem4 + cantidad de tokens ↴
╰► Ejemplo de uso: ↴
╰─► ${usedPrefix}prem4 1
╰► Valor: 50 *Tokens 🪙* = *5 hora* premium

┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅

╰► Premium nivel 5 ↴
╰─► ${usedPrefix}prem5 + cantidad de tokens ↴
╰► Ejemplo de uso: ↴
╰─► ${usedPrefix}prem5 1
╰► Valor: 60 *Tokens 🪙* = *8 horas 30 min* premium

┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅

╰► Premium nivel 6 ↴
╰─► ${usedPrefix}prem6 + cantidad de tokens ↴
╰► Ejemplo de uso: ↴
╰─► ${usedPrefix}prem6 1
╰► Valor: 70 *Tokens 🪙* = *12Horas 30 min* premium

┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅

╰► Premium nivel 7 ↴
╰─► ${usedPrefix}prem7 + cantidad de tokens ↴
╰► Ejemplo de uso: ↴
╰─► ${usedPrefix}prem7 1
╰► Valor: 80 *Tokens 🪙* = *24 hrs* premium

┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅

╰► Premium nivel 8 ↴
╰─► ${usedPrefix}prem8 + cantidad de tokens ↴
╰► Ejemplo de uso: ↴
╰─► ${usedPrefix}prem8 1
╰► Valor: 120 *Tokens 🪙* = *3 días* premium

`.trim()   
m.reply(text)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(pass|pase|vip|premium)$/i
export default handler