import axios from 'axios'
import cheerio from 'cheerio'
import { delay } from "@whiskeysockets/baileys"
import fetch from 'node-fetch'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `*Ingresael nombre de un usuario de instagram, ejemplo: ${usedPrefix + command} luisitocomunica*`
let res = await igstalk(args[0].replace(/^@/, ''))
let res2 = await fetch(`https://api.lolhuman.xyz/api/stalkig/${args[0].replace(/^@/, '')}?apikey=${lolkeysapi}`)
let res3 = await res2.json()
let json = JSON.parse(JSON.stringify(res))
const { key } = await conn.sendMessage(m.chat, {text: `┏━━━━━༺᯼༻━━━━━━ 
┃ Iniciando stalkeo a ${json.username} 
┗━━━━━༺᯼༻━━━━━━`}, {quoted: m});
await delay(1000 * 1);
await conn.sendMessage(m.chat, {text: `《 █▒▒▒▒▒▒▒▒▒▒▒》10%`, edit: key});
await delay(1000 * 1);
await conn.sendMessage(m.chat, {text: `《 ████▒▒▒▒▒▒▒▒》30%`, edit: key});
await delay(1000 * 1);
await conn.sendMessage(m.chat, {text: `《 ███████▒▒▒▒▒》50%`, edit: key});
await delay(1000 * 1);
await conn.sendMessage(m.chat, {text: `《 ██████████▒▒》80%`, edit: key});
 await delay(1000 * 1);
await conn.sendMessage(m.chat, {text: `《 ████████████》100%`, edit: key});
await delay(1000 * 1);
await conn.sendMessage(m.chat, {text: `┏━━━━━༺᯼༻━━━━━━
┃ ×Stalkeo Finalizado×
┗━━━━━༺᯼༻━━━━━━`, edit: key});
let iggs = `
╰► *Username:* ${json.username}
╰► *Nickname:* ${json.fullname}
╰► *Followers:* ${json.followers}
╰► *Following:* ${json.following}
╰► *Posting:* ${json.post}
╰► *Link:* https://instagram.com/${json.username.replace(/^@/, '')}
╰► *Bio:* ${json.bio}`.trim() 
let aa = `${res3.result.photo_profile || res.profile}`
await conn.sendFile(m.chat, aa, 'error.jpg', iggs, m)}
handler.help = ['igstalk <username>']
handler.tags = ['internet']
handler.command = /^(igstalk)$/i
export default handler

async function igstalk(Username) {
return new Promise((resolve, reject) => {
axios.get('https://dumpor.com/v/'+Username, {
headers: { "cookie": "_inst_key=SFMyNTY.g3QAAAABbQAAAAtfY3NyZl90b2tlbm0AAAAYWGhnNS1uWVNLUU81V1lzQ01MTVY2R0h1.fI2xB2dYYxmWqn7kyCKIn1baWw3b-f7QvGDfDK2WXr8", "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36" }}).then(res => {
const $ = cheerio.load(res.data)
const result = {
profile: $('#user-page > div.user > div.row > div > div.user__img').attr('style').replace(/(background-image: url\(\'|\'\);)/gi, ''),
fullname: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > a > h1').text(),
username: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > h4').text(),
post: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(1)').text().replace(' Posts',''),
followers: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(2)').text().replace(' Followers',''),
following: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(3)').text().replace(' Following',''),
bio: $('#user-page > div.user > div > div.col-md-5.my-3 > div').text()}
resolve(result)})})}