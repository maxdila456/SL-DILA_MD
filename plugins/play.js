const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')

cmd({
    pattern: "play3",
    alias: ["ytmp3","audio3"],
    desc: "download songs",
    category: "download",
    react: "🎵",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("*Please provide a link or a name 🔎...*")
const search = await yts(q)
const data = search.videos[0]
const url = data.url

let desc = `╭━━━〔 *SL-DILA* 〕━━━┈⊷
┃▸╭───────────
┃▸┃🐼 *MUSIC DOWNLOADER*
┃▸└───────────···๏
╰────────────────┈⊷
╭━❮ *Download Audio* ❯━┈⊷
┃▸╭─────────────·๏
┃▸┃🐼 *Tital* - ${data.title}
┃▸┃🐼 *Views* - ${data.views}
┃▸┃🐼 *Description* - ${data.description}
┃▸┃🐼 *Duration:* ${data.timestamp}}
┃▸┃🐼 *Link* - ${data.url}
┃▸┃🐼 *Ago* - ${data.ago}
┃▸└────────────┈⊷
╰━━━━━━━━━━━━━━━⪼
> *© Pᴏᴡᴇʀᴇᴅ Bʏ ᴋᴜᴋᴋᴜ ᴘᴀɴᴅᴀ ♨*`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//download audio

let down = await fg.yta(url)  
let downloadUrl = down.dl_url

//send audio
await conn.sendMessage(from,{audio:{url: downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})
await conn.sendMessage(from,{document:{url: downloadUrl},mimetype:"audio/mpeg",fileName:data.title + "mp3",caption:"©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋᴜᴋᴋᴜ ᴘᴀɴᴅᴀ ♨"},{quoted:mek})
}catch(e){
reply(`${e}`)
}
})

//===========darama-dl===========

cmd({
    pattern: "darama",
    alias: ["video3","ytmp4"],    
    desc: "download video",
    category: "download",
    react: "🎥",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("*Please provide a link or a name 🔎...*")
const search = await yts(q)
const data = search.videos[0]
const url = data.url

let des = `╭━━━〔 *SL-DILA* 〕━━━┈⊷
┃▸╭───────────
┃▸┃🐼 *VIDEO DOWNLOADER*
┃▸└───────────···๏
╰────────────────┈⊷
╭━❮ *Download Audio* ❯━┈⊷
┃▸╭─────────────·๏
┃▸┃🐼 *Tital* - ${data.title}
┃▸┃🐼 *Views* - ${data.views}
┃▸┃🐼 *Description* - ${data.description}
┃▸┃🐼 *Duration:* ${data.timestamp}}
┃▸┃🐼 *Link* - ${data.url}
┃▸┃🐼 *Ago* - ${data.ago}
┃▸└────────────┈⊷
╰━━━━━━━━━━━━━━━⪼
> *© Pᴏᴡᴇʀᴇᴅ Bʏ max...dila ♨*`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:des},{quoted:mek});

//download video

let down = await fg.ytv(url)  
let downloadUrl = down.dl_url

//send video
await conn.sendMessage(from,{video:{url: downloadUrl},mimetype:"video/mp4"},{quoted:mek})
await conn.sendMessage(from,{document:{url: downloadUrl},mimetype:"video/mp4",fileName:data.title + "mp4",caption:"©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋᴜᴋᴋᴜ ᴘᴀɴᴅᴀ ♨"},{quoted:mek})
    
}catch(a){
reply(`${a}`)
}
})