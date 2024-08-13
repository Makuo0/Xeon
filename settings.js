//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? 
//subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs');
const chalk = require('chalk');

//owmner v card
global.ytname = "MARCHISIO YT" //ur yt chanel name
global.socialm = "Insta: marchisio 042" //ur github or insta name
global.location = "India, Mizoram, Aizawl" //ur location

//new
global.botname = 'PAIN' //ur bot name
global.ownernumber = ['2347055805736'] //ur owner number, dont add more than one
global.ownername = 'MARCHISIO' //ur owner name
global.websitex = "https://youtu.be/IsOjuAT0vwE?si=9cxJ1XnV1UETDj9t"
global.wagc = "https://whatsapp.com/channel/0029VajRI3QG3R3fyif7yO1V"
global.themeemoji = '🪀'
global.wm = "MARCHISIO."
global.botscript = 'https://github.com/DGXeon/CheemsBot-MD15' //script link
global.packname = "Sticker By MARCHISIO "
global.author = "MARCHISIO\n\n+2347055805736"
global.creator = "2347055805736@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["2347055805736"] // Premium User

//channel id
global.xchannel = {
	jid: '120363315401495704@newsletter'
	}

//bot sett
global.typemenu = 'v12' // menu type 'v1' => 'v12'
global.typereply = 'v4' // reply type 'v1' => 'v4'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code

global.listv = ['•','●','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆']
global.tempatDB = 'database.json'

global.limit = {
	free: 100,
	premium: 999,
	vip: 'VIP'
}

global.uang = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	error: 'Error!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
	done: 'Done'
}

global.bot = {
	limit: 0,
	uang: 0
}

global.game = {
	suit: {},
	menfes: {},
	tictactoe: {},
	kuismath: {},
	tebakbom: {},
}

//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});