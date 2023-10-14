import fg from 'api-dylux' 
import axios from 'axios'
import cheerio from 'cheerio'
import { tiktok } from "@xct007/frieren-scraper";
import { generateWAMessageFromContent } from '@whiskeysockets/baileys'
import { tiktokdl } from '@bochilteam/scraper'
let handler = async (m, { conn, text, args, usedPrefix, command}) => {
if (!text) throw `*Ingresa un enlace de tiktok válido, ejemplo:*\n*${usedPrefix + command}* https://vm.tiktok.com/ZMYWFhKt2/`
if (!/(?:https:?\/{2})?(?:w{3}|vm|vt|t)?\.?tiktok.com\/([^\s&]+)/gi.test(text)) throw `*Enlace incorrecto, verifique que sea uno correcto, ejemplo:*\n*${usedPrefix + command}* https://vm.tiktok.com/ZMFb4BXVd/`
let texto = `*@${m.sender.split`@`[0]} Espera en lo que envió su video*`
//let buttons = [{ buttonText: { displayText: '♫ 𝙰𝚄𝙳𝙸𝙾 ♫' }, buttonId: `${usedPrefix}tomp3` }]
try {
let aa = { quoted: m, userJid: conn.user.jid }
let prep = generateWAMessageFromContent(m.chat, { extendedTextMessage: { text: texto, contextInfo: { externalAdReply: { title: 'Asmodeus Bot', body: null, thumbnail: imagen1, sourceUrl: 'https://github.com/ARTHURillo' }, mentionedJid: [m.sender]}}}, aa)    
await conn.relayMessage(m.chat, prep.message, { messageId: prep.key.id, mentions: [m.sender] })    
const dataF = await tiktok.v1(args[0])
//let desc1 =  `*𝙽𝙸𝙲𝙺𝙽𝙰𝙼𝙴:* ${dataF.nickname || 'Indefinido'}`
let desc1 =  `*Aquí tienes tu video*`
await conn.sendMessage(m.chat, { video: { url: dataF.play }, caption: desc1 }, { quoted: m })  
} catch (e1) {
try {
const tTiktok = await tiktokdlF(args[0])
//let desc2 = `🔗 *Url:* ${tTiktok.video}`    
let desc2 =  `*Aquí tienes tu video*`
await conn.sendMessage(m.chat, { video: { url: tTiktok.video }, caption: desc2 }, { quoted: m })      
} catch (e2) {
try {
let p = await fg.tiktok(args[0]) 
//let te = `*𝚄𝚂𝙴𝚁𝙽𝙰𝙼𝙴:* ${p.author || 'Indefinido'}`
let te =  `*Aquí tienes tu video.*`
await conn.sendMessage(m.chat, { video: { url: p.nowm}, caption: te }, { quoted: m })  
} catch (e3) {
try { 
const { author: { nickname }, video, description } = await tiktokdl(args[0])
const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd
//let cap = `*𝙽𝙸𝙲𝙺𝙽𝙰𝙼𝙴:* ${nickname || 'Indefinido'}`
let cap =  `*Aquí tienes tu video*`
await conn.sendMessage(m.chat, { video: { url: url}, caption: cap }, { quoted: m })  
} catch {
throw `*Ocurrió un error, vuelva a intentarlo*`
}}}}}
handler.command = /^(tiktok|ttdl|tiktokdl|tiktoknowm|tt|ttnowm|tiktokaudio)$/i
export default handler

async function tiktokdlF(url) {
if (!/tiktok/.test(url)) return 'Enlace incorrecto';
const gettoken = await axios.get("https://tikdown.org/id");
const $ = cheerio.load(gettoken.data);
const token = $("#download-form > input[type=hidden]:nth-child(2)").attr( "value" );
const param = { url: url, _token: token };
const { data } = await axios.request("https://tikdown.org/getAjax?", { method: "post", data: new URLSearchParams(Object.entries(param)), headers: { "content-type": "application/x-www-form-urlencoded; charset=UTF-8", "user-agent": "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36" }, });
var getdata = cheerio.load(data.html);
if (data.status) {
return { status: true, thumbnail: getdata("img").attr("src"), video: getdata("div.download-links > div:nth-child(1) > a").attr("href"), audio: getdata("div.download-links > div:nth-child(2) > a").attr("href"), }} else
return { status: false }}