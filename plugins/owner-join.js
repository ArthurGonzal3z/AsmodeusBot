let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i;

let handler = async (m, {conn, text, isMods, isOwner, isPrems}) => {
  let link = (m.quoted ? (m.quoted.text ? m.quoted.text : text) : text) || text;
  let [_, code] = link.match(linkRegex) || [];

  if (!code)
    throw "*Link erróneo o faltante, corrobore de usar el comando mas el enlace de su grupo correctamente, ejemplo:*\n\n*#join https://chat.whatsapp.com/LXKKwH72qJ3Jxr7lJPYv8x*\n\n*No responda a ningún mensaje para no causar problemas con el comando*";

  if (isPrems || isMods || isOwner || m.fromMe) {
    let res = await conn.groupAcceptInvite(code);
    await m.reply(`*El bot se ha unido al grupo*`);
  } else {
    const data = global.owner.filter(([id]) => id);

    for (let jid of data.map(([id]) => [id] + "@s.whatsapp.net").filter((v) => v != conn.user.jid))
      await m.reply(
        "*╰►Nueva solicitud del bot para unirse a un grupo*\n\n*╰► Número del solicitante:* " +
          "wa.me/" +
          m.sender.split("@")[0] +
          "\n*╰► Link del grupo:* " +
          link,
        jid
      );

    await m.reply(
      "*El link de su grupo ha sido enviado a mi propietario para una evaluación*\n*Tenga en cuenta que su solicitud puede ser rechazada por algunas razones como:*\n*1.╰► El bot está saturado o ya se encuentra en demasiados grupos*\n*2.╰► El bot ha sido previamente eliminado de dicho grupo (En caso de ser así no volverá)*\n*3.╰► El link es incorrecto*\n*4.╰► El bot no será añadido a mas grupos por decisión del propietario*\n\n*Su solicitud puede ser tardada en ser respondida, por favor tenga paciencia*\n\n*NOTA:*\n*Si desea añadir al bot a su grupo temporalmente use el comando:*\n.addbot\n*Dicho comando tendrá un costo en tokens y la unión del bot será temporal y el tiempo dentro del grupo dependerá de la cantidad de tokens invertidos*"
    );
  }
};

handler.help = ["join [chat.whatsapp.com]"];
handler.tags = ["premium"];
// handler.premium = true
handler.command = /^join|nuevogrupo$/i;
export default handler;