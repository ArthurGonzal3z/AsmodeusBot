let handler = async (m, { conn, text, isROwner, isOwner }) => {
if (text) {
global.db.data.chats[m.chat].sBye = text
m.reply('*Mensaje configurado*')
} else throw `*Escribe el mensaje que deseas configurar como despedida, ejemplo:*\n*- @user (mención)*`
}
handler.help = ['setbye <text>']
handler.tags = ['group']
handler.command = ['setbye'] 
handler.admin = true
export default handler
