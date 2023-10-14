import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 
global.owner = [
    ['16714828922' , 'Asmodeus creador 2' , true], 
  ['994403115531' , 'Asmodeus creador' , true], 
   
  ['4794098204' , 'Asmodeus creador 4' , true], 
    ['5355495621'], 
    ['4520509766']
] 

global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api-fgmods.ddns.net': 'TU-APIKEY' //Regístrese en https://api-fgmods.ddns.net/
}


global.suittag = ['16714828922'] 
global.prems = ['687857524'] 
global.reportes_solicitudes = ['16714828922']
global.wm = '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t𝐴𝑠𝑚𝑜𝑑𝑒𝑢𝑠 𝐵𝑜𝑡\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t𝙱𝚎𝚜𝚝 𝚆𝚑𝚊𝚝𝚜𝙰𝚙𝚙 𝙱𝚘𝚝'
global.igfg = '𝐴𝑠𝑚𝑜𝑑𝑒𝑢𝑠 𝐵𝑜𝑡'
global.wait = '*Cargando ▭▬▬▬*'
global.script = `𒈒 𝑨 𝑺 𝑴 𝑶 𝑫 𝑬 𝑼 𝑺   𝑩 𝑶 𝑻 彡\n𝘱𝘳𝘦𝘴𝘪𝘰𝘯𝘢 𝘢𝘲𝘶𝘪 𝘱𝘢𝘳𝘢 𝘩𝘢𝘣𝘭𝘢𝘳 𝘤𝘰𝘯 𝘮𝘪 𝘤𝘳𝘦𝘢𝘥𝘰𝘳`
global.linkgc2 = `𒈒 𝑨 𝑺 𝑴 𝑶 𝑫 𝑬 𝑼 𝑺   𝑩 𝑶 𝑻 彡\n𝘜𝘕𝘌𝘛𝘌 𝘈 𝘔𝘐 𝘎𝘙𝘜𝘗𝘖 𝘖𝘍𝘐𝘊𝘐𝘈𝘓 𝘛𝘖𝘊𝘈𝘕𝘋𝘖 𝘈𝘘𝘜𝘐`
global.linkgc = ` .. ⃟ᬼ⃟𝗕꯭፝⁞𝝞⁞𝝚꯭፝⁞𝝢⁞፝𝐕꯭⁞𝞝፝⁞𝝢꯭⁞፝𝝞⁞𝗗꯭፝⁞𝝝꯭፝⁞𝐒⃟ᬼ⃟ .
⋆ ˚｡⋆୨୧˚︶꒦꒷🫧꒦︶˚୨୧⋆｡˚ ⋆

ꪶᳱꫂ┊꞉ᴰᶦᶳ𝖋ᣴᵘᵗᵃ ᴰᵉ ᵘᵑᵃ ᴱˣᵖᵉᣴ𝖏ᵉᶮᶜᶦᵃ ɪᶰᶜᣴᵉⁱᵇᶫᵉ ᶜᵒᶮ ꭟᶯᶱ ᴰᵉ ᶫᵒᔆ ᶬ𝔢ᶨᵒᣴᵉᔆ ᴮᶱᵗ ᵈ𝐞 ᵂʱᵃᵗᔆᴬᵖᵖ.
ꪶ❍ꫂ┊꞉ᴬɋᵘᶤ ᴾᶱᵈᣴᵃᔆ ᶜᣴᵉᴬᣴ ᵗᵘᔆ ᵴᵗᶦᶜᵏᵉʳᔆ 𝔂  ᴰᵉˢᶜᴬᣴᶢᵃʳ ᵘᶯᵃ ᶢʳᴬᶮ ᵛᵃʳⁱᵉᵈᵃᵈ ᴰɛ ᶜᵒᶯʇᵉᶰᶦᵈᶱᶳ.
ꪶᳱꫂ┊꞉ᴳʳꭟᵖᵒ ᶜᶱᵐᵖᶫᵉᵗᴬᵐᵉᶮᵗᵉ ᔆᵃᶯᶱ 𝐲 ᴰᶦᵛᵉʳˢᵒ ᴘᵃʳᴬ ᵗᵒᵈᵒˢ ᶫᶱᔆ ᶢᶸˢᵗᵒᶳ.
ꪶ❍ꫂ┊꞉Șᶒ ᴿᵉᔆᵖᵒᶮᶳᵃᵇᶫᵉ 𝓎 ᴬᶜᵗᶦᵛᶱ, ᵉᶳᵒ ᵗᵉ ᵈᵃᣴᴬ ᵐᶸᶜʱᵃˢ ᴿᵉᶜᵒᵐᵖᵉᶯᶳᵃˢ ᵉᴺ ᵉᶫ ᶠᶸᵗᶸʳᵒ.
ꪶᳱꫂ┊꞉ᴾʳᶱʱᶦᵇᶦᵈᵒ ᵉᶫ ˢᵖᵃᵐ ᵈᵉ 𐔖ᵗʳᵒᔆ ᶢʳᶸᵖᶱˢ, ᶢᵒʳᵉ(𝐟𝐨𝐭⃬𝐨 𝐯𝐢⃬𝐝𝐞𝐨) ᶠᵃᶮᵗᵃˢᵐᵃᶳ, 𝐁⃬𝐀𝐍!
ꪶ❍ꫂ┊꞉ᴰᶦˢᶠʳᵘᵗᴬ ƴ ᵉˢᵖᵉʳᴬᵐᶱˢ ɋᵘᵉ ᵀᵉᶯᶢᵃᣵ ᶸᶮ ᵇᵘᵉᶰ ᵈᶦᵃ.

╭╼︩︪︣︢۰─⃫═⃫─╾۰❲𝖑𝖎𝖓︪︩𝖐𝖘❳۰╼─⃫═⃫─۰︪︩︣︢╾╮
https://chat.whatsapp.com/J8ugOEnwmrCIKxPadExhhu
╰╼︪︩︣︢۰─⃫═⃫─╾۰❲𝖑𝖎𝖓︩︪𝖐𝖘❳۰╼─⃫═⃫─۰︩︪︣︢╾╯ `
global.imagen1 = fs.readFileSync('./Menu2.jpg')
global.imagen2 = fs.readFileSync('./src/nuevobot.jpg') 
global.imagen3 = fs.readFileSync('./src/Pre Bot Publi.png')
global.imagen4 = fs.readFileSync('./Menu.png')
global.imagen5 = fs.readFileSync('./src/+18.jpg')
global.imagen6 = fs.readFileSync('./src/demon-devil.gift')
global.imagen7 = fs.readFileSync('./src/Menu-principal.mp4')
global.imagen8 = fs.readFileSync('./src/7s-clan')
global.nn = 'https://chat.whatsapp.com/J8ugOEnwmrCIKxPadExhhu' 
global.mods = [] 
global.lolkeysapi = ['ApiLolhuman[pickRandom(lolkeys)']

