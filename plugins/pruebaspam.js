let handler = async(m, {conn, text, args}) => { 
let txt = text.replace(args[0], "").trim()
conn.reply(args[0], txt, null)
}
handler.command = ["sendmessage"]
export default handler