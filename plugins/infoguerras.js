let handler = async (m, { conn, usedPrefix }) => {

let text = `
・🔥☠️ *Guerra de clanes* ☠️🔥・

     ⚠️⚠️⚠️ Requisitos ⚠️⚠️⚠️

🔱 Jugar los nodos que tu lider de Guerra diga. 

🔱 Si no cumples el mínimo de puntos serás expulsado del Team!!! (+30k) esto es a basea la dificultad del nodo que salga se dirá cual es el mínimo de puntos por ndo 

🔱Recuerden tomar captura de los nodos capturados y mandarles al final de la guerra a (7s Kakashi )

⚔️📯⚜️ *RECOMPENSAS*⚜️📯⚔️

🔥‼️ _*Solo si ganan los nodos, se activara los 100 cp por nodo para los top 1-10*_‼️🔥

🔥‼️ _*Solo si ganan los nodos, se activara los 50 cp por nodo para los  top 11-15*_‼️🔥

🏅🏅🏅🏅🏅🏅🏅🏅🏅🏅🏅🏅
 *Bonificaciones para los 3 primeros lugares al Finalizar la Guerra*  ⚔️
🏅🏅🏅🏅🏅🏅🏅🏅🏅🏅🏅🏅

🥇1ro   420 CP 
🥈2do  240 CP 
🥉3ro   160 CP 

📍 *BENEFICIO EXTRA*
Conquistadores 150cp 💰 para los que definan nodo (ultimas 3 horas 🕰y casi dobleguen los puntos mínimos por nodos ) 

👀👀👀👀👀👀👀👀👀👀👀👀👀
🔥‼️ _*Sólo se reclaman al tener 5k cp acumulados*_‼️🔥


🔥☠️🔥☠️🔥☠️🔥☠️🔥☠️🔥

`.trim()   

m.reply(text)

}

handler.help = ['owner', 'creator']

handler.tags = ['info']

handler.command = /^(guerra|guerras)$/i

export default handler