global.flaaa = [
  "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=",

  "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=",

  "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=",

  "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=",

  "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=",
];
//********Tiempo***************
global.d = new Date(new Date + 3600000)
global.locale = 'es'
global.dia = d.toLocaleDateString(locale, { weekday: 'long' })
global.fecha = d.toLocaleDateString('es', { day: 'numeric', month: 'numeric', year: 'numeric' })
global.mes = d.toLocaleDateString('es', { month: 'long' })
global.año = d.toLocaleDateString('es', { year: 'numeric' })
global.tiempo = d.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })
//****************************
global.img = 'https://tinyurl.com/2dgppss3.jpg'
global.img2 = 'https://tinyurl.com/27jqx2e6.jpg'

global.img3 = 'https://tinyurl.com/23jcbhue.jpg' //prem
global.img4 = 'https://tinyurl.com/23z2xqqv.jpg' //prem

global.img5 = 'https://tinyurl.com/29nok9ba.jpeg'
global.img6 = 'https://tinyurl.com/227vqnqn.jpeg'
global.img7 = 'https://tinyurl.com/233rvq4c.jpeg'
global.img8 = 'https://tinyurl.com/2annkxr3.jpeg'
global.img9 = 'https://tinyurl.com/226lfwn7.jpeg'

global.img10 = 'https://i.imgur.com/DvHoMc3.jpg'
global.img11 = 'https://i.imgur.com/5Q1MqGD.jpg'
global.img12 = 'https://i.imgur.com/vWnsjh8.jpg'
global.img13 = 'https://i.imgur.com/pCfFOgw.jpeg'
global.img14 = 'https://i.imgur.com/knBDWRA.jpeg'
global.img15 = 'https://i.imgur.com/QrkkKx7.jpeg'

global.img16 = 'https://i.imgur.com/11MRjo4.jpeg' //+18

global.img17 = 'https://i.imgur.com/JpYfcH0.jpeg'
global.img18 = 'https://i.imgur.com/9yLH4W4.jpeg'


