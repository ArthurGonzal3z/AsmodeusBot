import MessageType from '@whiskeysockets/baileys'
let handler = async (m, { conn, usedPrefix, command }) => {
let room = Object.values(conn.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
if (room == undefined) return await conn.reply(m.chat, '*No estás en ninguna sala, si quieres crear una usa el comando:\n.ttt*') 
delete conn.game[room.id]
await m.reply('*Se eliminó la sala con éxito*')}
handler.command = /^(delttt|deltt|delxo|deltictactoe)$/i
handler.fail = null
export default handler