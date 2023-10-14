const {generateWAMessageFromContent, prepareWAMessageMedia, proto} = (await import('@whiskeysockets/baileys')).default;
import fetch from 'node-fetch';
const {getBinaryNodeChild, getBinaryNodeChildren} = (await import('@whiskeysockets/baileys')).default;
const handler = async (m, {conn, text, participants, args}) => {
  if (!global.db.data.settings[conn.user.jid].restrict) throw '*[ ⚠️ ] 𝙴𝙻 𝙾𝚆𝙽𝙴𝚁 𝚃𝙸𝙴𝙽𝙴 𝚁𝙴𝚂𝚃𝚁𝙸𝙽𝙶𝙸𝙳𝙾 (𝚎𝚗𝚊𝚋𝚕𝚎 𝚛𝚎𝚜𝚝𝚛𝚒𝚌𝚝 / 𝚍𝚒𝚜𝚊𝚋𝚕𝚎 𝚛𝚎𝚜𝚝𝚛𝚒𝚌𝚝) 𝙴𝙻 𝚄𝚂𝙾 𝙳𝙴 𝙴𝚂𝚃𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾*';
  if (!args[0]) throw '*Ingresa el número del usuario 👤 a agregar*';
  try {
    const _participants = participants.map((user) => user.id);
    const users = (await Promise.all(
        text.split(',')
            .map((v) => v.replace(/[^0-9]/g, ''))
            .filter((v) => v.length > 4 && v.length < 20 && !_participants.includes(v + '@s.whatsapp.net'))
            .map(async (v) => [v, await conn.onWhatsApp(v + '@s.whatsapp.net')]))).filter((v) => v[1][0]?.exists).map((v) => v[0] + '@c.us');
    const response = await conn.query({tag: 'iq', attrs: {type: 'set', xmlns: 'w:g2', to: m.chat}, content: users.map((jid) => ({tag: 'add', attrs: {}, content: [{tag: 'participant', attrs: {jid}}]}))});
    const pp = await conn.profilePictureUrl(m.chat).catch((_) => null);
    const jpegThumbnail = pp ? await (await fetch(pp)).buffer() : Buffer.alloc(0);
    const add = getBinaryNodeChild(response, 'add');
    const participant = getBinaryNodeChildren(add, 'participant');
    for (const user of participant.filter((item) => item.attrs.error == 403)) {
      const jid = user.attrs.jid;
      const content = getBinaryNodeChild(user, 'add_request');
      const invite_code = content.attrs.code;
      const invite_code_exp = content.attrs.expiration;
      const teks = `*No fue posible añadir a @${jid.split('@')[0]}, Puede que el número sea incorrecto, tenga limitada su privacidad de grupos o salió recientemente, le he enviado una tarjeta de invitación a su chat privado*`;
      m.reply(teks, null, {mentions: conn.parseMention(teks)});
      const captionn = `Hey!! Hola @${jid.split('@')[0]}, me presento, soy Asmodeus Bot, y soy un Bot para WhatsApp, mi creador utilizó el comando para añadirte al grupo, pero no pude agregarte, asi que te mando la invitacion para que te agregues, te esperamos!!`;
      const messaa = await prepareWAMessageMedia({image: jpegThumbnail}, {upload: conn.waUploadToServer});
      const groupInvite = generateWAMessageFromContent(m.chat, proto.Message.fromObject({groupInviteMessage: {groupJid: m.chat, inviteCode: invite_code, inviteExpiration: invite_code_exp, groupName: await conn.getName(m.chat), caption: captionn, jpegThumbnail: jpegThumbnail}}), {userJid: jid});
      await conn.relayMessage(jid, groupInvite.message, {messageId: groupInvite.key.id});
    }
  } catch {
    throw '*No se ha podido añadir al usuario, puede deberse a diferentes motivos, le recomiendo invitarle manualmente por usted*';
  }
};
handler.help = ['add', '+'].map((v) => v + ' número');
handler.tags = ['group'];
handler.command = /^(add|agregar|añadir|\+)$/i;
handler.rowner = handler.group = handler.botAdmin = true;
export default handler;

