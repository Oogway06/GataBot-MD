import fs from 'fs'
let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let text = `
πππ©ππ½π€π©-ππΏ ππ
*Wa.me/593993684821*

πππ©ππ½π€π©-ππΏ *2* ππ
*Wa.me/573238484181*

πππ©ππ½π€π©-ππΏ *3* ππ
*Wa.me/573208089136*

πππ©ππ½π€π©-ππΏ *4* ππ
*Wa.me/56964787213*

πππ©ππ½π€π©-ππΏ *5* ππ
*Wa.me/5493458410725*

πππ©ππ½π€π©-ππΏ *6* ππ
*Wa.me/50495086382*

*---------------------*
*CENTER GATABOT*
*centergatabot@gmail.com*

ππΌππΌ πΏπππ - πΌπππππππΎππΌ
*${asistencia}*

*Sr. Pablo* - πΌπππππππΎππΌ
*Wa.me/51993042301*

π§‘ *Eso son los contactos para ti.*\nπ *That's the contacts for you.*`.trim()   
let buttonMessage= {
'document': { url: `${md}` },
'mimetype': `application/${document}`,
'fileName': `β¦ πππ©ππ½π€π©-ππΏ ΰΌ`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': `${md}`,
'mediaType': 2,
'previewType': 'pdf',
'title': 'Super Bot WhatsApp',
'body': wm,
'thumbnail': fs.readFileSync('./media/menus/Menu3.jpg'),
'sourceUrl': yt }},
'caption': text,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}donar`, buttonText: {displayText: 'π πΏπ€π£ππ§ | πΏπ€π£ππ©π'}, type: 1}, 
{buttonId: `${usedPrefix}infobot`, buttonText: {displayText: 'π ππ£ππ€π§π’ππππ€π£ | ππ£ππ€π§π’ππ©ππ€π£'}, type: 1}, 
{buttonId: `${usedPrefix}allmenu`, buttonText: {displayText: 'π« πππ£πͺΜ ππ€π’π₯π‘ππ©π€ | ππͺπ‘π‘ πππ£πͺ'}, type: 1}],
'headerType': 6 }

await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
const data = global.owner.filter(([id, isCreator]) => id && isCreator)
await conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
//await conn.sendContact(m.chat, `${owner[0][0]}`, m)//, 
//await conn.sendContact(m.chat, conn.getName(owner[0][0]+'@s.whatsapp.net', m)
  
let pp = './media/menus/Menu2.jpg'
let str = `${wm}`
let oficial = 'ComunΓ­cate con MΓ­ Creadora por Instagram!!, Solo por ese medio puede ayudarte sobre Temas de GataBot\n\nCommunicate with My Creator on Instagram!!, Only by that means can help you on GataBot Themes'

await conn.sendHydrated2(m.chat, str, oficial, pp, 'https://github.com/GataNina-Li/GataBot-MD', 'πππ©ππ½π€π©-ππΏ', 'https://www.instagram.com/gata_dios', 'ππ£π¨π©πππ§ππ’', [
['β ππ§ ππ‘ ππ£ππππ€ | ππ€ π©π€ π¨π©ππ§π©', '/menu'],
], m,)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(contacto|owner|creator|propietario|dueΓ±o|dueΓ±a|propietaria|dueΓ±o|creadora|creador)$/i
export default handler 
