let handler = async (m, { conn, usedPrefix }) => {
let name = await conn.getName(m.sender)


let text = `
Hola ${name} aquí tienes el tag del clan 
7s・

`.trim()   

conn.sendMessage(m.chat,{image: imagen8, caption: text, mentions: [m.sender]}, {quoted: m})

}

handler.help = ['owner', 'creator']

handler.tags = ['info']

handler.command = /^(tag)$/i

export default handler