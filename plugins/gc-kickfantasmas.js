import { delay } from '@whiskeysockets/baileys'

let handler = async (m, { conn, text, participants }) => {
    await m.reply('Iniciando la eliminación de fantasmas')
	let member = participants.map(u => u.id)
	let sum = member.length
	var total = 0
	var sider = []
	for (let i = 0; i < sum; i++) {
		let users = m.isGroup ? participants.find(u => u.id == member[i]) : {}
		if ((typeof global.DATABASE.data.users[member[i]] == 'undefined' || global.DATABASE.data.users[member[i]].chat == 0) && !(users.admin == 'admin') && !(users.admin == 'superadmin')) { 
			if (typeof global.DATABASE.data.users[member[i]] !== 'undefined') {
				if (global.DATABASE.data.users[member[i]].whitelist == false) {
					total++
					sider.push(member[i])
				}
			} else {
				total++
				sider.push(member[i])
			}
		}
	}

	if (total == 0) return m.reply('Este grupo no tiene fantasmas') 
	for (let i = 0; i < sum; i++) {
		let users = m.isGroup ? participants.find(u => u.id == member[i]) : {}
		if ((typeof global.DATABASE.data.users[member[i]] == 'undefined' || global.DATABASE.data.users[member[i]].chat == 0) && !(users.admin == 'admin') && !(users.admin == 'superadmin')) { 
			if (typeof global.DATABASE.data.users[member[i]] !== 'undefined') {
				if (global.DATABASE.data.users[member[i]].whitelist == false) {


await delay(10000000)
                    await conn.groupParticipantsUpdate(m.chat, [member[i]], 'remove')
				}
			} else {
await delay(10000) 
                await conn.groupParticipantsUpdate(m.chat, [member[i]], 'remove')
			}
		}
	}
	await m.reply('Se eliminó a todos los fantasmas con éxito')
}

handler.help = ['kicksider', 'kickfantasmas']
handler.tags = ['group']
handler.command = /^(kicksider|kickfantasmas)$/i

handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler