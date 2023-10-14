let handler = async (m, { conn, text, isROwner, isOwner }) => {
if (text) {
global.db.data.chats[m.chat].sWelcome = text
m.reply('*Mensaje Configurado para este grupo*')
} else throw `*Ingrese el mensaje que desee establecer de bienvenida, use:*\n*- @user (mención del usuario que entra o sale)*\n*- @subject (nombre de grupo)*\n*- @desc (description de grupo)*`
}
handler.help = ['setwelcome <text>']
handler.tags = ['group']
handler.command = ['setwelcome'] 
handler.admin = true
export default handler
