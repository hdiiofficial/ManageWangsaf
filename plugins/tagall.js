let handler = async(m, { conn, text, participants }) => {
  let teks = `โโโชใ *๐ฅ Mention All* ใโชโโ\n\nโฒ *PESANNYA : ${text ? text : 'TANPA ALASAN'}*\n\n`
		      	for (let mem of participants) {
		            teks += `เฟ@${mem.id.split('@')[0]}\n`
				}
                teks += `\nโ *Admin Group* โ`
                conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <pesan>']
handler.tags = ['group']
handler.command = /^(tagall)$/i

handler.register = true
handler.group = true
handler.admin = true
handler.botAdmin = true

module.exports = handler
