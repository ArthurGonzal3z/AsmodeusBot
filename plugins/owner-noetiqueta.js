let handler = async (m, {conn, text}) => {
  let name = await conn.getName(m.sender);
 m.reply(`*Hola ${name} por favor no etiquetes a mi creador, si es algo urgente contacta con el a su chat privado y espera una respuesta pacientemente*`)
}
handler.customPrefix = /@5355495621|4794098204|@16714828922/i;
handler.command = new RegExp();

export default handler;