export function before(m) {
    let user = global.db.data.users[m.sender]
    if (user.afk > -1) {
        m.reply(`
  *╰► Dejaste de estar inactivo* ${user.afkReason ? '╰► Después de estar inactivo por: ' + user.afkReason : ''}
  
  *╰► Tiempo inactivo total:*\n*╰─► ${(new Date - user.afk).toTimeString()}*
  `.trim())
        user.afk = -1
        user.afkReason = ''
    }
    let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    for (let jid of jids) {
        let user = global.db.data.users[jid]
        if (!user)
            continue
        let afkTime = user.afk
        if (!afkTime || afkTime < 0)
            continue
        let reason = user.afkReason || ''
        m.reply(`*El usuario mencionado está inactivo (AFK) Por favor no lo molestes*

*╰► ${reason ? 'Motivo de inactividad: ' + reason : 'Motivo de inactividad: Sin especificar'}*
*╰► Tiempo de inactividad: ${(new Date - afkTime).toTimeString()}*
  `.trim())
    }
    return true
}