global.nna = 'https://chat.whatsapp.com/J8ugOEnwmrCIKxPadExhhu' //UPDATE GATABOT
global.nna2 = 'https://chat.whatsapp.com/J8ugOEnwmrCIKxPadExhhu' //Help
global.nn = 'https://chat.whatsapp.com/J8ugOEnwmrCIKxPadExhhu' //Grupo 1
global.nnn = 'https://chat.whatsapp.com/J8ugOEnwmrCIKxPadExhhu' //Grupo 2
global.nnnt = 'https://chat.whatsapp.com/J8ugOEnwmrCIKxPadExhhu' //Grupo 3
global.nnntt = 'https://chat.whatsapp.com/J8ugOEnwmrCIKxPadExhhu' //Grupo 4
global.nnnttt = 'https://chat.whatsapp.com/J8ugOEnwmrCIKxPadExhhu' //Grupo 5
global.nnnttt1 = 'https://chat.whatsapp.com/J8ugOEnwmrCIKxPadExhhu' //Grupo 6 COL
global.nnnttt2 = 'https://chat.whatsapp.com/J8ugOEnwmrCIKxPadExhhu' //Grupo 7 COL
global.nnnttt3 = 'https://chat.whatsapp.com/J8ugOEnwmrCIKxPadExhhu' //Grupo 8 COL
global.nnnttt4 = 'https://chat.whatsapp.com/J8ugOEnwmrCIKxPadExhhu' //Grupo 9 COL

global.ag = 'Advertencia' 
global.fg = 'fallo' 
global.md = 'https://chat.whatsapp.com/FQ4ObzN1Cl14KGwI2gxelS' 
global.mg = "𝘜𝘚𝘖 𝘐𝘕𝘊𝘖𝘙𝘙𝘌𝘛𝘖\n";
global.wm2 = `▸ ${dia} ${fecha}\n𝖆𝖘𝖒𝖔𝖉𝖊𝖚𝖘 𝖇𝖔𝖙`
global.packname = `♾ ━━━━━━━━\n├ ɓσƭ:\n├ ρяοριєταяιο:\n├ ƒєϲнα ∂є ϲяєαϲιόи:\n├ нοяα:\n♾━━━━━━━━`
global.author = `♾━━━━━━━━\n⇝ 𝖆𝖘𝖒𝖔𝖉𝖊𝖚𝖘 𝖇𝖔𝖙\n⇝ αяτнυя gοиzάℓєz\n⇝ ${moment.tz('America/Los_Angeles').format('DD/MM/YY')}\n⇝ ${moment.tz('America/Los_Angeles').format('HH:mm:ss')} \n♾━━━━━━━━\n\n\n\n\n\nѕτιϲκєя ϐγ:\n𝖆𝖘𝖒𝖔𝖉𝖊𝖚𝖘 𝖇𝖔𝖙\nᵇᵉˢᵗ ᵇᵒᵗ ᵒᶠ ʷʰᵃᵗˢᵃᵖᵖ`
global.yt = "http://youtube.com/@diegogameplays82";
global.youtube = yt;
global.gt = '𝐴𝑠𝑚𝑜𝑑𝑒𝑢𝑠 𝐵𝑜𝑡'
global.mysticbot = '𝐴𝑠𝑚𝑜𝑑𝑒𝑢𝑠 𝐵𝑜𝑡'
global.mysticbot = 'https://github.com/Arthurillo'
global.waitt = '*Cargando ▭▬▬▬*'
global.waittt = '*Cargando ▭▬▬▬*'
global.waitttt = '*Cargando ▭▬▬▬*'
global.nomorown = '16714828922'
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf']
global.cmenut = '❖––––––『'
global.cmenub = '┊✦ '
global.cmenuf = '╰━═┅═━––––––๑\n'
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     '
global.dmenut = '*❖─┅──┅〈*'
global.dmenub = '*┊»*'
global.dmenub2 = '*┊*'
global.dmenuf = '*╰┅────────┅✦*'
global.htjava = '⫹⫺'
global.htki = '*⭑•̩̩͙⊱•••• ☪*'
global.htka = '*☪ ••••̩̩͙⊰•⭑*'
global.comienzo = '• • ◕◕════'
global.fin = '════◕◕ • •'
global.botdate = `⫹⫺ Date :  ${moment.tz('America/Los_Angeles').format('DD/MM/YY')}` //Asia/Jakarta
global.bottime = `𝗧 𝗜 𝗠 𝗘 : ${moment.tz('America/Los_Angeles').format('HH:mm:ss')}`//America/Los_Angeles
global.fgif = {key: { participant : '0@s.whatsapp.net'}, message: { "videoMessage": { "title": wm, "h": `Hmm`, 'seconds': '999999999',  'gifPlayback': 'true',  'caption': bottime, 'jpegThumbnail': fs.readFileSync('./Menu.png')}}}
global.multiplier = 99
//*************************

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
unwatchFile(file)
console.log(chalk.redBright("Update 'config.js'"))
import(`${file}?update=${Date.now()}`)})
