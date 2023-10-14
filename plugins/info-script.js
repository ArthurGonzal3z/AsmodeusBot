import moment from 'moment-timezone';
import fetch from 'node-fetch';
const handler = async (m, { conn, args }) => {
   const res = await fetch('https://github.com/ArthurGonzal3z/AsmodeusBot/tree/master');
   const text = await res.text();
   let txt = `           *༼ Տ Ꮯ Ꭱ Ꮖ Ꮲ Ͳ    Ꭰ Ꭼ    Ꭺ Տ Ꮇ ϴ Ꭰ Ꭼ Ⴎ Տ ༽*\n\n`;
      txt += `⪧  *Nombre:* ${text?.name || 'Asmodeus Bot 𒀧ٌ︭۪̣︪︩̳̿͟ᝓᝓ̳̳̳̱̲̽ᜓ̵̸꯭̱︭ׅۖۢ͞ ̳̳̳̳̳̳ߺ̳̳̳̳̳̳̳̳̳̳̳̳̳̳̳̳̳̳̳̳̳̳̳̳̳̳̳̳̳̳̳̳̳̳̳̳̳̳̳̳̳̳̳̳̳̳̳̳̿ ̶꛱̄͟🕷️'}\n`;
      txt += `⪧  *Visitantes:* ${text?.watchers_count || '-'}\n`;
      txt += `⪧  *Tamaño:* ${(text?.size / 1024).toFixed(2) || '-'} MB\n`;
      txt += `⪧  *Actualización:* ${moment(text?.updated_at).format('DD/MM/YY - HH:mm:ss') || '-'}\n`;
      txt += `⪧  *Url:* ${text?.html_url || 'https://github.com/ArthurGonzal3z/AsmodeusBohttps://github.com/ArthurGonzal3z/AsmodeusBot/tree/mastert/tree/master'}\n\n`;
      txt += `	 ${text?.forks_count || '-'} Forks · ${text?.stargazers_count || '-'} Stars · ${text?.open_issues_count || '-'} Issues`;
   await conn.sendMessage(m.chat, {text: txt.trim(), mentions: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.script, "containsAutoReply": true, "mediaType": 1, "thumbnail": imagen4, "mediaUrl": `http://wa.me/16714828922`, "sourceUrl": `
http://wa.me/16714828922`}}}, {quoted: m});
};
handler.help = ['scbot'];
handler.tags = ['info'];
handler.command = /^(sc|scbot|scrip|script)$/i;
export default handler;