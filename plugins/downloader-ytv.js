import {youtubedl, youtubedlv2} from '@bochilteam/scraper';
import fetch from 'node-fetch';
import yts from 'yt-search';
import ytdl from 'ytdl-core';
import axios from 'axios';
const handler = async (m, {conn, args, usedPrefix, command}) => {
  if (!args[0]) throw '*Ingresa el comando mas el enlace o link de YouTube*';

  let youtubeLink = '';
  if (args[0].includes('you')) {
    youtubeLink = args[0];
  } else {
    const index = parseInt(args[0]) - 1;
    if (index >= 0) {
      if (Array.isArray(global.videoList) && global.videoList.length > 0) {
        const matchingItem = global.videoList.find((item) => item.from === m.sender);
        if (matchingItem) {
          if (index < matchingItem.urls.length) {
            youtubeLink = matchingItem.urls[index];
          } else {
            throw `*No se encontró ningún enlace para el número, por favor pon un número entre el 1 y el ${matchingItem.urls.length}*`;
          }
        } else {
          throw `*Para poder usar el comando de esta forma: (${usedPrefix + command} <numero>), Realiza la búsqueda de videos con el comando: ${usedPrefix}playlist <texto>*`;
        }
      } else {
        throw `*Para usar de esta forma (${usedPrefix + command} <numero>), Realiza la búsqueda con el comando: ${usedPrefix}playlist <texto>*`;
      }
    }
  }

  const { key } = await m.reply(`*Su video está siendo enviado,si esteno se envía use el comando: #playdoc ᴏ #play.2 ᴏ #ytmp4doc*`);
  try {
    const qu = args[1] || '360';
    const q = qu + 'p';
    const v = youtubeLink;
    const yt = await youtubedl(v).catch(async (_) => await youtubedlv2(v));
    const dl_url = await yt.video[q].download();
    const ttl = await yt.title;
    const size = await yt.video[q].fileSizeH;
    await await conn.sendMessage(m.chat, {video: {url: dl_url}, fileName: `${ttl}.mp4`, mimetype: 'video/mp4', caption: `┏━━━━━༺᯼༻━━━━━━\n┃ ᚛ *TÍTULO:* ${ttl}\n┃ ᚛ *TAMAÑO:* ${size}\n┗━━━━━༺᯼༻━━━━━━\n\n${wm}`, thumbnail: await fetch(yt.thumbnail)}, {quoted: m});
    await conn.sendMessage(m.chat, {text: '*Video descargado exitosamente :)*', edit: key}, {quoted: m});
  } catch (E1) {
    // console.log('Error 1 ' + E1)
    try {
      const mediaa = await ytMp4(youtubeLink);
      await conn.sendMessage(m.chat, {video: {url: mediaa.result}, fileName: `error.mp4`, caption: `Asmodeus Bot`, thumbnail: mediaa.thumb, mimetype: 'video/mp4'}, {quoted: m});
      await conn.sendMessage(m.chat, {text: '*Video descargado exitosamente :)*', edit: key}, {quoted: m});
    } catch (E2) {
      // console.log('Error 2 ' + E2)
      try {
        const lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${lolkeysapi}&url=${youtubeLink}`);
        const lolh = await lolhuman.json();
        const n = lolh.result.title || 'error';
        const n2 = lolh.result.link;
        const n3 = lolh.result.size;
        const n4 = lolh.result.thumbnail;
        await conn.sendMessage(m.chat, {video: {url: n2}, fileName: `${n}.mp4`, mimetype: 'video/mp4', caption: `┏━━━━━༺᯼༻━━━━━━\n┃ ᚛ *TÍTULO:* ${n}\n┃ ᚛ *TAMAÑO:* ${n3}\n┗━━━━━༺᯼༻━━━━━━\n\n${wm} `, thumbnail: await fetch(n4)}, {quoted: m});
        await conn.sendMessage(m.chat, {text: '*Video descargado exitosamente :)*', edit: key}, {quoted: m});
      } catch (E3) {
        // console.log('Error 3 ' + E3)
        await conn.reply(m.chat, '*No fue posible descargar el video*', m);
      }
    }
  }
};
handler.command = /^(video|fgmp4|dlmp4|getvid|yt(v|mp4)?)$/i;
export default handler;

function bytesToSize(bytes) {
  return new Promise((resolve, reject) => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return 'n/a';
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
    if (i === 0) resolve(`${bytes} ${sizes[i]}`);
    resolve(`${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`);
  });
}

async function ytMp3(url) {
  return new Promise((resolve, reject) => {
    ytdl.getInfo(url).then(async (getUrl) => {
      const result = [];
      for (let i = 0; i < getUrl.formats.length; i++) {
        const item = getUrl.formats[i];
        if (item.mimeType == 'audio/webm; codecs=\"opus\"') {
          const {contentLength} = item;
          const bytes = await bytesToSize(contentLength);
          result[i] = {audio: item.url, size: bytes};
        }
      }
      const resultFix = result.filter((x) => x.audio != undefined && x.size != undefined);
      const tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].audio}`);
      const tinyUrl = tiny.data;
      const title = getUrl.videoDetails.title;
      const thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
      resolve({title, result: tinyUrl, result2: resultFix, thumb});
    }).catch(reject);
  });
}

async function ytMp4(url) {
  return new Promise(async (resolve, reject) => {
    ytdl.getInfo(url).then(async (getUrl) => {
      const result = [];
      for (let i = 0; i < getUrl.formats.length; i++) {
        const item = getUrl.formats[i];
        if (item.container == 'mp4' && item.hasVideo == true && item.hasAudio == true) {
          const {qualityLabel, contentLength} = item;
          const bytes = await bytesToSize(contentLength);
          result[i] = {video: item.url, quality: qualityLabel, size: bytes};
        }
      }
      const resultFix = result.filter((x) => x.video != undefined && x.size != undefined && x.quality != undefined);
      const tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].video}`);
      const tinyUrl = tiny.data;
      const title = getUrl.videoDetails.title;
      const thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
      resolve({title, result: tinyUrl, rersult2: resultFix[0].video, thumb});
    }).catch(reject);
  });
}

async function ytPlay(query) {
  return new Promise((resolve, reject) => {
    yts(query).then(async (getData) => {
      const result = getData.videos.slice( 0, 5 );
      const url = [];
      for (let i = 0; i < result.length; i++) {
        url.push(result[i].url);
      }
      const random = url[0];
      const getAudio = await ytMp3(random);
      resolve(getAudio);
    }).catch(reject);
  });
}

async function ytPlayVid(query) {
  return new Promise((resolve, reject) => {
    yts(query).then(async (getData) => {
      const result = getData.videos.slice( 0, 5 );
      const url = [];
      for (let i = 0; i < result.length; i++) {
        url.push(result[i].url);
      }
      const random = url[0];
      const getVideo = await ytMp4(random);
      resolve(getVideo);
    }).catch(reject);
  });
}