const fs = require('fs')
const chalk = require('chalk')

// Web Apikey
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Tempat Apikey
global.APIKeys = {
	'https://zenzapis.xyz': 'B647CA2AC80B', // Register Untuk Dapatkan Apikey
}

// Ganti Sewajarnya
global.owner = ['17372558791']
global.pengguna = 'wranz'
global.premium = ['Wranz']
global.pemilik = ['17372558791'] 
global.ownernomer = '17372558791'
global.ownername = 'Wranz⿻'
global.botname = ' Ranz - ＭＤ'
global.Prefix = 'Multi'
global.meki = '17372558791'
global.footer = 'wramz⿻ | © 2022'
global.ig = 'https://instagram.com/'
global.email = 'openbo5k@gmail.com'
global.region = 'China'
global.sc = 'https://www.youtube.com/'
global.packname = 'Wranz The Infinity 🔥' 
global.author = 'Anjazz kelazz🎭' 
global.sessionName = 'session'
global.prefa = ['#','!','/','']
global.sp = '» ' 
global.mess = {
    success: 'Done Your Request',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    error: 'Fitur sedang error!',
        endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
    wrongFormat: 'Perintah Salah!!\nSertakan Link setelah Command..',
    example1: 'Welcome @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @subject (Group Name)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)'
,
    example2: 'Good Bye @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @subject (Group Name)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)'    
    
}
    global.limitawal = {
    premium: "Infinity",
    free: 2,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./media/zaki.jpg')
global.fakeImg = fs.readFileSync('./media/fake.jpg')

//Ambil dr chika
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
