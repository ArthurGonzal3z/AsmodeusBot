import snapsave from "snapsave-downloader2"
import fetch from 'node-fetch'
import axios from 'axios'
import cheerio from 'cheerio'
import instagramGetUrl from 'instagram-url-direct'
import vm from 'node:vm'
import { instagram } from "@xct007/frieren-scraper";
import { instagramdl } from '@bochilteam/scraper'

let handler = async (m, { conn, args, command, usedPrefix }) => {
if (!args[0]) throw `Ingrese un link de Instagram, ejemplo:\n*${usedPrefix + command} https://www.instagram.com/reel/Cc0NuYBg8CR/?utm_source=ig_web_copy_link*` 
await conn.reply(m.chat, wait, m)
let shortUrRRl = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text()    
let txt = `┏━━━━━༺᯼༻━━━━━━\n┃ ᚛ Enlace: ${shortUrRRl}\n┗━━━━━༺᯼༻━━━━━━`.trim()
try {
let res = await snapsave(args[0])  
conn.sendFile(m.chat, res.data[0].url, 'error.mp4', txt, m)  
} catch {
try {
const datTa = await instagram.v1(args[0])
if (datTa.error) return XD
for (let urRRl of datTa) {   
conn.sendFile(m.chat, urRRl.url, 'error.mp4', txt, m)    
await new Promise(resolve => setTimeout(resolve, 10000))}
} catch {  
try {  
const AA = await savefrom(args[0])    
await conn.sendFile(m.chat, AA.url[0].url, 'error.mp4', txt, m)
} catch {
console.log('Error en el intento 1')  
try {    
const resultss = await instagramGetUrl(args[0]).url_list[0]    
await conn.sendFile(m.chat, resultss, 'error.mp4', txt, m)
} catch {  
console.log('Error en el intento 2')  
try {
const resultssss = await instagramdl(args[0])
for (const { url } of resultssss) await conn.sendFile(m.chat, url, 'error.mp4', txt, m)
} catch {
console.log('Error en el intento 3')  
try {   
let human = await fetch(`https://api.lolhuman.xyz/api/instagram?apikey=${lolkeysapi}&url=${args[0]}`)
let json = await human.json()
let videoig = json.result[0]
await conn.sendFile(m.chat, videoig, 'error.mp4', txt, m)     
} catch { 
console.log('Error en el intento 4, sin resultados')  
throw 'Error al obtener los resultados, link inválido'
}}}}}}}
handler.command = /^(instagramdl|instagram|igdl|ig)$/i
export default handler
async function savefrom(urlL) {
let body = new URLSearchParams({ "sf_url": encodeURI(urlL), "sf_submit": "", "new": 2, "lang": "id", "app": "", "country": "id", "os": "Windows", "browser": "Chrome", "channel": " main", "sf-nomad": 1 });
let { data } = await axios({ "url": "https://worker.sf-tools.com/savefrom.php", "method": "POST", "data": body, "headers": { "content-type": "application/x-www-form-urlencoded", "origin": "https://id.savefrom.net", "referer": "https://id.savefrom.net/", "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36" }});
let exec = '[]["filter"]["constructor"](b).call(a);';
data = data.replace(exec, `\ntry {\ni++;\nif (i === 2) scriptResult = ${exec.split(".call")[0]}.toString();\nelse (\n${exec.replace(/;/, "")}\n);\n} catch {}`);
let context = { "scriptResult": "", "i": 0 };
vm.createContext(context);
new vm.Script(data).runInContext(context);
return JSON.parse(context.scriptResult.split("window.parent.sf.videoResult.show(")?.[1].split(");")?.[0])
}