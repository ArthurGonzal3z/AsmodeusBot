const xpperjoincount = 10
let handler = async (m, { conn, command, args }) => {
  let count = command.replace(/^buy/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].limit / xpperjoincount) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (global.db.data.users[m.sender].limit >= xpperjoincount * count) {
    global.db.data.users[m.sender].limit -= xpperjoincount * count
    global.db.data.users[m.sender].joincount += count
    conn.reply(m.chat, `╭「Asmodeus Bot」
│🛒 *NOTA DE PAGO* 
│┈┈┈┈┈┈┈┈┈┈┈┈┈
│➯‣ *Compra nominal* : + ${count} *tokens 🌝* 
│➯‣ *Gastado* : -${xpperjoincount * count} *Diamantes💎*
╰───────────────╯`, m)
  } else conn.reply(m.chat, `❎ Lo siento, no tienes suficientes *Diamantes💎* para comprar *${count}* *tokens🌝*`, m)
}
handler.help = ['dolares']
handler.tags = ['limit']
handler.command = ['buy', 'buyall' ] 
handler.register = true
handler.disabled = false

export default handler