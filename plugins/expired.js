export async function all(m) {
    if (!m.isGroup)
        return
    let chats = global.db.data.chats[m.chat]
    if (!chats.expired)
        return !0
    if (+new Date() > chats.expired) {
        await this.reply(m.chat, `Bueno chicos, ha finalizado el tiempo de *${this.user.name}* en este grupo, me despido :3`)
        await this.groupLeave(m.chat)
        chats.expired = null
    }
}