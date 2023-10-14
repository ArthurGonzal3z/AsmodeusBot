let handler = async (m, { conn, text, command }) => {
let id = text ? text : m.chat  
await conn.reply(id, '*Un placer haber estado en este grupo, me despido de todos⳻᷼⳺*') 
await conn.groupLeave(id)}
handler.command = /^(out|leavegc|salirdelgrupo)$/i
handler.group = true
handler.rowner = true
export default handler
