export async function before(m, { conn, isAdmin, isBotAdmin, isOwner, isROwner }) {
if (m.isBaileys && m.fromMe) return !0
if (m.isGroup) return !1
if (!m.message) return !0
if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') | m.text.includes('estado') || m.text.includes('bots') || m.text.includes('serbot') || m.text.includes('jadibot')) return !0
let chat = global.db.data.chats[m.chat]
let bot = global.db.data.settings[this.user.jid] || {}
if (bot.antiPrivate && !isOwner && !isROwner) {
await m.reply(`*[β] ππππΌ @${m.sender.split`@`[0]}*, ππππΌ ππππππ½ππΏπ ππΌπ½ππΌ πΌπ πππππΌπΏπ πΏππ π½ππ ππππΌπ π½ππππππΌπΏπ\nbππΌπ½ππΌ πΎππ ππ πΎπππΌπΏπππΌ ππ πππ ππ πππππ πππΎπππ½ππππ πΌπ π½ππ π ππππππ πππ ππ πΏπππ½ππππππ.\n πΌπππππππΎππΌ ππΌππΌ ππππΌπππ: https://instagram.com/gata_dios`, false, { mentions: [m.sender] })
await this.updateBlockStatus(m.chat, 'block')}
return !1
}
