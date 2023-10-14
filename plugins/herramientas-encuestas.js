let handler = async(m, {conn, text, args}) => { 
  let name = await conn.getName(m.sender);
  if (name == 'undefined') name = 'Indefinido';
  const b = text.split('|');
  if (!b[1]) throw `*[❗𝐈𝐍𝐅𝐎❗] ғᴏʀᴍᴀᴛᴏ ᴅᴇ ᴜsᴏ ${usedPrefix + command} Pregunta? |Opcion1|Opcion2...*`;
  if (b[12]) throw `*[❗𝐈𝐍𝐅𝐎❗] ғᴏʀᴍᴀᴛᴏ ᴅᴇ ᴜsᴏ ${usedPrefix + command} Pregunta? |Opcion1|Opcion2...*`;
  const caption = `*ᴇᴄᴜᴇsᴛᴀ ʀᴇᴀʟɪᴢᴀᴅᴀ ᴘᴏʀ:*\n${name}\n*ᴘʀᴇɢᴜɴᴛᴀ:*\n${text.split('|')[0]}`.trim();
  const options = text.split("|").slice(1).map(option => ({ optionName: option.trim() }));  
  const sendPollMessage = {
  const sendPollMessage = {
    messageContextInfo: {
        messageSecret: "bT3tfZngfSMWK2zOEL8pSclPG+xldidYDX+ybB8vdEw=",
    },
    pollCreationMessage: {
        name: text.split("+")[0].trim(),
        options: options,
        selectableOptionsCount: options.length,
    },
};
conn.relayMessage(m.chat, sendPollMessage, { quoted: m });
}
handler.help = ['encuesta question|option|option']
handler.tags = ['group'] 
handler.command = ['poll', 'encuesta'] 
export default handler