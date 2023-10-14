let handler = async (m, { conn, text, participants, isAdmin, isOwner, usedPrefix, command}) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    let groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map(v => v[0])
    let fproducto = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "687857524@s.whatsapp.net" } : {}) }, message: { "productMessage": { "product": { "productImage":{ "mimetype": "image/jpeg", "jpegThumbnail": null }, "title": `Anuncio hacia Grupos`, "description": "AsmodeusBot-MD", "currencyCode": "USD", "priceAmount1000": "100000", "retailerId": "Ghost", "productImageCount": 1 }, "businessOwnerJid": `0@s.whatsapp.net` }}}
    if (!m.quoted) throw `Responde un mensaje con el comando *${usedPrefix + command}* para mandar el aviso.`
    for (let id of groups) {
    await conn.sendMessage(id, { forward: m.quoted.fakeObj, mentions: (await conn.groupMetadata(`${id}`)).participants.map(v => v.id) }, { quoted: fproducto })
    }
    conn.reply(m.chat, `✅ *_El anuncio se envío a -${groups.length}- grupos!_*`, m)
}

handler.help = ['bcgc2']
handler.tags = ['owner']
handler.command = /^(bcgc2)$/i

handler.owner = true

export default handler