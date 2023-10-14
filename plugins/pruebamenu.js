import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
try {
let pp = imagen4
//let vn = './media/menu.mp3'
let img = await(await fetch('https://i.imgur.com/JP52fdP.jpg')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'es'
//let txt = `@${owner[0][0]}`
//conn.reply(m.chat, txt, m, {mentions: [conn.parseMention(txt.trim())]})
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
await conn.sendMessage(m.chat, { react: { text: "☕", key: m.key } })
m.reply('*Cargando Menu Completo, espera un momento*\n▭▬▬▬') 
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let str = `➛\t\t*Bienvenido, ${taguser}*
᚛\t\t*Bienvenido al menu completo*
\t\t\t\t*de   ${wm}*
᚛\t\t\t*Propietario ⃝: @${owner[0][0]}*
᚛\t\t\t*Numero ⃝Secundario:* wa.me/994403115532
᚛\t\t\t*Bot ⃝ofc:* wa.me/590690455341   
᚛\t\t\t*Fecha ⃝:* ${date}
᚛\t\t\t*Tiempo ⃝activo:* ${uptime}
᚛\t\t\t*Usuarios ⃝Registrados:* ${rtotalreg}
ᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚ
᚛\t\t\t*Información ⃝de ${taguser}:*
᚛\t\t\t*⪧ Nivel:* ${level}
᚛\t\t\t*⪧ Experiencia:* ${exp}
᚛\t\t\t*⪧ Rango:* ${role}
᚛\t\t\t*⪧ Diamantes:* ${limit}
᚛\t\t\t*⪧ MysticCoins:* ${money}
᚛\t\t\t*⪧ Tokens:* ${joincount}
᚛\t\t\t*⪧ Premium:* ${user.premiumTime > 0 ? '✅' : (isPrems ? '✅' : '❌') || ''}
${readMore}
ᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚ
᚛\t\t\t*Bot OFC y Sub Bots*
${(conn.user.jid == global.conn.user.jid ? '' : `Jadibot de: https://wa.me/${global.conn.user.jid.split`@`[0]}`) || '*Este es el Bot oficial*'}
ᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚ
᚛\t\t\t*Información del Bot:*
*⃝𓍕 _${usedPrefix}terminosycondiciones_*
*⃝𓍕 _${usedPrefix}grupos_*
*⃝𓍕 _${usedPrefix}infobot_*
*⃝𓍕 _${usedPrefix}speedtest_*
*⃝𓍕 _${usedPrefix}donar_*
*⃝𓍕 _${usedPrefix}grouplist_*
*⃝𓍕 _${usedPrefix}owner_*
*⃝𓍕 _${usedPrefix}script_*
*⃝𓍕 _${usedPrefix}listprem_*
*⃝𓍕 _Bot_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)*
ᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚ
\t\t\t*Une al bot a tu grupo*
*⃝𓍕 _${usedPrefix}join <enlace / link / url>_*
*⃝𓍕 _${usedPrefix}addbot_*
ᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚ
\t\t\t*Serbot>*
*⃝𓍕 _${usedPrefix}serbot_*
*⃝𓍕 _${usedPrefix}stop_*
*⃝𓍕 _${usedPrefix}bots_*
ᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚ
᚛\t\t\t*Juegos*
*⃝𓍕 _${usedPrefix}mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
*⃝𓍕 _${usedPrefix}ppt <papel / tijera /piedra>_*
*⃝𓍕 _${usedPrefix}prostituto *<nombre / @tag>*_*
*⃝𓍕 _${usedPrefix}prostituta *<nombre / @tag>*_
*⃝𓍕 _${usedPrefix}gay2 <nombre / @tag>_*
*⃝𓍕 _${usedPrefix}lesbiana <nombre / @tag>_*
*⃝𓍕 _${usedPrefix}pajero <nombre / @tag>_*
*⃝𓍕 _${usedPrefix}pajera <nombre / @tag>_*
*⃝𓍕 _${usedPrefix}puto <nombre / @tag>_*
*⃝𓍕 _${usedPrefix}puta <nombre / @tag>_*
*⃝𓍕 _${usedPrefix}manco <nombre / @tag>_*
*⃝𓍕 _${usedPrefix}manca <nombre / @tag>_*
*⃝𓍕 _${usedPrefix}rata <nombre / @tag>_*
*⃝𓍕 _${usedPrefix}love <nombre / @tag>_*
*⃝𓍕 _${usedPrefix}doxear <nombre / @tag>_*
*⃝𓍕 _${usedPrefix}pregunta *<texto>_*
*⃝𓍕 _${usedPrefix}suitpvp <@tag>_*
*⃝𓍕 _${usedPrefix}slot <apuesta>_*
*⃝𓍕 _${usedPrefix}ttt <nombre sala>_*
*⃝𓍕 _${usedPrefix}delttt_*
*⃝𓍕 _${usedPrefix}dar_*
*⃝𓍕 _${usedPrefix}acertijo_*
*⃝𓍕 _${usedPrefix}simi <texto>_*
*⃝𓍕 _${usedPrefix}top <texto>_*
*⃝𓍕 _${usedPrefix}topgays_*
*⃝𓍕 _${usedPrefix}topotakus_*
*⃝𓍕 _${usedPrefix}formarpareja_*
*⃝𓍕 _${usedPrefix}verdad_*
*⃝𓍕 _${usedPrefix}reto_*
*⃝𓍕 _${usedPrefix}cancion_*
*⃝𓍕 _${usedPrefix}pista_*
*⃝𓍕 _${usedPrefix}akinator_*
*⃝𓍕 _${usedPrefix}wordfind_*
ᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚ
᚛\t\t\t*Enable/Disable*
*⃝𓍕 _${usedPrefix}enable welcome_*
*⃝𓍕 _${usedPrefix}disable welcome_*
*⃝𓍕 _${usedPrefix}enable modohorny_*
*⃝𓍕 _${usedPrefix}disable modohorny_*
*⃝𓍕 _${usedPrefix}enable antilink_*
*⃝𓍕 _${usedPrefix}disable antilink_*
*⃝𓍕 _${usedPrefix}enable antilink2_*
*⃝𓍕 _${usedPrefix}disable antilink2_*
*⃝𓍕 _${usedPrefix}enable detect_*
*⃝𓍕 _${usedPrefix}disable detect_*
*⃝𓍕 _${usedPrefix}enable audios_*
*⃝𓍕 _${usedPrefix}disable audios_*
*⃝𓍕 _${usedPrefix}enable autosticker_*
*⃝𓍕 _${usedPrefix}disable autosticker_*
*⃝𓍕 _${usedPrefix}enable antiviewonce_*
*⃝𓍕 _${usedPrefix}disable antiviewonce_*
*⃝𓍕 _${usedPrefix}enable antitoxic_*
*⃝𓍕 _${usedPrefix}disable antitoxic_*
*⃝𓍕 _${usedPrefix}enable antitraba_*
*⃝𓍕 _${usedPrefix}disable antitraba_*
*⃝𓍕 _${usedPrefix}enable antiarabes_*
*⃝𓍕 _${usedPrefix}disable antiarabes_*
*⃝𓍕 _${usedPrefix}enable modoadmin_*
*⃝𓍕 _${usedPrefix}disable modoadmin_*
ᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚ
\t\t\t*Reportes*
*⃝𓍕 _${usedPrefix}reporte *<texto>*_
ᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚ
᚛\t\t\t*Descargas*
*⃝𓍕 _${usedPrefix}instagram <enlace / link / url>_*
*⃝𓍕 _${usedPrefix}mediafire <enlace / link / url>_*
*⃝𓍕 _${usedPrefix}gitclone <enlace / link / url>_*
*⃝𓍕 _${usedPrefix}gdrive <enlace / link / url>_*
*⃝𓍕 _${usedPrefix}tiktok <enlace / link / url>_*
*⃝𓍕 _${usedPrefix}xnxxdl <enlace / link / url>_*
*⃝𓍕 _${usedPrefix}xvideosdl <enlace / link / url>_*
*⃝𓍕 _${usedPrefix}twitter <enlace / link / url>_*
*⃝𓍕 _${usedPrefix}fb <enlace / link / url>_*
*⃝𓍕 _${usedPrefix}ytmp3 <enlace / link / url>_*
*⃝𓍕 _${usedPrefix}ytmp4 <enlace / link / url>_*
*⃝𓍕 _${usedPrefix}ytmp3doc <enlace / link / url>_*
*⃝𓍕 _${usedPrefix}ytmp4doc <enlace / link / url>_*
*⃝𓍕 _${usedPrefix}videodoc <enlace / link / url>_*
*⃝𓍕 _${usedPrefix}dapk2 <enlace / link / url>_*
*⃝𓍕 _${usedPrefix}stickerpack <enlace / link / url>_*
*⃝𓍕 _${usedPrefix}play <texto>_*
*⃝𓍕 _${usedPrefix}pla3 <texto>_*
*⃝𓍕 _${usedPrefix}play.1 <texto>_*
*⃝𓍕 _${usedPrefix}play.2 <texto>_*
*⃝𓍕 _${usedPrefix}playdoc <texto>_*
*⃝𓍕 _${usedPrefix}playlist <texto>_*
*⃝𓍕 _${usedPrefix}playlist2 <texto>_*
*⃝𓍕 _${usedPrefix}spotify <texto>_*
*⃝𓍕 _${usedPrefix}ringtone <texto>_*
*⃝𓍕 _${usedPrefix}soundcloud <texto>_*
*⃝𓍕 _${usedPrefix}imagen <texto>_*
*⃝𓍕 _${usedPrefix}pinterest <texto>_*
*⃝𓍕 _${usedPrefix}wallpaper <texto>_*
*⃝𓍕 _${usedPrefix}wallpaper2 <texto>_*
*⃝𓍕 _${usedPrefix}pptiktok <nombre de usuario>_*
*⃝𓍕 _${usedPrefix}igstalk <nombre de usuario>_*
*⃝𓍕 _${usedPrefix}igstory <nombre de usuario>_*
*⃝𓍕 _${usedPrefix}tiktokstalk <username>_*
ᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚ
᚛\t\t\t*Grupos* 
*⃝𓍕 _${usedPrefix}add <numero>_*
*⃝𓍕 _${usedPrefix}kick <@tag>_*
*⃝𓍕 _${usedPrefix}kick2 <@tag>_*
*⃝𓍕 _${usedPrefix}listanum <texto>_*
*⃝𓍕 _${usedPrefix}kicknum <texto>_*
*⃝𓍕 _${usedPrefix}grupo <abrir / cerrar>_*
*⃝𓍕 _${usedPrefix}grouptime <opcion> <tiempo>_*
*⃝𓍕 _${usedPrefix}promote <@tag>_*
*⃝𓍕 _${usedPrefix}demote <@tag>_*
*⃝𓍕 _admins <texto>_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)*
*⃝𓍕 _${usedPrefix}demote <@tag>_*
*⃝𓍕 _${usedPrefix}infogroup_*
*⃝𓍕 _${usedPrefix}resetlink_*
*⃝𓍕 _${usedPrefix}link_*
*⃝𓍕 _${usedPrefix}setname <texto>_*
*⃝𓍕 _${usedPrefix}setdesc <texto>_*
*⃝𓍕 _${usedPrefix}invocar <texto>_*
*⃝𓍕 _${usedPrefix}setwelcome <texto>_*
*⃝𓍕 _${usedPrefix}setbye <texto>_*
*⃝𓍕 _${usedPrefix}hidetag <texto>_*
*⃝𓍕 _${usedPrefix}hidetag <audio>_*
*⃝𓍕 _${usedPrefix}hidetag <video>_*
*⃝𓍕 _${usedPrefix}hidetag <imagen>_*
*⃝𓍕 _${usedPrefix}warn <@tag>_*
*⃝𓍕 _${usedPrefix}unwarn <@tag>_*
*⃝𓍕 _${usedPrefix}listwarn_*
*⃝𓍕 _${usedPrefix}fantasmas_*
*⃝𓍕 _${usedPrefix}destraba_*
*⃝𓍕 _${usedPrefix}setpp <imagen>_*
ᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚ
᚛\t\t\t*Convertidores*
*⃝𓍕 _${usedPrefix}toanime <imagen>_*
*⃝𓍕 _${usedPrefix}togifaud <video>_*
*⃝𓍕 _${usedPrefix}toimg <sticker>_*
*⃝𓍕 _${usedPrefix}tomp3 <video>_*
*⃝𓍕 _${usedPrefix}tomp3 <nota de voz>_*
*⃝𓍕 _${usedPrefix}toptt <video / audio>_*
*⃝𓍕 _${usedPrefix}tovideo <sticker>_*
*⃝𓍕 _${usedPrefix}tourl <video / imagen / audio>_*
*⃝𓍕 _${usedPrefix}tts es <texto>_*
ᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚ
᚛\t\t\t*Efectos y Logos*
*⃝𓍕 _${usedPrefix}phmaker <opcion> <imagen>_*
*⃝𓍕 _${usedPrefix}logos <efecto> <texto>_*
*⃝𓍕 _${usedPrefix}logochristmas <texto>_*
*⃝𓍕 _${usedPrefix}logocorazon <texto>_*
*⃝𓍕 _${usedPrefix}ytcomment <texto>_*
*⃝𓍕 _${usedPrefix}hornycard <@tag>_*
*⃝𓍕 _${usedPrefix}simpcard <@tag>_*
*⃝𓍕 _${usedPrefix}lolice <@tag>_*
*⃝𓍕 _${usedPrefix}itssostupid_*
*⃝𓍕 _${usedPrefix}pixelar_*
*⃝𓍕 _${usedPrefix}blur_*
ᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚ
᚛\t\t\t*Frases*
*⃝𓍕 _${usedPrefix}piropo_*
*⃝𓍕 _${usedPrefix}consejo_*
*⃝𓍕 _${usedPrefix}fraseromantica_*
*⃝𓍕 _${usedPrefix}historiaromantica_*
ᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚ
᚛\t\t\t*Random*
*⃝𓍕 _${usedPrefix}kpop <blackpink / exo / bts>_*
*⃝𓍕 _${usedPrefix}cristianoronaldo_*
*⃝𓍕 _${usedPrefix}messi_*
*⃝𓍕 _${usedPrefix}cat_*
*⃝𓍕 _${usedPrefix}dog_*
*⃝𓍕 _${usedPrefix}meme_*
*⃝𓍕 _${usedPrefix}itzy_*
*⃝𓍕 _${usedPrefix}blackpink_*
*⃝𓍕 _${usedPrefix}lolivid_*
*⃝𓍕 _${usedPrefix}loli_*
*⃝𓍕 _${usedPrefix}navidad_*
*⃝𓍕 _${usedPrefix}ppcouple_*
*⃝𓍕 _${usedPrefix}wpmontaña_*
*⃝𓍕 _${usedPrefix}pubg_*
*⃝𓍕 _${usedPrefix}wpgaming_*
*⃝𓍕 _${usedPrefix}wpaesthetic_*
*⃝𓍕 _${usedPrefix}wpaesthetic2_*
*⃝𓍕 _${usedPrefix}wprandom_*
*⃝𓍕 _${usedPrefix}wallhp_*
*⃝𓍕 _${usedPrefix}wpvehiculo_*
*⃝𓍕 _${usedPrefix}wpmoto_*
*⃝𓍕 _${usedPrefix}coffee_*
*⃝𓍕 _${usedPrefix}pentol_*
*⃝𓍕 _${usedPrefix}caricatura_*
*⃝𓍕 _${usedPrefix}ciberespacio_*
*⃝𓍕 _${usedPrefix}technology_*
*⃝𓍕 _${usedPrefix}doraemon_*
*⃝𓍕 _${usedPrefix}hacker_*
*⃝𓍕 _${usedPrefix}planeta_*
*⃝𓍕 _${usedPrefix}randomprofile_*
*⃝𓍕 _${usedPrefix}neko_*
*⃝𓍕 _${usedPrefix}waifu_*
*⃝𓍕 _${usedPrefix}akira_*
*⃝𓍕 _${usedPrefix}akiyama_*
*⃝𓍕 _${usedPrefix}anna_*
*⃝𓍕 _${usedPrefix}asuna_*
*⃝𓍕 _${usedPrefix}ayuzawa_*
*⃝𓍕 _${usedPrefix}boruto_*
*⃝𓍕 _${usedPrefix}chiho_*
*⃝𓍕 _${usedPrefix}chitoge_*
*⃝𓍕 _${usedPrefix}deidara_*
*⃝𓍕 _${usedPrefix}erza_*
*⃝𓍕 _${usedPrefix}elaina_*
*⃝𓍕 _${usedPrefix}eba_*
*⃝𓍕 _${usedPrefix}emilia_*
*⃝𓍕 _${usedPrefix}hestia_*
*⃝𓍕 _${usedPrefix}hinata_*
*⃝𓍕 _${usedPrefix}inori_*
*⃝𓍕 _${usedPrefix}isuzu_*
*⃝𓍕 _${usedPrefix}itachi_*
*⃝𓍕 _${usedPrefix}itori_*
*⃝𓍕 _${usedPrefix}kaga_*
*⃝𓍕 _${usedPrefix}kagura_*
*⃝𓍕 _${usedPrefix}kaori_*
*⃝𓍕 _${usedPrefix}keneki_*
*⃝𓍕 _${usedPrefix}kotori_*
*⃝𓍕 _${usedPrefix}kurumi_*
*⃝𓍕 _${usedPrefix}madara_*
*⃝𓍕 _${usedPrefix}mikasa_*
*⃝𓍕 _${usedPrefix}miku_*
*⃝𓍕 _${usedPrefix}minato_*
*⃝𓍕 _${usedPrefix}naruto_*
*⃝𓍕 _${usedPrefix}nezuko_*
*⃝𓍕 _${usedPrefix}sagiri_*
*⃝𓍕 _${usedPrefix}sasuke_*
*⃝𓍕 _${usedPrefix}sakura_*
*⃝𓍕 _${usedPrefix}cosplay_*
ᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚ
᚛\t\t\t*Adultos*
*⃝𓍕 _${usedPrefix}pack_*
*⃝𓍕 _${usedPrefix}pack2_*
*⃝𓍕 _${usedPrefix}pack3_*
*⃝𓍕 _${usedPrefix}videoxxx_*
*⃝𓍕 _${usedPrefix}videolesbixxx_*
*⃝𓍕 _${usedPrefix}tetas_*
*⃝𓍕 _${usedPrefix}booty_*
*⃝𓍕 _${usedPrefix}ecchi_*
*⃝𓍕_${usedPrefix}furro_*
*⃝𓍕 _${usedPrefix}imagenlesbians_*
*⃝𓍕 _${usedPrefix}panties_*
*⃝𓍕 _${usedPrefix}pene_*
*⃝𓍕 _${usedPrefix}porno_*
*⃝𓍕 _${usedPrefix}randomxxx_*
*⃝𓍕 _${usedPrefix}pechos_*
*⃝𓍕 _${usedPrefix}yaoi_*
*⃝𓍕 _${usedPrefix}yaoi2_*
*⃝𓍕 _${usedPrefix}yuri_*
*⃝𓍕 _${usedPrefix}yuri2_*
*⃝𓍕 _${usedPrefix}trapito_*
*⃝𓍕 _${usedPrefix}hentai_*
*⃝𓍕 _${usedPrefix}nsfwloli_*
*⃝𓍕 _${usedPrefix}nsfworgy_*
*⃝𓍕 _${usedPrefix}nsfwfoot_*
*⃝𓍕 _${usedPrefix}nsfwass_*
*⃝𓍕 _${usedPrefix}nsfwbdsm_*
*⃝𓍕 _${usedPrefix}nsfwcum_*
*⃝𓍕 _${usedPrefix}nsfwero_*
*⃝𓍕 _${usedPrefix}nsfwfemdom_*
*⃝𓍕 _${usedPrefix}nsfwglass_*
*⃝𓍕 _${usedPrefix}hentaipdf <texto>_*
*⃝𓍕 _${usedPrefix}hentaisearch <texto>_*
ᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚ
᚛\t\t\t*Efectos de Audios*
᚛\t\t\t*Reponde abun áudio o*
\t\t\t*a una nota de voz*
*⃝𓍕 _${usedPrefix}bass_*
*⃝𓍕 _${usedPrefix}blown_*
*⃝𓍕 _${usedPrefix}deep_*
*⃝𓍕 _${usedPrefix}earrape_*
*⃝𓍕 _${usedPrefix}fast_*
*⃝𓍕 _${usedPrefix}fat_*
*⃝𓍕 _${usedPrefix}nightcore_*
*⃝𓍕 _${usedPrefix}reverse_*
*⃝𓍕 _${usedPrefix}robot_*
*⃝𓍕 _${usedPrefix}slow_*
*⃝𓍕 _${usedPrefix}smooth_*
*⃝𓍕 _${usedPrefix}tupai_*
ᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚ
᚛\t\t\t*Chat Anónimo*
*⃝𓍕 _${usedPrefix}start_*
*⃝𓍕 _${usedPrefix}next_*
*⃝𓍕 _${usedPrefix}leave_*
ᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚ
᚛\t\t\t*Buscadores*
*⃝𓍕 _${usedPrefix}cuevana <texto>_*
*⃝𓍕 _${usedPrefix}pelisplus <texto>_*
*⃝𓍕 _${usedPrefix}modapk <texto>_*
*⃝𓍕 _${usedPrefix}stickersearch <texto>_*
*⃝𓍕 _${usedPrefix}stickersearch2 <texto>_*
*⃝𓍕 _${usedPrefix}xnxxsearch <texto>_*
*⃝𓍕 _${usedPrefix}animeinfo <texto>_*
*⃝𓍕 _${usedPrefix}google <texto>_*
*⃝𓍕 _${usedPrefix}letra <texto>_*
*⃝𓍕 _${usedPrefix}wikipedia <texto>_*
*⃝𓍕 _${usedPrefix}ytsearch <texto>_*
*⃝𓍕 _${usedPrefix}playstore <texto>_*
ᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚ
᚛\t\t\t*Audios* 
᚛\t\t\t*- Escribe las siguientes palabras*
\t\t\t*sin ningún prefijo (#, /, *, .)* 
\t\t\t*_- (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)_*
*⃝𓍕 _Quien es tu sempai botsito 7w7_*
*⃝𓍕 _Te diagnostico con gay_*
*⃝𓍕 _A nadie le importa_*
*⃝𓍕 _Fiesta del admin_*
*⃝𓍕 _Fiesta del administrador_*
*⃝𓍕 _Vivan los novios_*
*⃝𓍕 _Feliz cumpleaños_*
*⃝𓍕 _Noche de paz_*
*⃝𓍕 _Buenos dias_*
*⃝𓍕 _Buenos tardes_*
*⃝𓍕 _Buenos noches_*
*⃝𓍕 _Audio hentai_*
*⃝𓍕 _Chica lgante_*
*⃝𓍕 _Feliz navidad_*
*⃝𓍕 _Vete a la vrg_*
*⃝𓍕 _Pasa pack Bot_*
*⃝𓍕 _Atencion grupo_*
*⃝𓍕 _Marica quien_*
*⃝𓍕 _Murio el grupo_*
*⃝𓍕 _Oh me vengo_*
*⃝𓍕 _tio que rico_*
*⃝𓍕 _Viernes_*
*⃝𓍕 _Baneado_*
*⃝𓍕 _Sexo_*
*⃝𓍕 _Hola_*
*⃝𓍕 _Un pato_*
*⃝𓍕 _Nyanpasu_*
*⃝𓍕 _Te amo_*
*⃝𓍕 _Yamete_*
*⃝𓍕 _Bañate_*
*⃝𓍕 _Es puto_*
*⃝𓍕 _La biblia_*
*⃝𓍕 _Onichan_*
*⃝𓍕 _Mierda de Bot_*
*⃝𓍕 _Siuuu_*
*⃝𓍕 _Epico_*
*⃝𓍕 _Shitpost_*
*⃝𓍕 _Rawr_*
*⃝𓍕 _UwU_*
*⃝𓍕 _:c_*
*⃝𓍕 _a_*
ᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚ
᚛\t\t\t*Herramientas*
*⃝𓍕 _${usedPrefix}chatgpt <texto>_*
*⃝𓍕 _${usedPrefix}chatgptvoz <texto>_*
*⃝𓍕 _${usedPrefix}delchatgpt_*
*⃝𓍕 _${usedPrefix}dall-e <texto>_*
*⃝𓍕 _${usedPrefix}spamwa <numero|texto|cantidad>_*
*⃝𓍕 _${usedPrefix}tamaño <cantidad> <imagen / video>_*
*⃝𓍕 _${usedPrefix}readviewonce <imagen / video>_*
*⃝𓍕 _${usedPrefix}clima <país> <ciudad>_*
*⃝𓍕 _${usedPrefix}encuesta <texto1|texto2...>_*
*⃝𓍕 _${usedPrefix}afk <motivo>_*
*⃝𓍕 _${usedPrefix}ocr <responde a imagen>_*
*⃝𓍕 _${usedPrefix}hd <responde a imagen>_*
*⃝𓍕 _${usedPrefix}acortar <enlace / link / url>_*
*⃝𓍕 _${usedPrefix}calc <operacion math>_*
*⃝𓍕 _${usedPrefix}del <mensaje>_*
*⃝𓍕 _${usedPrefix}whatmusic <audio>_*
*⃝𓍕 _${usedPrefix}readqr <imagen (QR)>_*
*⃝𓍕 _${usedPrefix}qrcode <texto>_*
*⃝𓍕 _${usedPrefix}readmore <texto1| texto2>_*
*⃝𓍕 _${usedPrefix}styletext <texto>_*
*⃝𓍕 _${usedPrefix}traducir <texto>_*
*⃝𓍕 _${usedPrefix}nowa <numero>_*
*⃝𓍕 _${usedPrefix}covid <pais>_*
*⃝𓍕 _${usedPrefix}horario_*
ᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚ
᚛\t\t\t*RPG*
*⃝𓍕 _${usedPrefix}adventure_*
*⃝𓍕 _${usedPrefix}cazar_*
*⃝𓍕 _${usedPrefix}cofre_*
*⃝𓍕 _${usedPrefix}balance_*
*⃝𓍕 _${usedPrefix}claim_*
*⃝𓍕 _${usedPrefix}heal_*
*⃝𓍕 _${usedPrefix}lb_*
*⃝𓍕 _${usedPrefix}levelup_*
*⃝𓍕 _${usedPrefix}myns_*
*⃝𓍕 _${usedPrefix}perfil_*
*⃝𓍕 _${usedPrefix}premium_*
*⃝𓍕 _${usedPrefix}work_*
*⃝𓍕 _${usedPrefix}minar_*
*⃝𓍕 _${usedPrefix}minar2_*
*⃝𓍕 _${usedPrefix}buy_*
*⃝𓍕 _${usedPrefix}buyall_*
*⃝𓍕 _${usedPrefix}verificar_*
*⃝𓍕 _${usedPrefix}robar <cantidad> <@tag>_*
*⃝𓍕 _${usedPrefix}transfer <tipo> <cantidad> <@tag>_*
*⃝𓍕 _${usedPrefix}unreg <numero de serie>_*
ᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚ
᚛\t\t\t*Stickers*
*⃝𓍕 _${usedPrefix}sticker <responder a imagen o video>_*
*⃝𓍕 _${usedPrefix}sticker <enlace / link / url>_*
*⃝𓍕 _${usedPrefix}sticker2 <responder a imagen o video>_*
*⃝𓍕 _${usedPrefix}sticker2 <enlace / link / url>_*
*⃝𓍕 _${usedPrefix}s <responder a imagen o video>_*
*⃝𓍕 _${usedPrefix}s <enlace / link / url>_*
*⃝𓍕 _${usedPrefix}s2 <responder a imagen o video>_*
*⃝𓍕 _${usedPrefix}s2 <enlace / link / url>_*
*⃝𓍕 _${usedPrefix}emojimix <emoji 1>&<emoji 2>_*
*⃝𓍕 _${usedPrefix}scircle <imagen>_*
*⃝𓍕 _${usedPrefix}sremovebg <imagen>_*
*⃝𓍕 _${usedPrefix}semoji <tipo> <emoji>_*
*⃝𓍕 _${usedPrefix}qc_ <texto>*
*⃝𓍕 _${usedPrefix}attp <texto>_*
*⃝𓍕 _${usedPrefix}attp2 <texto>_*
*⃝𓍕 _${usedPrefix}attp3 <texto>_*
*⃝𓍕 _${usedPrefix}ttp <texto>_*
*⃝𓍕 _${usedPrefix}ttp2 <texto>_*
*⃝𓍕 _${usedPrefix}ttp3 <texto>_*
*⃝𓍕 _${usedPrefix}ttp4 <texto>_*
*⃝𓍕 _${usedPrefix}ttp5 <texto>_*
*⃝𓍕 _${usedPrefix}pat <@tag>_*
*⃝𓍕 _${usedPrefix}slap <@tag>_*
*⃝𓍕 _${usedPrefix}kiss <@tag>_*
*⃝𓍕 _${usedPrefix}dado_*
*⃝𓍕 _${usedPrefix}wm <packname> <author>_*
*⃝𓍕 _${usedPrefix}stickermarker <efecto> <imagen>_*
*⃝𓍕 _${usedPrefix}stickerfilter <efecto> <imagen>_*
ᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚᚚ
᚛\t\t\t*Propietario*
*⃝𓍕 > <funcion>*
*⃝𓍕 => <funcion>*
*⃝𓍕 $ <funcion>*
*⃝𓍕 _${usedPrefix}setprefix <prefijo>_*
*⃝𓍕 _${usedPrefix}desactivarwa <numero>_*
*⃝𓍕 _${usedPrefix}resetprefix_*
*⃝𓍕 _${usedPrefix}autoadmin_*
*⃝𓍕 _${usedPrefix}leavegc_*
*⃝𓍕 _${usedPrefix}cajafuerte_*
*⃝𓍕 _${usedPrefix}blocklist_*
*⃝𓍕 _${usedPrefix}block <@tag / numero>_*
*⃝𓍕 _${usedPrefix}unblock <@tag / numero>_*
*⃝𓍕 _${usedPrefix}enable restrict_*
*⃝𓍕 _${usedPrefix}disable restrict_*
*⃝𓍕 _${usedPrefix}enable autoread_*
*⃝𓍕 _${usedPrefix}disable autoread_*
*⃝𓍕 _${usedPrefix}enable public_*
*⃝𓍕 _${usedPrefix}disable public_*
*⃝𓍕 _${usedPrefix}enable pconly_*
*⃝𓍕 _${usedPrefix}disable pconly_*
*⃝𓍕 _${usedPrefix}enable gconly_*
*⃝𓍕 _${usedPrefix}disable gconly_*
*⃝𓍕 _${usedPrefix}enable anticall_*
*⃝𓍕 _${usedPrefix}disable anticall_*
*⃝𓍕 _${usedPrefix}enable antiprivado_*
*⃝𓍕 _${usedPrefix}disable antiprivado_*
*⃝𓍕 _${usedPrefix}enable modejadibot_*
*⃝𓍕 _${usedPrefix}disable modejadibot_*
*⃝𓍕 _${usedPrefix}msg <texto>_*
*⃝𓍕 _${usedPrefix}banchat_*
*⃝𓍕 _${usedPrefix}unbanchat_*
*⃝𓍕 _${usedPrefix}banuser <@tag>_*
*⃝𓍕 _${usedPrefix}unbanuser <@tag>_*
*⃝𓍕 _${usedPrefix}dardiamantes <@tag>_*
*⃝𓍕 _${usedPrefix}añadirxp <@tag>_*
*⃝𓍕 _${usedPrefix}banuser <@tag>_*
*⃝𓍕 _${usedPrefix}bc <texto>_*
*⃝𓍕 _${usedPrefix}bcchats <texto>_*
*⃝𓍕 _${usedPrefix}bcgc <texto>_*
*⃝𓍕 _${usedPrefix}bcgc2 <audio>_*
*⃝𓍕 _${usedPrefix}bcgc2 <video>_*
*⃝𓍕 _${usedPrefix}bcgc2 <imagen>_*
*⃝𓍕 _${usedPrefix}bcbot <texto>_*
*⃝𓍕 _${usedPrefix}cleartpm_*
*⃝𓍕 _${usedPrefix}restart_*
*⃝𓍕 _${usedPrefix}update_*
*⃝𓍕 _${usedPrefix}linkid_*
*⃝𓍕 _${usedPrefix}banlist_*
*⃝𓍕 _${usedPrefix}addprem <@tag> <tiempo>_*
*⃝𓍕 _${usedPrefix}addprem2 <@tag> <tiempo>_*
*⃝𓍕 _${usedPrefix}addprem3 <@tag> <tiempo>_*
*⃝𓍕 _${usedPrefix}addprem4 <@tag> <tiempo>_*
*⃝𓍕 _${usedPrefix}delprem <@tag>_*
*⃝𓍕 _${usedPrefix}listcmd_*
*⃝𓍕 _${usedPrefix}setppbot <responder a imagen>_*
*⃝𓍕 _${usedPrefix}addcmd <texto> <responder a sticker/imagen>_*
*⃝𓍕_${usedPrefix}delcmd <responder a sticker/imagen con comando o texto asignado>_*

*${wm}*`.trim()
if (m.isGroup) {
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })  
} else {    
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })}
} catch {
conn.reply(m.chat, '*El menú tiene un error, si este persiste por favor reportelo al creador*', m)
}}
handler.command = /^(allmenuu)$/i
handler.register = true
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}