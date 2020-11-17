function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const Discord = require('discord.js');
const fs = require('fs');
const path = require('path');
const imageSearch = require('image-search-google');
const bot = new Discord.Client();
const talkedRecently = new Set();
const talkedRecently2 = new Set();

//TOKEN
const token = 'TOKEN HERE';
const ADMINID = '695326552027693116'
//TOKEN

const PREFIX = '!idiot ';
const PREFIX2 = '!i ';
var randnum;
bot.on('ready', () =>{
	console.log('this bot is online, dummy!');
})

bot.on('ready', () => {
	bot.user.setActivity("live from " + places[getRandomInt(places.length)], {
		type: "STREAMING",
		url: "https://www.twitch.tv/angrycupocider"
	});
});

const directoryPath = path.join(__dirname, 'botfiles');

var filecount
var error
var args
var prevauth
var deletenextmessage
var ttsmsg
bot.on('message', message=>{
	if (deletenextmessage == true) {
		message.delete()
		deletenextmessage = false
	}
	if (message.content.split(" ")[0] + " " == PREFIX) {
		args = message.content.substring(PREFIX.length).split(" ")
		//console.log("using prefix !idiot")
	} else {
		if (message.content.split(" ")[0] + " " == PREFIX2) {
			args = message.content.substring(PREFIX2.length).split(" ")
			//console.log("using prefix !i")
		}
	}
        if ((message.content.split(" ")[0] + " " == PREFIX && message.author.id != 609870094834597906) || (message.content.split(" ")[0] + " " == PREFIX2 && message.author.id != 609870094834597906)) {
		prevauth = message.author
		switch(args[0]){
			case 'asay':
				if (message.author.id == ADMINID) {
					message.delete()
					args.shift()
					message.channel.sendMessage(args.join(" "))
				} else {
					message.channel.sendMessage('hey man, you cant do that. thats illegal.');
				}
				break;
			case 'console':
				args.shift()
				console.clear()
				console.log(args.join(" "))
				message.channel.sendMessage("logged \"" + args.join(" ") + "\" into jacks console. he will be annoyed.")
				break;
			case 'say':
				message.delete()
				args.shift()
				message.channel.sendMessage(args.join(" "))
				message.channel.sendMessage("annoying message brought to you by: " + prevauth)
				break;
			case 'tts':
				message.delete()
				args.shift()
				message.channel.sendMessage(args.join(" "), {
					tts: true
				})
				deletenextmessage = true
				message.channel.sendMessage("annoying tts message brought to you by: " + prevauth + "\nmessage contents: " + args.join(" ") )
				message.channel.sendMessage()
				break;
			case 'euthanize':
				if (message.author.id == "500456250190856202") {
					message.channel.sendMessage('now i die.');
					bot.destroy();
					process.once('SIGUSR2', function () {
						gracefulShutdown(function () {
							process.kill(process.pid, 'SIGUSR2');
						});
					});
				}
				break
			case 'atts':
				if (message.author.id == ADMINID) {
					message.delete()
					args.shift()
					message.channel.sendMessage(args.join(" "), {
						tts: true
					})
					deletenextmessage = true
				} else {
					message.channel.sendMessage('hey man, you cant do that. thats illegal.');
				}
				break
			case 'appendmemory':
				args.shift()
				fs.appendFile('mem.txt', args.join(" "), (err) => {
    					if (err) throw err;
					message.channel.sendMessage("put down \"" + args.join(" ") + "\" into my memory")
				});
				break;
			case 'getmemory':
				fs.readFile('mem.txt', 'utf8', function(err, data) {
					if (err) throw err;
					message.channel.sendMessage(data)
				});
				break;
			case 'clearmemory':
				fs.writeFile("mem.txt", " ", (err) => {
    					if (err) throw err;
    					message.channel.sendMessage("memory cleared")
				}); 
				break;
			case 'shutdown':
				if (message.author.id == ADMINID) {
					message.channel.sendMessage('ok mr.bossman! please wait while i shut down...');
					bot.destroy();
					process.once('SIGUSR2', function () {
						gracefulShutdown(function () {
							process.kill(process.pid, 'SIGUSR2');
						});
					});
				} else {
					message.channel.sendMessage('hey man, you cant do that. thats illegal.');
				}
				break;
			case 'shutoff':
				if (message.author.id == ADMINID) {
					message.channel.sendMessage('ok mr.bossman! please wait while i shut down...');
					bot.destroy();
					process.once('SIGUSR2', function () {
						gracefulShutdown(function () {
							process.kill(process.pid, 'SIGUSR2');
						});
					});
				} else {
					message.channel.sendMessage('hey man, you cant do that. thats illegal.');
				}
				break;
			case 'break':
				if (message.author.id == ADMINID) {
					message.channel.sendMessage('ok mr.bossman! please wait while i shut down...');
					bot.destroy();
					process.once('SIGUSR2', function () {
						gracefulShutdown(function () {
							process.kill(process.pid, 'SIGUSR2');
						});
					});
				} else {
					message.channel.sendMessage('hey man, you cant do that. thats illegal.');
				}
				break;
			case 'die':
				if (message.author.id == ADMINID) {
					message.channel.sendMessage('ok mr.bossman! please wait while i shut down...');
					bot.destroy();
					process.once('SIGUSR2', function () {
						gracefulShutdown(function () {
							process.kill(process.pid, 'SIGUSR2');
						});
					});
				} else {
					message.channel.sendMessage('hey man, you cant do that. thats illegal.');
				}
				break;
			case 'crusade':
				if (message.author.id == '573959214922334266') {
					message.channel.sendMessage('shutting down...');
					kill()
				} else {
					message.channel.sendMessage('only a templar can do that.');
				}
				break;
			case 'help':
				message.channel.sendMessage('commands: \n1. !i say [text] for me to say [text] \n2. !i tts [text] for me to send a tts message of [text] \n3. !i github for my github \n4. !i appendmemory [text] to put [text] into my memory \n5. !i getmemory for me to say my memory \n6. !i clearmemory for me to clear my memory \n7. !i tf2tip for me to say a FAKE tf2 tip \n8. !i realtf2tip for me to say a REAL tf2 tip \n9. !i funmod for me to give you a fun mod \n10. !i newplace for me to change the place im streaming from \n11. !i allthejams for me to say my music playlist \n12. !i streamfrom [text] for me to set my status to \"Streaming [text]\" \n13. !i help for me to display this again \n14. !i getfile [text] for me to grab a file with the name [text] (you must include a file extension) \n15. !i dir for me to list off my bot files into a text document \n16. !i printdir for me to say my bot files.')
				break;
			case 'funmod':
				RAND=getRandomInt(funmods.length)
				message.channel.sendMessage(funmods[RAND].name);
				message.channel.sendMessage("made for " + funmods[RAND].game);
				message.channel.sendMessage(funmods[RAND].link);
				message.channel.sendMessage(funmods[RAND].desc);
				break;
			case 'vgfunfact':
				RAND=getRandomInt(vgfunfacts.length)
				message.channel.send(vgfunfacts[RAND]);
				break;
			case 'tf2tip':
				RAND=getRandomInt(tips.length)
				message.channel.sendMessage(tips[RAND]);
				break;
			case 'realtf2tip':
				RAND=getRandomInt(realtips.length)
				message.channel.sendMessage(realtips[RAND]);
				break;
			case 'randomhud':
				RAND=getRandomInt(huds.length)
				message.channel.sendMessage("hud name: " + huds[RAND].name + "\nstatus: " + huds[RAND].status + "\nlink: " + huds[RAND].link + "\nimage: " + huds[RAND].image);
				break;
			case 'banner':
				RAND=getRandomInt(chantitles.length)
				banner=chantitles[RAND]
				if (banner.split(".")[1] == "jpg") {
					variant="A"
				} else if (banner.split(".")[1] == "png") {
					variant="B"
				} else if (banner.split(".")[1] == "gif") {
					variant="C"
				}
				message.channel.sendMessage("you got banner #" + banner.split(".")[0] + "-" + variant + ", a banner with the ." + banner.split(".")[1] + " image format")
				message.channel.sendMessage("https://s.4cdn.org/image/title/" + banner)
				break;
			case 'snoo':
				RAND=getRandomInt(snoocolors.length)
				RAND2=getRandomInt(snooposes.length)
				RAND3=getRandomInt(19)+1
				message.channel.sendMessage("reddit snoo with color " + snoocolors[RAND] + " and pose " + RAND3)
				message.channel.sendMessage("https://www.redditstatic.com/avatars/avatar_default_" + snooposes[RAND2] + "_" + snoocolors[RAND] + ".png")
				break
			case 'newstate':
				if (message.author.id == ADMINID) {
					message.channel.sendMessage("can do, boss")
					bot.user.setActivity("live from " + places[getRandomInt(places.length)], {
						type: "STREAMING",
						url: "https://www.twitch.tv/angrycupocider"
					});
				} else {
					if (talkedRecently2.has(message.author.id)) {
						message.channel.sendMessage("Wait 1 minute before getting typing this again. - " + message.author);
					} else {
						// the user can type the command ... your command code goes here :)
						bot.user.setActivity("live from " + places[getRandomInt(places.length)], {
							type: "STREAMING",
							url: "https://www.twitch.tv/angrycupocider"
						});
						// Adds the user to the set so that they can't talk for a minute
						talkedRecently2.add(message.author.id);
						setTimeout(() => {
							// Removes the user from the set after a minute
							talkedRecently2.delete(message.author.id);
						}, 60000);
					}
				}
				break;
			case 'newplace':
				if (message.author.id == ADMINID) {
					message.channel.sendMessage("can do, boss")
					bot.user.setActivity("live from " + places[getRandomInt(places.length)], {
						type: "STREAMING",
						url: "https://www.twitch.tv/angrycupocider"
					});
				} else {
					if (talkedRecently2.has(message.author.id)) {
						message.channel.sendMessage("Wait 1 minute before getting typing this again. - " + message.author);
					} else {
						// the user can type the command ... your command code goes here :)
						bot.user.setActivity("live from " + places[getRandomInt(places.length)], {
							type: "STREAMING",
							url: "https://www.twitch.tv/angrycupocider"
						});
						// Adds the user to the set so that they can't talk for a minute
						talkedRecently2.add(message.author.id);
						setTimeout(() => {
							// Removes the user from the set after a minute
							talkedRecently2.delete(message.author.id);
						}, 60000);
					}
				}
				break;
			case 'newstream':
				if (message.author.id == ADMINID) {
					message.channel.sendMessage("can do, boss")
					bot.user.setActivity("live from " + places[getRandomInt(places.length)], {
						type: "STREAMING",
						url: "https://www.twitch.tv/angrycupocider"
					});
				} else {
					if (talkedRecently2.has(message.author.id)) {
						message.channel.sendMessage("Wait 1 minute before getting typing this again. - " + message.author);
					} else {
						// the user can type the command ... your command code goes here :)
						bot.user.setActivity("live from " + places[getRandomInt(places.length)], {
							type: "STREAMING",
							url: "https://www.twitch.tv/angrycupocider"
						});
						// Adds the user to the set so that they can't talk for a minute
						talkedRecently2.add(message.author.id);
						setTimeout(() => {
							// Removes the user from the set after a minute
							talkedRecently2.delete(message.author.id);
						}, 60000);
					}
				}
				break;
			case 'sendjams':
				message.channel.sendMessage('jam list provided by jackboi, but you can suggest jams! send jack a youtube link of a jam and see if he wants to add it!')
				message.channel.sendMessage(jams[getRandomInt(jams.length)]);
				message.channel.sendMessage('please note: jams are not commonly updated by jackboi, and thus you would be better off asking for the link using the command !idiot allthejams');
				break;
			case 'givejams':
				message.channel.sendMessage('jam list provided by jackboi, but you can suggest jams! send jack a youtube link of a jam and see if he wants to add it!')
				message.channel.sendMessage(jams[getRandomInt(jams.length)]);
				message.channel.sendMessage('please note: jams are not commonly updated by jackboi, and thus you would be better off asking for the link using the command !idiot allthejams');
				break;
			case 'sendjam':
				message.channel.sendMessage('jam list provided by jackboi, but you can suggest jams! send jack a youtube link of a jam and see if he wants to add it!')
				message.channel.sendMessage(jams[getRandomInt(jams.length)]);
				message.channel.sendMessage('please note: jams are not commonly updated by jackboi, and thus you would be better off asking for the link using the command !idiot allthejams');
				break;
			case 'givejam':
				message.channel.sendMessage('jam list provided by jackboi, but you can suggest jams! send jack a youtube link of a jam and see if he wants to add it!')
				message.channel.sendMessage(jams[getRandomInt(jams.length)]);
				message.channel.sendMessage('please note: jams are not commonly updated by jackboi, and thus you would be better off asking for the link using the command !idiot allthejams');
				break;
			case 'jam':
				message.channel.sendMessage('jam list provided by jackboi, but you can suggest jams! send jack a youtube link of a jam and see if he wants to add it!')
				message.channel.sendMessage(jams[getRandomInt(jams.length)]);
				message.channel.sendMessage('please note: jams are not commonly updated by jackboi, and thus you would be better off asking for the link using the command !idiot allthejams');
				break;
			case 'jams':
				message.channel.sendMessage('jam list provided by jackboi, but you can suggest jams! send jack a youtube link of a jam and see if he wants to add it!')
				message.channel.sendMessage(jams[getRandomInt(jams.length)]);
				message.channel.sendMessage('please note: jams are not commonly updated by jackboi, and thus you would be better off asking for the link using the command !idiot allthejams');
				break;
			case 'coldfeet':
				if (message.author.id == ADMINID) {
					message.channel.sendMessage("can do, boss")
					bot.user.setActivity("live from " + places[0], {
						type: "STREAMING",
						url: "https://www.twitch.tv/angrycupocider"
					});
				} else {
					message.channel.sendMessage("leave me alone")
				}
				break;
			case 'streamfrom':
				args.shift()
				bot.user.setActivity(args.join(" "), {
					type: "STREAMING",
					url: "https://www.twitch.tv/angrycupocider"
				});
				message.channel.sendMessage("now set status to \"Streaming " + args.join(" ") + "\"")
				break;
			case 'getfile':
				args.shift()
				message.channel.send("file found! here\'s your file", { files: ["./botfiles/" + args.join(" ")] }).catch(error => {
					message.channel.send("error: file does not exist or is too large to upload.")
				})
				break;
			case 'dir':
				filecount = 0
				fs.writeFile("filemem.txt", " ", (err) => {
    					if (err) throw err;
				}); 
				fs.readdir(directoryPath, function (err, files) {
   					if (err) {
        					return console.log('Unable to scan directory: ' + err);
    					}
					files.forEach(function (file) {
        					filecount++
						fs.appendFile('filemem.txt', "\n" + file, (err) => {
    							if (err) throw err;
						});
    					});
					message.channel.send("process complete. " + filecount + " file(s) were scanned.", { files: ["filemem.txt"] })
				});
				break;
			case 'printdir':
				fs.writeFile("filemem.txt", " ", (err) => {
    					if (err) throw err;
				});
				fs.readdir(directoryPath, function (err, files) {
   					if (err) {
        					return console.log('Unable to scan directory: ' + err);
    					}
					files.forEach(function (file) {
        					fs.appendFile('filemem.txt', "\n" + file, (err) => {
    							if (err) throw err;
						});
    					});
					fs.readFile('filemem.txt', 'utf8', function(err, data) {
						if (err) throw err;
						message.channel.sendMessage(data)
					});
				});
				break;
			case 'matrix':
				if (message.author.id == ADMINID) {
					message.channel.sendMessage("can do, boss")
					bot.user.setActivity("live from within the matrix", {
						type: "STREAMING",
						url: "https://www.twitch.tv/angrycupocider"
					});
				} else {
					message.channel.sendMessage("leave me alone")
				}
				break;
			case 'jamsadmin':
				if (message.author.id == ADMINID) {
					for (i=0;i<jams.length;i++) {
						message.channel.sendMessage(jams[i])
					}
				}
				break;
			case 'allthejams':
				message.channel.sendMessage('jam list provided by jackboi, but you can suggest jams! send jack a youtube link of a jam and see if he wants to add it!')
				message.channel.sendMessage('https://www.youtube.com/playlist?list=PLH88srMwnAUX5FKNRQvlUtD5NReZDAqxR')
				break;
			case 'allthejam':
				message.channel.sendMessage('jam list provided by jackboi, but you can suggest jams! send jack a youtube link of a jam and see if he wants to add it!')
				message.channel.sendMessage('https://www.youtube.com/playlist?list=PLH88srMwnAUX5FKNRQvlUtD5NReZDAqxR')
				break;
			case 'alljams':
				message.channel.sendMessage('jam list provided by jackboi, but you can suggest jams! send jack a youtube link of a jam and see if he wants to add it!')
				message.channel.sendMessage('https://www.youtube.com/playlist?list=PLH88srMwnAUX5FKNRQvlUtD5NReZDAqxR')
				break;
			case 'alljam':
				message.channel.sendMessage('jam list provided by jackboi, but you can suggest jams! send jack a youtube link of a jam and see if he wants to add it!')
				message.channel.sendMessage('https://www.youtube.com/playlist?list=PLH88srMwnAUX5FKNRQvlUtD5NReZDAqxR')
				break;
			case 'playlistjams':
				message.channel.sendMessage('jam list provided by jackboi, but you can suggest jams! send jack a youtube link of a jam and see if he wants to add it!')
				message.channel.sendMessage('https://www.youtube.com/playlist?list=PLH88srMwnAUX5FKNRQvlUtD5NReZDAqxR')
				break;
			case 'playlistjam':
				message.channel.sendMessage('jam list provided by jackboi, but you can suggest jams! send jack a youtube link of a jam and see if he wants to add it!')
				message.channel.sendMessage('https://www.youtube.com/playlist?list=PLH88srMwnAUX5FKNRQvlUtD5NReZDAqxR')
				break;
			case 'jamsplaylist':
				message.channel.sendMessage('jam list provided by jackboi, but you can suggest jams! send jack a youtube link of a jam and see if he wants to add it!')
				message.channel.sendMessage('https://www.youtube.com/playlist?list=PLH88srMwnAUX5FKNRQvlUtD5NReZDAqxR')
				break;
			case 'jamplaylist':
				message.channel.sendMessage('jam list provided by jackboi, but you can suggest jams! send jack a youtube link of a jam and see if he wants to add it!')
				message.channel.sendMessage('https://www.youtube.com/playlist?list=PLH88srMwnAUX5FKNRQvlUtD5NReZDAqxR')
				break;
			case 'listjams':
				message.channel.sendMessage('jam list provided by jackboi, but you can suggest jams! send jack a youtube link of a jam and see if he wants to add it!')
				message.channel.sendMessage('https://www.youtube.com/playlist?list=PLH88srMwnAUX5FKNRQvlUtD5NReZDAqxR')
				break;
			case 'listjam':
				message.channel.sendMessage('jam list provided by jackboi, but you can suggest jams! send jack a youtube link of a jam and see if he wants to add it!')
				message.channel.sendMessage('https://www.youtube.com/playlist?list=PLH88srMwnAUX5FKNRQvlUtD5NReZDAqxR')
				break;
			case 'jamslist':
				message.channel.sendMessage('jam list provided by jackboi, but you can suggest jams! send jack a youtube link of a jam and see if he wants to add it!')
				message.channel.sendMessage('https://www.youtube.com/playlist?list=PLH88srMwnAUX5FKNRQvlUtD5NReZDAqxR')
				break;
			case 'jamlist':
				message.channel.sendMessage('jam list provided by jackboi, but you can suggest jams! send jack a youtube link of a jam and see if he wants to add it!')
				message.channel.sendMessage('https://www.youtube.com/playlist?list=PLH88srMwnAUX5FKNRQvlUtD5NReZDAqxR')
				break;
			case 'recentjams':
				message.channel.sendMessage("most recently added jams:")
				message.channel.sendMessage("1. " + jams[jams.length-1])
				message.channel.sendMessage("2. " + jams[jams.length-2])
				message.channel.sendMessage("3. " + jams[jams.length-3])
				message.channel.sendMessage("4. " + jams[jams.length-4])
				message.channel.sendMessage("5. " + jams[jams.length-5])
				message.channel.sendMessage('please note: jams are not commonly updated by jackboi, and thus you would be better off asking for the link using the command !idiot jamlist');
				break;
			case 'github':
				message.channel.sendMessage("github page: https://github.com/quickkennedy/JackBot")
				break;
			case 'ping':
				//message.channel.sendMessage("<@695326552027693116>")
				break;
			case 'fuckmelikeacumslut':
				message.channel.send("yes please")
				break;
			}
				
	} else {
		if ((message.content.split(" ")[0] + " " == PREFIX && message.author.id == 609870094834597906) || (message.content.split(" ")[0] + " " == PREFIX2 && message.author.id == 609870094834597906)) {
			message.channel.sendMessage(prevauth + " error 1: cannot respond to self")	
		}
	}
})

bot.login(token);


const funmods = [
	{
		name:'Better English by Bucket Crust',
		link:'https://gamebanana.com/gamefiles/9715',
		desc:'adds \'better english\'',
		game:'tf2'
	},
	{
		name:'Dapper Disguise Joker by Whynotll83',
		link:'https://gamebanana.com/skins/173088',
		desc:'replaces dapper disquise with jokers face.',
		game:'tf2'
	},
	{
		name:'Windows and Macintosh Case (Vista Logo) by Zube1337 and Alfa1337',
		link:'https://gamebanana.com/skins/113208',
		desc:'replaces red and blu\'s intelligence briefcase with the Mac and Windows Vista logos.',
		game:'tf2'
	},
	{
		name:'STBlackST Dispenser (Spy humpin in mah Dispenser) by SSG3',
		link:'https://gamebanana.com/skins/172754',
		desc:'replaces dispenser screen with spy humping air in space beside a control point. also nice chiptune music apparently?',
		game:'tf2'
	},
	{
		name:'CJ by NootNoot64 and o0Cristian0o',
		link:'https://gamebanana.com/skins/172510',
		desc:'replaces demoman with CJ from gta san andreas.',
		game:'tf2'
	},
	{
		name:'Creeper, Aw Pan! by witherwinter',
		link:'https://gamebanana.com/skins/172066',
		desc:'replaces pan texture with \"creeper, aww man\".',
		game:'tf2'
	},
	{
		name:'Duke Nukem 3D Model / Skin (Soldier) by trevor04021 and Russificator',
		link:'https://gamebanana.com/skins/171557',
		desc:'replaces soldier with duke nukem.',
		game:'tf2'
	},
	{
		name:'Bulk Bogan playermodel (for Soldier) by Aftroid, Vargskelethor Joel, and MDickie',
		link:'https://gamebanana.com/skins/171102',
		desc:'replaces soldier with bulk bogan.',
		game:'tf2'
	},
	{
		name:'Minecraft Shovels by POOtato, Flame the Maniaac, water sheep, joergen 1 and 2, and boat cow',
		link:'https://gamebanana.com/skins/171333',
		desc:'replaces market gardener with diamond or gold shovel and stock shovel with stone shovel.',
		game:'tf2'
	},
	{
		name:'iron pickaxe from minecraft by POOtato, HAWKSHADOW731, HelloAlvin, Agent_Lights, and Allen Scroll',
		link:'https://gamebanana.com/skins/169488',
		desc:'replaces escape plan with diamond pickaxe and equalizer with diamond, gold, iron, austrailium, or newzealium pickaxes. damn thats alot of pickaxes.',
		game:'tf2'
	},
	{
		name:'The Action Hale (V3) by b0tkllr, Ducksink, and HAWKSHADOW741',
		link:'https://gamebanana.com/skins/171019',
		desc:'replaces saxxy with saxton hale action figure',
		game:'tf2'
	},
	{
		name:'Pyrocynical Pyro Disguise Mask by StudBlock and Frostie_foot_prints',
		link:'https://gamebanana.com/skins/169943',
		desc:'replaces pyro disquise mask with pyrocynical disquise mask',
		game:'tf2'
	},
	{
		name:'Bob Ross Engineer by LimeTime, Rozzy, Da Xing, and Wilson',
		link:'https://gamebanana.com/skins/168172',
		desc:'replaces Texans Ten Gallon with Bob Ross\' afro, Tools Of The Trade with Bob Ross\' signature shirt, Necro Smasher with paint brush, PDA with notepad, and most if not all engineer voice lines with Bob Ross ones.',
		game:'tf2'
	},
]
const places = [
	"antarctica",
	"alabama",
	"alaska",
	"arizona",
	"arkansas",
	"california",
	"colorado",
	"connecticut",
	"delaware",
	"florida",
	"georgia",
	"hawaii",
	"idaho",
	"illinois",
	"indiana",
	"iowa",
	"kansas",
	"kentucky",
	"louisiana",
	"maine",
	"maryland",
	"massachusetts",
	"michigan",
	"minnesota",
	"mississippi",
	"missouri",
	"montana",
	"nebraska",
	"nevada",
	"new hampshire",
	"new jersey",
	"new mexico",
	"new york",
	"north carolina",
	"north dakota",
	"ohio",
	"oklahoma",
	"oregon",
	"pennsylvania",
	"rhode island",
	"south carolina",
	"south dakota",
	"tennessee",
	"texas",
	"utah",
	"vermont",
	"virginia",
	"washington",
	"west virginia",
	"wisconsin",
	"wyoming",
	"lower manatoba",
	"nowhere",
	"the treehouse",
	"vault 111",
	"junktown",
	"the bunker",
	"the couch",
	"necropolis",
	"vault 12",
	"vault 13",
	"vault 15",
	"ikea",
	"the dungeon",
	"diamond city",
	"american canada",
	"alaska #2",
	"that one state",
	"mars",
	"bird control headquarters",
	"the moon",
	"within the matrix",
	"Streaming live from",
	"live Streaming",
	"hell",
	"the robot utopia",
	"robot hell",
	"paris",
	"a very real place",
	"your livingroom",
	"an ikea near you",
	"a walmart near you",
	"the toilet",
	"my crib",
	"the hood",
	"[place here]",
	"canadia",
	"mother russia",
	"your bedroom",
	"your base",
	"angel island",
	"school",
	"jacks computer",
	"github",
	"not discord hq",
	"cornhub",
	"e621.net",
	"within you",
	"tokyo-to",
	"the garage",
	"a theater near you",
	"ctf_2fort",
	"plr_hightower",
	"pl_upward",
	"koth_harvest",
	"dm_mariokart",
	"kogane-cho",
	"shibuya-cho",
	"benten-cho",
	"highway zero",
	"sky-dinosaurian square",
	"99th street",
	"the rokkaku-dai heights",
	"the skyscraper district",
	"pharaoh park",
	"kibogaoka hill",
	"the fortified residential zone",
	"nowhere",
	"everywhere",
	"the middle of nowhere",
	"plr_highertower",
	"anywhere",
	"/b/",
	"/pol/",
	"/cm/",
	"/y/",
	"/v/",
	"tftv",
	"furaffinity",
	"r/yaoi",
	"r/gfur",
	"r/ghost_hands",
	"r/theherooftwinks",
	"the home depot",
	"walmart",
	"the mushroom kingdom",
	"bob-omb battlefield",
	"whomp\'s fotress",
	"jolly roger bay",
	"cool, cool mountain",
	"big boo\'s haunt",
	"hazy maze cave",
	"lethal lava land",
	"shifting sand land",
	"dire, dire docks",
	"snowman\'s land",
	"wet-dry world",
	"tall, tall mountain",
	"tiny-huge island",
	"tick tock clock",
	"rainbow ride"
]
const realtips = [
        "As a Scout, jump while in mid-air to change direction and avoid enemy fire.",
        "As a Scout, you capture control points and push payload carts twice as fast as other classes.",
        "As a Scout, you're most effective when you stay moving and use your speed to your advantage.",
        "As a Scout, your Pistol is great for picking off enemies at a distance.",
        "As a Scout, your Scattergun deals high-damage at point-blank range, killing most classes with 2 hits.",
        "As a Scout, firing the Force-A-Nature in mid-air will knock you back away from the direction you're aiming; you can use this to extend the range of your jumps.",
        "As a Scout, take advantage of alternative routes to flank enemies for surprise attacks.",
        "As a Scout, when wielding the Sandman, use mouse2 to launch a baseball at distant enemies to slow them.",
        "As a Scout, equipping the Sandman will reduce your maximum health. Stick with your bat if survival is a top priority.",
        "As a Scout, hitting nearby foes with the Force-A-Nature will push them away from you.",
        "As a Scout, the further your Sandman baseball travels, the longer it will slow any enemy it hits - up to a maximum of 7 seconds.",
        "As a Scout, the Sandman's baseball cannot stun foes at close range, but it will completely stun an enemy at max range.",
        "As a Scout, use the Bonk! Atomic Punch energy drink to traverse dangerous terrain and absorb Sentry Gun fire for teammates.",
        "As a Scout, use Mad Milk to douse flames on yourself and on your teammates.",
        "As a Scout, the Shortstop deals more damage than the Scattergun at mid-range.",
        "As a Scout, if you have the Candy Cane equipped, killed foes will always drop free health kits, regardless of which weapon you used.",
        "As a Scout, be careful when using Crit-A-Cola. Saving it for surprise attacks and taking advantage of your speed can help you avoid taking extra damage.",
        "As a Scout, you and your teammates regain lost health when hitting enemies drenched in Mad Milk. Initiate fights with it to improve your team's survivability.",
        "As a Scout, the Boston Basher causes foes to bleed when struck, but missing will cause self-inflicted bleeding. Bleeding can be quickly cured with health kits.",
        "As a Scout, the Sun-on-a-Stick deals critical damage to burning foes, but is otherwise weaker than the Bat. Work with friendly Pyros to make full use of it.",
        "As a Scout, a Fan O'War hit turns subsequent attacks against the target into mini-crits. Use teammates and other weapons to get the most from the damage boost.",
        "As a Scout, deploying the Atomizer will allow you to mini-crit enemies while airborne.",
        "As a Scout, you can utilize both the Force-A-Nature's knockback and Atomizer's triple jump for a quadruple jump combination!",
        "As a Scout, the Atomizer will allow you to perform a triple jump! Use it to outmaneuver enemies and access hard-to-reach areas!",
        "As a Scout, the Winger inflicts more damage than the Pistol, but this is offset by its reduced magazine size. Use the Winger at close range in order to ensure that you hit your target!",
        "As a Scout, the Shortstop is very effective at medium to long range, allowing you to maintain your distance from dangerous enemies.  You can also hit mouse2 to push enemies away!",
        "As a Scout, the Wrap Assassin's secondary attack (mouse2) can be used to inflict bleeding damage on enemies! Use it to damage enemies from a distance.",
	"As a Sniper, the longer you spend zoomed while scoped, the more damage the shot will do.",
        "As a Sniper, aim for the head in order to inflict critical damage.",
        "As a Sniper, zoom with the Sniper Rifle by hitting mouse2.",
        "As a Sniper, use your secondary Submachine Gun to deal with nearby enemies.",
        "As a Sniper, a fully charged Sniper Rifle head shot can kill most classes instantly.",
        "As a Sniper, your shot will usually miss if the Huntsman is pulled back longer than five seconds. Reset it by hitting mouse2.",
        "As a Sniper, Jarate can reveal hidden Spies.",
        "As a Sniper, the Razorback breaks after being stabbed. Grab a new one from a resupply locker.",
        "As a Sniper, your Razorback emits a loud electric sound when a Spy attempts to backstab you. Listen for it!",
        "As a Sniper, use Jarate to douse flames on yourself and on teammates.",
        "As a Sniper, all hits on enemies who have been doused with Jarate are mini-crits.",
        "As a Sniper, the Tribalman's Shiv causes your target to bleed when hit. This can be useful for tracking down Spies.",
        "As a Sniper, the Sydney Sleeper applies Jarate to enemies when hit by scoped shots. It can also extinguish burning teammates.",
        "As a Sniper, your Jarate and Bushwacka make the perfect combo. Soak the enemy in Jarate and hit them with the Bushwacka for an automatic critical hit.",
        "As a Sniper, the Sydney Sleeper can kill most classes in one shot at 100% charge.",
        "As a Sniper, the Huntsman is very effective at short to medium range despite its inability to zoom in.",
        "As a Sniper, the Sydney Sleeper will apply a Jarate effect to an enemy based on how long you've been scoped, so take your time when shooting.",
        "As a Sniper, the Sydney Sleeper can coat an enemy with Jarate upon a successful hit. This makes it an effective weapon when supporting your team from afar even if you do not kill the enemy with your first shot.",
        "As a Sniper, the Bazaar Bargain's charge rate is initially lower, but you can increase it by collecting heads. To collect heads, get a scoped headshot kill.",
        "As a Sniper with the Machina, consider equipping the Submachine Gun to handle enemies in situations where scoping in for a shot is too difficult.",
        "As a Sniper, the Shahanshah has increased damage when your health is below 50%.  Use it to counter enemies harassing you once you've taken damage.",
        "As a Soldier, you can rocket jump to great heights or distances by simultaneously jumping and firing a rocket on nearby surfaces; crouching as you jump will increase the momentum you gain from the rocket.",
        "As a Soldier, aim rockets at an enemy's feet in order to ensure that they can't avoid the explosion damage.",
        "As a Soldier, make sure you keep your Rocket Launcher loaded. Press r to reload manually or enable auto-reloading in Advanced Multiplayer Options.",
        "As a Soldier, you risk taking splash damage when firing rockets at nearby enemies. Try switching weapons to avoid hurting yourself.",
        "As a Soldier, consider damaging yourself in safe situations if a Medic is healing you. UberCharge builds slower while you're overhealed (except during setup time).",
        "As a Soldier, your rockets have strong knock back. Use this to jostle enemies or knock them airborne.",
        "As a Soldier, use your Shotgun to conserve rockets and avoid waiting for your Rocket Launcher to reload in the middle of combat.",
        "As a Soldier, the Direct Hit's rockets have a very small blast radius. Aim directly at your enemies to maximize damage!",
        "As a Soldier, the Buff Banner's rage meter will reset if you die. Don't be afraid to use it for yourself if you need to make a push or escape!",
        "As a Soldier, activating the Buff Banner provides mini-crits to you and nearby teammates, which can swiftly turn the tide of a difficult battle.",
        "As a Soldier, the Escape Plan provides a speed bonus when your health is low. Use it to escape dangerous areas and dodge enemy fire!",
        "As a Soldier, the Equalizer does a lot of damage when you're at very low health, but it deals less than the Shovel when you're at high health.",
        "As a Soldier, Medics heal you at a significantly reduced rate while you actively wield the Equalizer or Escape Plan.",
        "As a Soldier, remember that the Half-Zatoichi attacks instantly kill any enemy that is also wielding one!",
        "As a Soldier, the Black Box heals you whenever you damage an enemy with a rocket. Use it when friendly Medics and health kits are scarce.",
        "As a Soldier, the Gunboats greatly reduce health loss from rocket jumps. Use them when positioning and mobility are especially important.",
        "As a Soldier, activating the Battalion's Backup provides damage reduction and crit immunity to yourself and nearby teammates. Be mindful of the effect radius when protecting teammates!",
        "As a Soldier, activating the Concheror lets you and your teammates heal themselves by damaging enemies. Use it to improve your team's survivability in fights.",
        "As a Soldier, the Frying Pan does identical damage as the Shovel, but is a lot louder. Don't use it when you are trying to stay hidden, as the distinct sound will give your position away!",
        "As a Soldier, hitting a teammate with the Disciplinary Action will increase both your and your teammate's speed dramatically for a few seconds! Use it on slower classes like other Soldiers and Heavies in order to reach the front lines faster!",
        "As a Soldier, use mouse2 when wielding the Cow Mangler 5000 to fire a charged shot, dealing extra damage and setting the enemy briefly on fire. Be careful! A charged shot entirely depletes the Cow Mangler 5000's ammunition.",
        "As a Soldier, the Mantreads dramatically reduce weapon knock back. Use them in order to avoid being pushed back by the Force-A-Nature, explosives or Sentry Guns!",
        "As a Soldier, the Black Box only loads three rockets at any time.  Be sure to make each shot count, or you may be left vulnerable.",
        "As a Soldier, rocket jump to quickly close the distance between you and your enemies, and then use the Market Gardener to finish them off as you land.",
        "As a Soldier, consider using your Shotgun against enemy Pyros that are reflecting your rockets.",
        "As a Soldier, the Righteous Bison can hit the same enemy multiple times, and will hit the most times on enemies who are moving away from the projectile. Use it to punish retreating enemies!",
        "As a Demoman, when using the Stickybomb Launcher hit mouse to fire stickybombs and then use mouse2 to detonate them later.",
        "As a Demoman, when you use the Stickybomb Launcher or Scottish Resistance, note that the longer you hold down the fire button the further the shot will go.",
        "As a Demoman, time the detonation of your stickybombs as you jump over them to propel yourself in the desired direction!",
        "As a Demoman, shoot stickybombs onto walls and ceilings where they're hard to spot.",
        "As a Demoman, you can detonate stickybombs with mouse2 at any time, regardless of which weapon you're currently using.",
        "As a Demoman, crouch when preparing for a stickybomb jump in order to achieve maximum height.",
        "As a Demoman, use your Grenade Launcher for direct combat. Grenades detonate upon impact with an enemy unless they touch the ground first.",
        "As a Demoman, your Bottle does the same amount of damage whether it is smashed open or not.",
        "As a Demoman, the Scottish Resistance is great for defense. Place multiple groups of stickybombs in order to defend a lot of territory. Your stickybombs can also destroy enemy stickybombs!",
        "As a Demoman, when using the Scottish Resistance keep a line of sight to your stickybombs so you can detonate them when needed.",
        "As a Demoman, the Chargin' Targe's explosive and fire damage resistance in addition to its charge ability complement the Eyelander's lower max health and inability to cause random critical hits.",
        "As a Demoman, the Chargin' Targe's charge ability doesn't grant a critical hit until near the end of the charge. Your weapon will glow when the time is right!",
        "As a Demoman, when using the Chargin' Targe you can't change direction during a charge. Try to line charges up with where an enemy will be rather than where an enemy is.",
        "As a Demoman, the Chargin' Targe's charge ability is also perfect for quick getaways!",
        "As a Demoman, your Bottle has no negative attributes when compared to the health reduction penalty of the Eyelander. Use your Bottle if survival is a priority.",
        "As a Demoman, collect heads by killing enemies with the Eyelander.  Each head increases your maximum health and also gives you a speed boost!",
        "As a Demoman, the only way to recharge your Ullapool Caber is to visit a resupply locker. Make every hit with it count!",
        "As a Demoman, when using the Scottish Resistance remember that you can see your stickybombs through walls and floors and can detonate them from any range. Use this to your advantage.",
        "As a Demoman, remember that a successful hit with Half-Zatoichi on any enemy wielding the same weapon will result in an instant kill.",
        "As a Demoman, use the Loch-n-Load to inflict additional damage against slower moving classes and buildings. Aim carefully however! You only have three shots before you must reload, and you will only inflict damage on a direct hit.",
        "As a Demoman, use the Ullapool Caber when surrounded by enemies. The resulting explosion will inflict heavy damage on all nearby opponents.",
        "As a Demoman, if you're paired with a Medic, take advantage of safe opportunities to damage yourself in order to build an UberCharge faster.",
        "As a Demoman, your Eyelander will collect the stored heads from a slain enemy Demoman.",
        "As a Demoman, you can use the Chargin' Targe, Splendid Screen, or Tide Turner to launch off small ramps and go flying! Use it to surprise enemies by charging over their heads.",
        "As a Demoman, the amount of heads you collect with your Eyelander will increase the damage your shield bash does.",
        "As a Demoman, you can use the Sticky Jumper to get to the front lines quickly. Be careful! It inflicts no damage at all, requiring you to rely on your primary and melee weapons!",
        "As a Demoman, the Scotsman's Skullcutter will reduce your speed.  Consider pairing it with the Chargin' Targe, Splendid Screen, or Tide Turner in order to offset the speed reduction.",
        "As a Medic, use your Medi Gun to heal teammates, and buff them up to 150% of their normal health.",
        "As a Medic, fill your UberCharge by healing teammates and then hit mouse2 to become invulnerable for a short time.",
        "As a Medic, your UberCharge makes both you and your Medi Gun target invulnerable for a short time.",
        "As a Medic, you can fill your UberCharge faster by healing teammates who are more injured.",
        "As a Medic, keep alert for teammates calling for your help. Use the Medic arrows onscreen to find them.",
        "As a Medic, your UberCharge will build much faster during setup time.",
        "As a Medic, you cannot capture a Control Point or pick up the Intelligence while invulnerable.",
        "As a Medic, heal Soldiers and Demomen at the beginning of a round in order that they can use the extra health to rocket or sticky jump across the map.",
        "As a Medic, you can UberCharge without a heal target in order to save yourself in dire situations.",
        "As a Medic, it's better to use an UberCharge too early than lose it by being killed.",
        "As a Medic, fool the enemy by using the \"UberCharge ready!\" voice command in order to pretend you have an UberCharge prepared.",
        "As a Medic, you can keep multiple targets overhealed allowing them to absorb more damage.",
        "As a Medic, your Bonesaw swings 20% faster than the Ubersaw. Use the Bonesaw in defensive situations in which an UberCharge isn't as important.",
        "As a Medic, remember that syringes travel in arcs and have a travel time. Lead your targets and aim higher in order to land successful hits.",
        "As a Medic, remember that critical hits have no effect on Sentry Guns. Use the Kritzkrieg in areas full of players instead.",
        "As a Medic, the Ubersaw will still increase your UberCharge meter if the enemy being hit is a Scout phasing with Bonk! Atomic Punch.",
        "As a Medic, using UberCharge to be invulnerable to damage does not mean you are free from harm. Watch out for the Pyro's compression blast and explosive knock back.",
        "As a Medic, when attacking with an UberCharge, try to get Sentry Guns to target you so that your teammates can get close enough to destroy them.",
        "As a Medic, your default Syringe Gun automatically heals you over time by 3 health per second compared to the Blutsauger's 1 health per second. Use the Syringe Gun when playing defensively, as the passive healing rate will provide you with an advantage.",
        "As a Medic, the Ubersaw will not increase your UberCharge meter if the enemy being hit is a disguised Spy.",
        "As a Medic, the Kritzkrieg's taunt heals your health. Use it when there are no health kits or other Medics nearby.",
        "As a Medic, pay attention to other Medics on your team. Keeping multiple Medics alive will help keep the rest of the team alive, too.",
        "As a Medic, taunting with the Amputator will heal all nearby teammates.",
        "As a Medic, your Crusader's Crossbow does damage to enemies or heals teammates upon a successful hit.",
        "As a Medic, timing is everything. If it is safe to do so, withhold your UberCharge until just the right moment in order to maximize its effectiveness.",
        "As a Medic, a successful hit with the Blutsauger will restore three health as well as damage the enemy. Use it when injured, when retreating, when on fire or when playing offensively.",
        "As a Medic, the Vita-Saw will retain up to 60% of your UberCharge meter if you die before activating it. This can be very useful when attempting to assault a strongly-fortified position with only a small amount of time remaining.",
        "As a Medic, the Solemn Vow allows you to see the health of enemies; use this information to identify weakened enemies to your team.",
        "As a Medic, the Quick-Fix heals damage rapidly, making it useful for healing multiple teammates quickly.",
        "As a Medic, if you have been separated from your team, call out for a Medic yourself by pressing %voicemenu 0 0% to alert nearby teammates to your position.",
        "As a Medic, the Overdose increases your speed proportionally to the amount in your UberCharge meter! Equip the Overdose when you need to reach the front lines or make a quick escape!",
        "As a Heavy, hold mouse2 in order to keep your Minigun spinning, ready for approaching enemies.",
        "As a Heavy, you're a great Medic buddy. Keep a clear line of sight to your Medic to keep the Medi Gun on you.",
        "As a Heavy, your Minigun chews up a lot of ammo. Pick up fallen ammo pickups to refill your supply.",
        "As a Heavy, your Sandvich can be a lifesaver. Try to find a safe place before eating your Sandvich or you may be rudely interrupted.",
        "As a Heavy, you have more health than any other class on your team. Use this to your advantage by drawing enemy fire and allowing the other classes to flank the enemy.",
        "As a Heavy, you don't lose momentum while spinning up your Minigun in the air. Use this to surprise enemies around corners!",
        "As a Heavy, use your Sandvich to heal up! Use mouse2 to throw it on the ground for friendly players to pick up as health. Don't worry, it comes with a plate to keep it clean.",
        "As a Heavy, your fists swing faster than the Killing Gloves of Boxing. Equip them with the Sandvich to quickly dispatch lunchtime attackers. ",
        "As a Heavy, the Sandvich can be dropped by hitting mouse2. A dropped Sandvich can heal a teammate similarly to a health kit.",
        "As a Heavy, be sure to get another Sandvich if you drop yours. Sandviches can be replenished from health kits, but only if your current health is full.",
        "As a Heavy, your Minigun's spin-up time can waste the Killing Gloves of Boxing's five-second critical buff. Carry your Shotgun with the K.G.B. in order to maximize the critical boost!",
        "As a Heavy, the Sandvich and the Buffalo Steak Sandvich can be dropped by hitting mouse2 and can extinguish burning teammates. Use this to save your Medic.",
        "As a Heavy, the Brass Beast inflicts additional damage but decreases your mobility while in use. Use it when playing defensively, as you will find it more difficult to successfully pursue fleeing enemies.",
        "As a Heavy, the Dalokohs Bar's temporary health increase can be a powerful advantage in battle.",
        "As a Heavy, the Fists of Steel's ranged weapon damage reduction helps to counter the threat of enemy Snipers. Use them to protect yourself while moving through open areas!",
        "As a Heavy, the Fists of Steel will dramatically reduce the amount of damage taken from ranged sources while increasing the amount of damage from melee weapons. Use them to push through enemy lines or to close the distance with the enemy.",
        "As a Heavy, the Tomislav not only spins up more quickly than the Minigun, it does so silently! Use it to ambush enemies and take them by surprise!",
        "As a Heavy, the Natascha will slow down enemies it hits. Use it to support your teammates and increase their damage output.",
        "As a Heavy, the Eviction Notice increases your melee attack speed and gives you a speed boost when you hit an enemy.  Use them for more opportunities to hit faster moving classes!",
        "As a Heavy, the Holiday Punch's critical hits will cause the enemy to burst into laughter, thereby leaving them defenseless! Use them in order to incapacitate enemies and assist your team to eliminate key threats.",
        "As a Pyro, your Flamethrower does more damage the closer you are to the enemy.",
        "As a Pyro, ambush enemies in order to ensure that you engage them at close range so that your Flamethrower will inflict maximum damage. Use corners and alcoves to your advantage.",
        "As a Pyro, your Flamethrower chews up a lot of ammo. Pick up fallen ammo pickups to refill your supply.",
        "As a Pyro, switch to your Shotgun or Flare Gun if enemies retreat beyond the short range of your Flamethrower.",
        "As a Pyro, you can often set enemies on fire and retreat, leaving them to die from the burning.",
        "As a Pyro, your Flamethrower can ignite an enemy Spy if he is cloaked, or is disguised as a member of your team. Spy check teammates that look or act suspicious!",
        "As a Pyro, utilize the bonus damage on the Axtinguisher by igniting your foes before attacking.",
        "As a Pyro, help protect an Engineer's Sentry Gun by using the Flamethrower's compression blast (mouse2) to reflect explosive projectiles and check for enemy Spies.",
        "As a Pyro, you can neutralize an UberCharge by pushing the Medic and his heal target away from each other by using the Flamethrower's compression blast (mouse2).",
        "As a Pyro, push enemies out of your way using the Flamethrower's compression blast with mouse2.",
        "As a Pyro, the Flamethrower's compression blast (mouse2) can extinguish burning teammates.",
        "As a Pyro, you cannot be ignited by fire-based weapons. Use your Shotgun or melee weapons against enemy Pyros in order to counter this.",
        "As a Pyro, the Backburner is very effective when ambushing the enemy because it inflicts critical hits when attacking from behind.",
        "As a Pyro, the Flare Gun can cause critical hits if fired at enemies who are already burning.",
        "As a Pyro, your Flamethrower or Flare Gun will not work underwater, so rely upon your Shotgun or melee weapon.",
        "As a Pyro, use mouse2 when using the Flamethrower in order to let out a blast of compressed air. Use it to reflect incoming projectiles, put out burning teammates, or push enemies back!",
        "As a Pyro, use your Flamethrower on friendly Snipers in order to light their Huntsman arrows on fire. Flaming arrows can ignite the enemy and inflict additional damage.",
        "As a Pyro, use mouse2 to reflect projectiles back at the enemy team!  This includes rockets, grenades, Huntsman arrows, Jarate and more!",
        "As a Pyro, remember that the Flamethrower's compression blast (mouse2) can use up a lot of ammo. Use it only when you need to!",
        "As a Pyro, utilize the Flamethrower's compression blast (mouse2) to push stickybombs out of the way. Help out your Engineers or clear a Control Point!",
        "As a Pyro, the Homewrecker, Maul, and Neon Annihilator can be used to remove enemy Sappers from buildings.",
        "As a Pyro, your Sharpened Volcano Fragment sets enemies on fire upon a successful hit. Use in combination with the Flare Gun in order to inflict substantial damage!",
        "As a Pyro, you can use the Back Scratcher in order to help a Medic build their UberCharge more quickly.",
        "As a Pyro, the Flamethrower's compression blast (mouse2) is a very useful tool. Use it to push enemies, even invulnerable Medics and their buddies, off cliffs or into other environmental hazards.",
        "As a Pyro, the Degreaser inflicts less afterburn damage but allows you to switch weapons almost instantly. This helps you perform deadly combination attacks!",
        "As a Pyro, the Backscratcher inflicts additional damage, but Medics and dispensers will heal you more slowly. Healthpacks will provide you with more health than normal however, so note their locations on the map!",
        "As a Pyro, the Flamethrower's compression blast can be used to counter Demomen using the Chargin' Targe! Time your compression blast correctly, and you can push the Demoman back before he can strike, and then counter-attack!",
        "As a Pyro, the Detonator's flares can be detonated at any time using mouse2. Use the blast radius to hit enemies behind cover, or to set multiple enemies on fire!",
        "As a Pyro, inflicting damage with the Phlogistinator fills the 'Mmmph' meter. Once it is full, activate it using your secondary attack (mouse2) in order to inflict crits for a short time!",
        "As a Pyro, you can use the Manmelter's secondary fire (mouse2) to extinguish teammates that are on fire. For each teammate extinguished you store a critical hit, so save the crits until the opportune moment!",
        "As a Spy, use your Knife to backstab enemies from behind, killing them instantly.",
        "As a Spy, disguise yourself as an enemy with your Disguise Kit. Beware, attacking will remove your disguise.",
        "As a Spy, hit mouse2 to Cloak and become fully invisible for a short period of time.",
        "As a Spy, use your Cloak to get behind enemy lines, and your disguise to move around amongst them.",
        "As a Spy, try to act like an enemy while disguised. Observe where enemy team members are, and disguise as one of them.",
        "As a Spy, place your Electro Sappers on enemy Sentry Guns in order to destroy them. Note that disguises aren't lost when placing Sappers.",
        "As a Spy, your Electro Sappers disable Sentry Guns before destroying them. Sap a Sentry Gun before attacking the Engineer.",
        "As a Spy, call for enemy Medics by hitting %voicemenu 0 0% while disguised.",
        "As a Spy, be careful when using voice commands while disguised. The enemy team will see them said in the text chat by whomever you're disguised as.",
        "As a Spy, the Ambassador does not inflict critical headshots when cooling down. Make each shot precise and timed in order to inflict maximum damage.",
        "As a Spy, try not to be hit by flames when arming the Dead Ringer, or else the flames may hit you again and reveal your location.",
        "As a Spy cloaked with the Dead Ringer, your silhouette won't appear when colliding with enemies for the first few seconds after cloaking.",
        "As a Spy, pick up ammo to recharge your Cloak.  You can even pick up ammo while cloaked with the default Invisibility Watch!",
        "As a Spy, the Cloak and Dagger will only drain if you are moving. Stand still or uncloak in order to regain lost charge.",
        "As a Spy, your silhouette can be seen if you move around while cloaked with the Cloak and Dagger for too long. Find a safe spot to sit and recharge.",
        "As a Spy, the Dead Ringer makes a very loud noise when uncloaking. Find a safe place away from enemies to uncloak.",
        "As a Spy, disguise as your own team by hitting the %disguiseteam% key. Use this in friendly areas or with the Dead Ringer in order to hide your presence from the enemy.",
        "As a Spy, hit %lastdisguise% while already disguised to change the weapon your disguise is holding.",
        "As a Spy, hit %lastdisguise% in order to automatically assume the last disguise you previously used.",
        "As a Spy, you can take enemy Teleporters. Surprise!",
        "As a Spy, bumping into enemies while cloaked makes you slightly visible to everyone.",
        "As a Spy, if you're set on fire while cloaked, the enemy can see you!",
        "As a Spy, use your Revolver to pick off targets that are low on health, or to deal with classes that are dangerous to get near, such as Pyros.",
        "As a Spy, if you are quick, you can stab an Engineer and then sap his Sentry Gun before it turns around and shoots you.",
        "As a Spy, the Dead Ringer significantly reduces the amount of damage taken from all attacks while you are invisible.",
        "As a Spy, avoid taking fall damage while cloaked as it will give away your location!",
        "As a Spy, your Electro Sappers sap both ends of a Teleporter. Try sapping the end that the Engineer isn't guarding.",
        "As a Spy, your Dead Ringer can be used to fake your own death. Try to use it when you're weak, otherwise it may be wasted or too obvious.",
        "As a Spy, reloading your Revolver will mimic the reload action of the weapon carried by your current disguise.",
        "As a Spy, if you're too slow to sap a Sentry Gun after backstabbing an Engineer, you can cloak or hide behind his Dispenser.",
        "As a Spy, Your Eternal Reward automatically disguises you as the person you most recently backstabbed. Be aware that you will lose your disguise upon death or when attacking, however.",
        "As a Spy, you can see enemies' health. Use this information to target weakened enemies with your Revolver.",
        "As a Spy, the L'Etranger passively increases your maximum cloak battery and recharges it when you successfully hit an enemy.",
        "As a Spy, your Electro Sappers disable Sentry Guns before destroying them. Communicate with your team and sap a Sentry Gun as your teammates attack. This prevents the Sentry from firing and makes it more difficult for an Engineer to repair it.",
        "As a Spy, the Conniver's Kunai allows you to absorb the current health of your victim upon a successful backstab. Be wary however, as your base health will be drastically reduced when using this weapon, so be sure to remain undetected!",
        "As a Spy, a good technique is to backstab enemies that are alone or are otherwise vulnerable. Always check your surroundings before backstabbing an enemy in order to ensure that you remain undetected.",
        "As a Spy, you can activate your Dead Ringer with fall damage. Feign a careless death!",
        "As a Spy, Bleeding, Jarate, Mad Milk, and emerging from water will reveal you while you're cloaked.",
        "As a Spy, the Diamondback inflicts less damage, but will store a guaranteed Critical Hit for every building destroyed by your Electro Sappers. Destroy an Engineer's buildings before confronting him, and you will have a significant advantage!",
        "As a Spy, taking any fire damage when using the Spy-cicle will melt the weapon, requiring you to wait before you can use it again.",
        "As an Engineer, use the build tool to place Sentry Guns, Dispensers, and Teleporters.",
        "As an Engineer, you need metal to build, repair, and upgrade your buildings. Collect fallen ammo pickups to replenish your supply.",
        "As an Engineer, hit your Sentry Gun with your Wrench in order to upgrade it with metal. Each level adds more health and firepower.",
        "As an Engineer, build Dispensers to provide your teammates with health and ammo. They also generate metal for you to use.",
        "As an Engineer, build Teleporters to help your team reach the frontlines faster.",
        "As an Engineer, keep an eye out for enemy Spies attaching Electro Sappers to your buildings. Use your Wrench to remove Sappers.",
        "As an Engineer, help your fellow Engineers! Your Wrench can upgrade or repair their buildings as well as your own.",
        "As an Engineer, hit your buildings with your Wrench while they are constructing in order to make them build faster.",
        "As an Engineer, it can be useful to move your buildings forward in order to support your team. Use mouse2 to pick up your buildings and carry them.",
        "As an Engineer, remember to upgrade your buildings. Level 3 Teleporters recharge much faster, allowing your team to keep the pressure on.",
        "As an Engineer, hit either the entrance or the exit of your Teleporter with your Wrench in order to repair and upgrade both sides.",
        "As an Engineer, hit mouse2 to rotate building blueprints before you hit mouse to build. Use this in order to orient Teleporters away from walls.",
        "As an Engineer, you can do more than just maintain your buildings. Use your Shotgun and your Pistol to assist in fights and to defend your buildings.",
        "As an Engineer, Sentry Guns aren't restricted to just defensive measures. Deploy them quickly in hidden locations in order to aid in an offensive push.",
        "As an Engineer, remember that disguised enemy Spies can use your Teleporter. Try not to stand on top of your Teleporter exit, especially when upgrading or repairing it.",
        "As an Engineer, check for Spies with your weapons if someone suspicious approaches.",
        "As an Engineer, the Short Circuit lets you protect your buildings by eliminating incoming enemy projectiles.",
        "As an Engineer, the Gunslinger's Combat Mini-Sentry Guns build much faster than normal Sentry Guns and require less metal to build. This makes Combat Mini-Sentry Guns the perfect offensive tool.",
        "As an Engineer, your Wrangler can be used to greatly extend the range of your Sentry Gun.",
        "As an Engineer, try to keep your metal reserves full - it can help to save your buildings later on.",
        "As an Engineer, the Southern Hospitality can be very useful for Spy checking. If you hit a teammate and they start bleeding, you have discovered an enemy Spy.",
        "As an Engineer, the Jag allows you to construct buildings considerably faster if you hit them while they are under construction. Use the Jag when you need to construct buildings quickly in order to close a hole in your team's defensive line.",
        "As an Engineer, the Frontier Justice will gain revenge crits for every assist and every enemy killed by your Sentry Gun. Use it to quickly deal with enemies when your Sentry Gun has been destroyed.",
        "As an Engineer, if you perform three successive hits with the Gunslinger, the final blow will be an automatic critical hit. Use this technique to ambush and eliminate stronger classes when you lack support from your team or your Sentry Gun.",
        "As an Engineer, you can use mouse2 in order to pick up your buildings and carry them. Remember that you will move more slowly and be unable to attack when carrying a building however, so be careful!",
        "As an Engineer, be aware that your building will be destroyed if you are killed while carrying it. Only move your buildings when you are guarded by your team, or it is safe to do so!",
        "As an Engineer, consider defensive locations that are hard to assault, and use them as staging areas when constructing buildings. Sentry Guns in particular are most effective when placed in the right location.",
        "As an Engineer, the Widowmaker draws from your metal reserves for each shot. Make sure that you take note of ammo locations and Dispensers to quickly resupply when you need to; also consider equipping the Pistol to be able to deal damage when you can't.",
        "As an Engineer, the Pomson 6000's projectiles drain the UberCharge meter of enemy Medics and the cloak meter of enemy Spies."
]
const tips = [
        "As a Scout, jump.",
        "As a Scout, you capture control points. Seriously, do it.",
        "As a Scout, you're most effective when you pick another class.",
        "As a Scout, your Pistol is great for picking your nose.",
        "As a Scout, your Scattergun sometimes deals high-damage at point-blank range, maybe killing most classes within 2 to 19 hits.",
        "As a Scout, firing the Force-A-Nature in mid-air will knock you up; you can use this to surprise your loved ones.",
        "As a Scout, take advantage of women with low self esteem.",
        "As a Scout, when wielding the Sandman, use mouse2 to launch a baseball at distant enemies to convey to them that you have poor choice in weapons.",
        "As a Scout, equipping the Sandman will reduce your maximum health, so don't fucking do it.",
        "As a Scout, hitting nearby foes with the Force-A-Nature will push them out of your line of sight, causing you to miss your second shot.",
        "As a Scout, the further your Sandman baseball travels, the longer it will take enemies to find out you're using the Sandman and are therefor the weakest link.",
        "As a Scout, the Sandman's baseball cannot stun foes at close range, but it also won't stun an enemy at max range.",
        "As a Scout, use the Bonk! Atomic Punch energy drink to charge through enemy lines, draw all of their attention, and die the moment your invulnerability wears off.",
        "As a Scout, rename your Mad Milk to something relating to semen in order to look like a cool guy in front of the bullies at school.",
        "As a Scout, the Shortstop sucks.",
        "As a Scout, if you have the Candy Cane equipped, Soldiers and Demomen can kill you just by being in the same area code as you.",
        "As a Scout, be careful when using Crit-A-Cola. Using it not only makes you look like a tool, it'll also get you killed almost instantly.",
        "As a Scout, you and your teammates regain lost health when licking enemies drenched in Mad Milk. Initiate fights with it to improve the enemy team's taste.",
        "As a Scout, the Boston Basher causes foes to bleed when struck, but missing will cause self-inflicted bleeding. You fucking moron.",
        "As a Scout, the Sun-on-a-Stick deals critical damage to burning foes, but is otherwise weaker than the Bat. Don't use it.",
        "As a Scout, a Fan O'War hit will mostly just surprise the enemy with the revelation that someone's using the Fan O'War outside of MvM.",
        "As a Scout, deploying the Atomizer will cause cool music to start playing.",
        "As a Scout, you can utilize both the Force-A-Nature's knockback and Atomizer's triple jump to die from fall damage!",
        "As a Scout, the Atomizer will allow you to perform a triple jump! Use it to die in mid-air!",
        "As a Scout, the Winger inflicts more damage than the Pistol, but this is offset by the raw, animal magnetism you radiate toward women. Use it to get laid, unlike those Pistol losers!",
        "As a Scout, the Shortstop is completely useless at any range, allowing you to contribute nothing to the team but pretend like you're helping.  You can also hit mouse2 to stroke people affectionately!",
        "As a Scout, the Wrap Assassin's secondary attack (mouse2) can be used.",
        "As a Scout, Double jump everywhere for maximum annoyance.",
	"As a Scout, Eternal capping, double the rate.",
	"As a Scout, Don't you dare stop.",
	"As a Scout, Become a sniper with your pewgun.",
	"As a Scout, Meatshots get you easier frags.",
	"As a Scout, The loud AF gun has a giant push when midair. Try using it more.",
	"As a Scout, Don't just run straight into fire. Try sneaking on them, your dad should have taught you that already.",
	"As a Scout, The Stunstick can launch balls that slow down people, better the farther away your target is (bound to mouse2).",
	"As a Scout, The Stunstick lowers your health, watch out.",
	"As a Scout, The loud AF gun pushes more the closer you are.",
	"As a Scout, From far away, the Stunstick balls can slow down for 7 seconds (and give you an achievement).",
	"As a Scout, Don't throw balls at them point blank, it's pretty worthless.",
	"As a Scout, Drink isotopes to become invincible and help push on these sentry nests by pointing them at you.",
	"As a Scout, Throw cum to take out fires.",
	"As a Scout, The four barrel thing no-one uses is most effective on medium range.",
	"As a Scout, The christmas dildo gives small healthpacks upon killing.",
	"As a Scout, Drink isotopes to kill faster and die faster.",
	"As a Scout, Cum Bottle is basically a vampire spell, get health from hitting someone covered. How does this work?",
	"As a Scout, Boston Basher better be used with low ping.",
	"As a Scout, Got pyrospam on your team? Use the sunstick to get crits on grilling enemies!",
	"As a Scout, The japanese pan makes enemies die faster and get free assists.",
	"As a Scout, Jumpstick minicrits when airborne.",
	"As a Scout, The loud gun and the jump stick can give you a quad-jump.",
	"As a Scout, Use the jumpstick to get behind everyone.",
	"As a Scout, Winger is kinda sniper rifle - more damage in less shots. Also free jump height.",
	"As a Scout, The quad-scattergun gun is good at mid-range too, if you're scared of close social interations with enemies. %attack2% to push em off.",
	"As a Scout, The Xmas stick (mouse2) throws a tiny spiky Xmas ball that hurts.",
	"As a Sniper, the longer you spend zoomed while scoped, the less aware of your surroundings you become.",
        "As a Sniper, aim for the head in order to increase your chance of missing.",
        "As a Sniper, zoom.",
        "As a Sniper, use your secondary Submachine Gun while your primary Submachine Gun is in the shop for repairs.",
        "As a Sniper, a fully charged Sniper Rifle head shot can kill most presidents instantly.",
        "As a Sniper, your shot will usually miss.",
        "As a Sniper, Jarate can reveal a Spy's hidden fetish.",
        "As a Sniper, the Razorback breaks.",
        "As a Sniper, your Razorback emits a loud, autistic screech when a Spy attempts to steal your nuggies. Listen for it!",
        "As a Sniper, use Jarate.",
        "As a Sniper, The longer you camp, the better the shot. Unless you miss.",
	"As a Sniper, No bodyshots.",
	"As a Sniper, mouse2 enables Tunnelvision.",
	"As a Sniper, Use SMG as a secondary short-range melee weapon with a random critical miss chance.",
	"As a Sniper, A fully charged shot can instakill some classes and spawn a few salt messages in chat.",
	"As a Sniper, Lucksman scoped for more than 5 seconds is very inaccurate. Don't tunnelvision with it.",
	"As a Sniper, Piss on 'em spies, bloody useless.",
	"As a Sniper, The Chastity Shield can withstand a single [not consentual sex] attempt from a spy. Grab a new one every time, or just look behind you frequently.",
	"As a Sniper, The Chastity Shield discharges loudly when a spy attempts to [not consentual sex] you. Hear closely.",
	"As a Sniper, Piss actually removes burns instead of making them hurt more.",
	"As a Sniper, Piss grants minicrits on enemies.",
	"As a Sniper, The Bush Bleeder chinese knife thing makes enemies bleed.",
	"As a Sniper, Piss rifle is more related than ever. Charge shoot on your teammates to extinguish them or enemies to piss them off. With piss.",
	"As a Sniper, Piss + piss knife = eternal chopchop",
	"As a Sniper, The Sydney Sleeper can kill most classes in one shot at 100% charge.",
	"As a Sniper, The Huntsman is very effective at short to medium range despite its inability to zoom in.",
	"As a Sniper, The Sydney Sleeper will apply a Jarate effect to an enemy based on how long you've been scoped, so take your time when shooting.",
	"As a Sniper, The Sydney Sleeper can coat an enemy with Jarate upon a successful hit. This makes it an effective weapon when supporting your team from afar even if you do not kill the enemy with your first shot.",
	"As a Sniper, The Bazaar Bargain's charge rate is initially lower, but you can increase it by collecting heads. To collect heads, get a scoped headshot kill.",
	"As a Sniper, With the Machina, consider equipping the Submachine Gun to handle enemies in situations where scoping in for a shot is too difficult.",
	"As a Sniper, The Shahanshah has increased damage when your health is below 50%.  Use it to counter enemies harassing you once you've taken damage.",
	"As a Sniper, all hits on enemies who have been doused with Jarate are even more uncomfortable for all involved parties.",
        "As a Sniper, the Tribalman's Shiv causes your target to bleed when hit. This can be useful for fending off the Drop Bears.",
        "As a Sniper, the Sydney Sleeper applies pee to enemies when hit by scoped shots. It can also be used to pee on teammates.",
        "As a Sniper, your Jarate and Bushwacka make a decent combo. Not, like, perfect or anything, but you know. Not bad.",
        "As a Sniper, the Sydney Sleeper can annoy most classes in one shot at 100% charge.",
        "As a Sniper, the Huntsman is very effective at short to medium range despite being the Huntsman.",
        "As a Sniper, the Sydney Sleeper will apply pee to an enemy based on how long you've been scoped, so take your time when urinating.",
        "As a Sniper, the Sydney Sleeper can coat an enemy with pee upon a successful hit. This makes it an effective weapon when supporting your team from afar by taking away the enemy's will to live.",
        "As a Sniper, the Bazaar Bargain's charge rate is initially lower, but you can increase it by collecting bottlecaps found on the ground. To collect bottlecaps, just pick them up.",
        "As a Sniper with the Machina, consider equipping a different primary.",
        "As a Sniper, the Shahanshahahanshahahanshahahanshahahanshahahanshahahanshahahanshah has increased damage when your health is below 50%.  Use it to counter enemies harassing you once you've taken damage.",
        "As a Soldier, you can jump.",
        "As a Soldier, aim rockets at an enemy's feet in order to ensure that they rage at you in chat.",
        "As a Soldier, make sure you keep your Rocket Launcher loaded. Press r to reload will reload.",
        "As a Soldier, you risk taking splash damage when sitting in the front row seats at Seaworld. Try switching seats to avoid getting wet.",
        "As a Soldier, consider damaging yourself.",
        "As a Soldier, your rockets have strong knock back. Use this to jostle enemies like small balls.",
        "As a Soldier, use your Shotgun.",
        "As a Soldier, the Direct Hit's rockets have a very small blast radius and smell bad and are dumb and stupid.",
        "As a Soldier, the Buff Banner's rage will reset if you die. Yours, however, will not.",
        "As a Soldier, activating the Buff Banner makes a silly sound.",
        "As a Soldier, the Escape Plan provides a speed bonus when your health is low. Use it to escape awkward situations and hostile geese.",
        "As a Soldier, the Equalizer does a lot of damage when you're at very low health, but honestly, if you're that low on health, you're probably not gonna get a chance to whack 'em.",
        "As a Soldier, Medics heal you at a significantly reduced rate while you actively wield the Equalizer or the USEFUL Pickaxe.",
        "As a Soldier, remember that the Half-Zatoichi attacks instantly kill unarmed, unarmored Japanese civilians who brought dishonor to our Glorious Emperor!",
        "As a Soldier, the Black Box sucks. This Loading Screen Tip made by Stock Rocket Launcher Gang.",
        "As a Soldier, the Gunboats greatly reduce frostbite damage dealt to your toes.",
        "As a Soldier, activating the Battalion's Backup ALSO makes a silly sound!",
        "As a Soldier, activating the Concheror makes the silliest sound.",
        "As a Soldier, the Frying Pan does identical damage as the Shovel, but is a lot louder. Always use it, in all situations!",
        "As a Soldier, hitting a teammate with the Disciplinary Action will result in a sexual harrasment file and an uncomfortable confrontation from the lady in HR.",
        "As a Soldier, use mouse2 when wielding the Cow Mangler 5000 to fire a charged shot, dealing a little extra damage and completely emptying your ammo. Good work, genius.",
        "As a Soldier, the Mantreads dramatically reduce your Charisma score. Use them in conjunction with an Australium weapon or an Unusual to ensure Medics will still consider healing you!",
        "As a Soldier, the Black Box only loads three rockets at any time.  Even more evidence as to why it sucks.",
        "As a Soldier, rocket jump.",
	"As a Soldier, Find a jump_academy map and learn to jump with rockets.",
        "As a Soldier, consider using your Shotgun.",
        "As a Soldier, the Righteous Bison can hit the same enemy multiple times, and will hit the most times on enemies who are moving away from the projectile. Use it!",
        "As a Demoman, when using the Stickybomb Launcher hit mouse1 to fire stickybombs and then use mouse2 immediately to win the game and receive the love and attention you so rightly deserve.",
        "As a Demoman, when you use the Stickybomb Launcher or Scottish Resistance, note that the longer you hold down the fire button the longer the fire button is held down.",
        "As a Demoman, time the detonation of your stickybombs as you jump over them to kill yourself!",
        "As a Demoman, shoot stickybombs onto walls and ceilings where they're out of range of what you're trying to kill.",
        "As a Demoman, you can detonate stickybombs with mouse2 at any time, regardless of wether or not it's a good time to do so.",
        "As a Demoman, crouch.",
        "As a Demoman, use your Grenade Launcher.",
        "As a Demoman, your Bottle does the same amount of damage whether it is smashed open or not. Clearly this was an oversight and we will fix it posthaste. -Gabe Newell, 2009",
        "As a Demoman, the Scottish Resistance is great for defense. Well maybe not GREAT. It's okay. Kinda sub-par, actually. Well, alright, it's shit, but what do you want from me? I'm just a loading screen tip, not a weapons manufacturer.",
        "As a Demoman, when using the Scottish Resistance keep a line of sight to your stickybombs or else they'll run away.",
        "As a Demoman, the Chargin' Targe's Large and Barge damage resistance in addition to its Chargin' Targin' ability complement the Eyelander's Byelander and Guylander.",
        "As a Demoman, the Chargin' Targe's Chargin' Targin' ability doesn't grant a critical hit until you eat all of your vegetables.",
        "As a Demoman, when using the Chargin' Targe you can't change direction during a charge. Don't miss, fat boy.",
        "As a Demoman, the Chargin' Targe's Chargin' Targin' ability is also perfect for high octane Hollywood stunts!",
        "As a Demoman, your Bottle has no negative attributes. Use your Bottle.",
        "As a Demoman, collect heads.",
        "As a Demoman, the only way to recharge your Ullapool Caber is to unequip it and use a real weapon!",
        "As a Demoman, when using the Scottish Resistance remember that you can see your stickybombs through walls and floors thanks to your latent psionic abilities.",
        "As a Demoman, remember that a successful hit with the Half-Zatoichi on any unarmored target might actually hurt them without immediately destroying your brittle, second rate butter knife.",
        "As a Demoman, use the Loch-n-Load to piss off Soundsmith fans.",
        "As a Demoman, use the Ullapool Caber when surrounded by enemies. The resulting failure and humiliation will distract them from attacking your team.",
        "As a Demoman, if you're paired with a Medic, take advantage of him.",
        "As a Demoman, your Eyelander will collect the stored gallbladders from a slain enemy Demoman.",
        "As a Demoman, you can use the Chargin' Targe, Splendid Screen, or Tide Turner to launch off small ramps and go flying! Use it to hurtle through the air and into a ditch.",
        "As a Demoman, the amount of gallbladders you collect with your Eyelander will increase the damage your shash bash does.",
        "As a Demoman, you can use the Sticky Jumper to get to the front lines quickly. Be careful! It does no damage, makes you look like a clown, and will bring shame and dishonor to your family!",
        "As a Demoman, the Scotsman's Skullcutter will reduce your speed.  A small price to pay for 100% crit rate though.",
	"As a Medic, fulfill every E request, you're the waiter with medicine here.",
        "As a Medic, use your Medi Gun.",
        "As a Medic, fill your UberCharge.",
        "As a Medic, your UberCharge makes both you and your glorious, supple buttcheeks invulnerable for a short time.",
        "As a Medic, you can fill your UberCharge.",
        "As a Medic, keep alert for teammates calling for your help. Use the Medic arrows onscreen to find their location and subsequently avoid them.",
        "As a Medic, your UberCharge will build.",
        "As a Medic, you cannot capture a Control Point or pick up the Intelligence.",
        "As a Medic, heal Soldiers and Demomen.",
        "As a Medic, you can UberCharge.",
        "As a Medic, pop it, don't drop it.",
        "As a Medic, fool the enemy by using the \"UberCharge ready!\" voice command in order to pretend they actually give a shit.",
        "As a Medic, you can keep multiple targets.",
        "As a Medic, your Bonesaw sucks.",
        "As a Medic, remember that syringes travel.",
        "As a Medic, remember that critical hits have no effect on Sentry Guns. Use the Kritzkrieg in areas full of children and the elderly instead.",
        "As a Medic, the Ubersaw will still increase your UberCharge meter if the enemy being hit is a Scout phasing with Bonk! Atomic Punch. Might as well get some use of the moron.",
        "As a Medic, using UberCharge to be invulnerable to damage does not mean you are free from harm. Actually, wait, yes it does. Sorry, bit of a mix up in the script here.",
        "As a Medic, when attacking with an UberCharge, try to get Sentry Guns to target you so that your teammates can get distracted and waste your precious time and energy.",
        "As a Medic, your default Syringe Gun automatically heals you over time by 3 health per second compared to the Blutsauger's 1 health per second. Or you could just use the Crusader's Crossbow like everyone else.",
        "As a Medic, the Ubersaw will not increase your UberCharge meter.",
        "As a Medic, the Kritzkrieg's taunt heals your health. Use it if you want to look like an absolute buffoon.",
        "As a Medic, pay attention to other Medics on your team. Or don't. I'm a loading screen tip, not a cop.",
        "As a Medic, taunting with the Amputator will make you look like an ass.",
        "As a Medic, your Crusader's Crossbow does damage to enemies and teammates upon a successful hit.",
        "As a Medic, timing is everything. Tease your partner in order to enhance the pleasure before finally unleashing your UberCharge at the right moment, causing a climactic finish.",
        "As a Medic, a successful hit with the Blutsauger will restore three health as well as damage the enemy. Take THAT, hippocratic oath!",
        "As a Medic, the Vita-Saw will retain up to 60% of your UberCharge meter if you go around whacking every enemy you see. This can be very useful when... uhh... Actually, nevermind, fuck the Vita-Saw.",
        "As a Medic, the Solemn Vow allows you to see the health of enemies; use this information to keep anal, overly descriptive logs of your enemies.",
        "As a Medic, the Quick-Fix heals damage.",
        "As a Medic, if you have been separated from your team, alert Mall security and they will escort you to the Lost and Found where you can wait for your team to come pick you up.",
        "As a Medic, the Overdose isn't very good.",
	"As a Heavy, Wait with mouse2 pressed to jumpscare someone coming by the corner.",
        "As a Heavy, tape down your mouse2 button.",
        "As a Heavy, you're a great Medic buddy. Invite him to go fishing or bowling sometime. He's been having a hard time with his divorce recently and would really appreciate the attention.",
        "As a Heavy, your Minigun chews up a lot of ammo. Pick up fallen ammo pickups to feed its insatiable hunger.",
        "As a Heavy, your Sandvich can be a lifesaver. Try to find a safe place before eating your Sandvich in front of your dying teammates so that they can watch as you gorge yourself on health while they wither and die before you.",
        "As a Heavy, you have more health than any other class on your team. Fatty.",
        "As a Heavy, you don't lose!",
        "As a Heavy, use your Sandvich to heal up! Use mouse2 to throw it on the ground for friendly players to pick up as health. Don't worry, it comes with a plate to keep it clean, you psychotically anal germophobe.",
        "As a Heavy, your fists swing faster than the Killing Gloves of Boxing. Equip your fists in the morning before leaving the house.",
        "As a Heavy, the Sandvich can be dropped by hitting mouse2. A dropped Sandvich is a sad Sandvich, but sacrifices must be made.",
        "As a Heavy, be sure to get another Sandvich.",
        "As a Heavy, your Minigun's spin-up time can waste the Killing Gloves of Boxing's five-second critical buff. Carry your Shotgun with the K.G.B. in order to purge threats to glorious Soviet Union!",
        "As a Heavy, the Sandvich and the Buffalo Steak Sandvich can be dropped by hitting mouse2 and can extinguish burning teammates. Use this to put out that one Scout that's just always on fire, every time you see him. I'm pretty sure the enemy team doesn't even have a Pyro.",
        "As a Heavy, the Brass Beast inflicts additional damage but also inflicts Rockjoint. Use it when playing defensively because you'll never see the frontline with this bad boy unless you bring the frontline to you.",
        "As a Heavy, the Dalokohs Bar's temporary health increase is ultimately negligable.",
        "As a Heavy, the Fists of Steel's ranged weapon damage reduction helps to counter the threat of enemy Snipers. Just make sure you don't run into any Demoknights because they will rock your shit like the prettiest inmate in the prison showers!",
        "As a Heavy, the Fists of Steel will dramatically reduce the amount of damage taken from ranged sources while increasing the amount of damage from melee weapons. Use them to push down old ladies or pet metal dogs.",
        "As a Heavy, the Tomislav not only spins up more quickly than the Minigun, but it also does less damage AND makes you look like a giant faggot!",
        "As a Heavy, the Natascha will slow down enemies it hits. Use it to teach that Scout a lesson!",
        "As a Heavy, the Eviction Notice will be pinned to your front door when you come home.",
        "As a Heavy, the Holiday Punch's critical hits will cause the enemy to burst into laughter, thereby leaving them defenseless! Rummage through their pockets and take their cash while they're sitting there giggling.",
        "As a Pyro, your Flamethrower sets things on fire.",
        "As a Pyro, ambush women in the park.",
        "As a Pyro, your Flamethrower chews.",
	"As a Pyro, The closer the hotter.",
	"As a Pyro, be unexpected for maximum M1 pleasure.",
        "As a Pyro, switch to your Shotgun.",
        "As a Pyro, you can often set enemies on fire.",
        "As a Pyro, your Flamethrower can ignite an enemy Spy if he is cloaked, or is disguised as a member of your team. Spy check teammates constantly like the paranoid arsonist you are!",
        "As a Pyro, utilize the bonus damage on the Axtinguisher.",
        "As a Pyro, help protect an Engineer's Sentry Gun. Or don't.",
        "As a Pyro, you can neutralize an UberCharge by shoving the Medic into his locker.",
        "As a Pyro, push enemies out of your way.",
        "As a Pyro, use the Flamethrower's compression blast (mouse2) to blow wind on your teammates.",
        "As a Pyro, you cannot be ignited because, well, it'd be kinda stupid to go around using a flamethrower without protection, now wouldn't it?",
        "As a Pyro, the Backburner isn't as effective as you might think.",
        "As a Pyro, the Flare Gun can cause critical hits.",
        "As a Pyro, your Flamethrower or Flare Gun will not work underwater, so rely upon your Harpoon and Diving Knife to hunt sharks.",
        "As a Pyro, use mouse2 in order to let out a blast of compressed air. We won't say where from though!",
        "As a Pyro, use your Flamethrower on friendly Snipers in order to remove them from the gene pool.",
        "As a Pyro, use mouse2 to reflect projectiles back at the enemy team!  This includes rockets, grenades, Huntsman arrows, Jarate, stickybombs, Mad Milk, Rescue Ranger darts, Crusader's Crossbow bolts, Sandman balls, Wrap Assassin decorations, sentry gun rockets, meat clevers, and all other kinds of shit!",
        "As a Pyro, remember that the Flamethrower's compression blast (mouse2) can use up a lot of ammo. Use it only when you need to, like when a Soldier looks in your general direction!",
        "As a Pyro, utilize the Flamethrower's compression blast (mouse2) to push stickybombs out of the way. Help out your Engineers by pushing them into his nest!",
        "As a Pyro, the Homewrecker, Maul, and Neon Annihilator can be used.",
        "As a Pyro, your Sharpened Volcano Fragment sets enemies on fire upon a successful hit. If only the Pryo had a more effective way to set enemies on fire at close range!",
        "As a Pyro, you can use the Back Scratcher to scratch backs! (Disclaimer: Do not do this)",
        "As a Pyro, the Flamethrower's compression blast (mouse2) is a very useful tool. Use it to push down the elderly, even Old Man Jenkins and the Rheumatism Rockers, or just use it to fart at teammates who piss you off.",
        "As a Pyro, the Degreaser inflicts less afterburn damage and costs more to airblast. Why would you ever use this horrible weapon?",
        "As a Pyro, the Backscratcher inflicts additional damage, but Medics and dispensers will refuse to associate with you, having shown no understanding of proper garden tool etiquette.",
        "As a Pyro, the Flamethrower's compression blast can be used to counter Demomen using the Chargin' Targe! Because fuck other people trying to have fun, am I right?",
        "As a Pyro, the Detonator's detonation flares can be detonated.",
        "As a Pyro, inflicting damage with the Phlogistinator fills the 'Mmmph' meter. Once it is full, activate it using your secondary attack (mouse2) in order to go 'Mmmph'!",
        "As a Pyro, you can use the Manmelter's secondary fire (mouse2). I wouldn't recommend it though!",
        "As a Spy, use your Knife to spread butter and jam on your toast in the morning.",
        "As a Spy, disguise yourself as someone actually good at the game.",
        "As a Spy, hit mouse2 to break out into some funky dance moves. Get jiggy with it!",
        "As a Spy, use your Cloak to get behind people and tickle them when they least expect it.",
        "As a Spy, try to act like a normal human being when out in public.",
        "As a Spy, place your Electro Sappers on enemy Sentry Guns in order to draw the attention of the entire enemy team.",
        "As a Spy, your Electro Sappers sap electrolytes.",
        "As a Spy, call enemy Medics. Take them out to dinner, or go bowling with them.",
        "As a Spy, be careful.",
        "As a Spy, the Ambassador does not inflict critical headshots anymore.",
        "As a Spy, try not to be hit.",
        "As a Spy cloaked with the Dead Ringer, people won't like you.",
        "As a Spy, pick up ammo to recharge your Cloak.  Don't ask me how it works.",
        "As a Spy, the Cloak and Dagger will only drain if you are moving. Stand still and gawk at people like a voyeur instead of helping the team.",
        "As a Spy, your silhouette can be seen if you move around while cloaked with the Cloak and Dagger for too long. Find a safe spot to sit and watch.",
        "As a Spy, the Dead Ringer makes a very loud noise when uncloaking, like a harp seal with its dick caught in a loom.",
        "As a Spy, disguise as your own team by hitting the %disguiseteam% key. It's not very helpful but it's kinda fun.",
        "As a Spy, hit %lastdisguise%.",
        "As a Spy, hit %lastdisguise% in order to automatically assume the last disguise you previously used. You know, like that scout you disguised as and got killed as immediately. Better just stick with Scout.",
        "As a Spy, you can take enemy Teleporters. You never will, but you can.",
        "As a Spy, bumping into enemies while cloaked makes you look like a moron.",
        "As a Spy, if you're set on fire while cloaked, you'll be on fire.",
        "As a Spy, use your Revolver.",
	"As a Spy, buttsecks",
	"As a Spy, Impersonate anyone!",
	"As a Spy, use mouse2 to unexist yourself.",
	"As a Spy, Unexist yourself to backcap.",
	"As a Spy, Try to impersonate the disguise for maximum team penetration.",
	"As a Spy, sab'n'stap",
	"As a Spy, sab'n'stap if you're scared of that aimgun suffenly killing you, otherwise stap'n'sab.",
	"As a Spy, A stupid enemy german might heal you (call E to them), if you kill him you get an achievement.",
        "As a Spy, if you are quick, you can stab an Engineer.",
        "As a Spy, the Dead Ringer significantly reduces the amount of damage taken from all attacks while you are invisible. It's helpful if you're not very good at Spy.",
        "As a Spy, avoid taking fall damage.",
        "As a Spy, your Electro Sappers sap both ends of a Teleporter. Don't know how that one works, but whatever.",
        "As a Spy, your Dead Ringer can be used to fake your own death. All you need is a mannequin, a blood pack, and a jaunty hat!",
        "As a Spy, reloading your Revolver will make it full again.",
        "As a Spy, if you're too slow to sap a Sentry Gun after backstabbing an Engineer, you might want to change class.",
        "As a Spy, Your Eternal Reward automatically disguises you as the person you just backstabbed. Would be good for some sneaky tactics if you hadn't stabbed him right in front of three of his teammates.",
        "As a Spy, you can see enemies' health. Use this information to target weak members of the pack to leap on.",
        "As a Spy, the L'Etranger passively increases your maximum cloak battery and recharges it if and when you successfully hit an enemy.",
        "As a Spy, your Electro Sappers disable Sentry Guns before destroying them. Don't know why you need two seperate tips to tell you this.",
        "As a Spy, the Conniver's Kunai is a fucking crutch. Use a real knife!",
        "As a Spy, a good technique is to backstab enemies that are facing away from you.",
        "As a Spy, you can activate your Dead Ringer with fall damage. Fucking idiot!",
        "As a Spy, Bleeding, Jarate, Mad Milk, and water will get your suit wet.",
        "As a Spy, the Diamondback inflicts less damage, but will store a guaranteed Critical Hit for every building destroyed by your Electro Sappers. Get free crits for just playing the class!",
        "As a Spy, taking any fire damage when using the Spy-cicle will melt the weapon, requiring you to get a new one from the freezer.",
        "As an Engineer, use the build tool to build.",
        "As an Engineer, you need metal to build, repair, and upgrade your buildings. Rock and Roll isn't heavy enough and pop music is just bad.",
        "As an Engineer, hit your Sentry Gun with your Wrench. It'll make you feel better.",
        "As an Engineer, build Dispensers.",
        "As an Engineer, build Teleporters.",
	"As an Engineer, Use the toy with buttons to build stuff.",
	"As an Engineer, Metal is your second blood. Pick it up from the streets. It's completely safe.",
        "As an Engineer, keep an eye out for enemy Spies molesting your building-children. Report them to the police.",
        "As an Engineer, help your fellow Engineers! Tell them not to place their buildings too close to yours and instruct them on better building placement.",
        "As an Engineer, Wrench.",
        "As an Engineer, move your damn buildings up!",
        "As an Engineer, remember to upgrade your buildings.",
        "As an Engineer, hit either the entrance or the exit of your Teleporter with your Wrench in order to punish it.",
        "As an Engineer, hit mouse2 to rotate building blueprints before you hit %attack% to build. Use this in order to orient Teleporters toward cliffs or environmental hazards.",
        "As an Engineer, you can do more than just maintain your buildings. Like, uh... um...",
        "As an Engineer, Sentry Guns aren't restricted to just defensive measures. Deploy them quickly in hidden locations in order to piss off the enemy team.",
        "As an Engineer, remember that disguised enemy Spies can use your Teleporter. They won't, but you should already be paranoid about Spies.",
        "As an Engineer, check for Spies. Constantly. They're everywhere. They're right behind you!",
        "As an Engineer, the Short Circuit lets you fire big, colorful balls at people. Pew pew!",
        "As an Engineer, the Gunslinger's Combat Mini-Sentry Guns aren't that powerful or special but STAR_ complained about them while rocket jumping and now everyone hates them.",
        "As an Engineer, your Wrangler can be used to bother Snipers by pointing the laser in their eyes.",
        "As an Engineer, try to keep your metal reserves full - you never know when you'll need a crunchy snack.",
        "As an Engineer, the Southern Hospitality can be very useful for Spy checking. If you hit a teammate and they start bleeding, you're gonna have to apologize later.",
        "As an Engineer, do things.",
        "As an Engineer, the Frontier Justice will gain revenge crits for every assist and every enemy killed by your Sentry Gun. Use it in conjunction with the Gunslinger's Mini-Sentries to farm crits like the bastard you are.",
        "As an Engineer, if you perform three successive hits with the Gunslinger, confetti will drop from the cieling to congratulate you. Hooray!",
        "As an Engineer, you can use mouse2 in order to pick up your buildings and carry them. Take them to a cliff and throw them off!",
        "As an Engineer, your buildings will be destroyed if they're shot.",
        "As an Engineer, consider defensive locations that are hard to assault, and use them as staging areas when constructing buildings. Sentry Guns in particular are most effective when they can actually hit a target.",
        "As an Engineer, the Widowmaker draws from your metal reserves for each shot. Metal!",
        "As an Engineer, the Pomson 6000 sucks."
]
const jams = [
	"https://www.youtube.com/watch?v=DkKoMveT_jo",
	"https://youtu.be/Yi496W_fO6I",
	"https://www.youtube.com/watch?v=qeIr5l15DC8",
	"https://youtu.be/zOeJslj8mzs",
	"https://youtu.be/bcoPG0oSqPI",
	"https://youtu.be/mizSUxxuCiY",
	"https://youtu.be/m2680ciixQc",
	"https://youtu.be/HSZIej-ZraE",
	"https://youtu.be/7_QydNXI_ok",
	"https://youtu.be/ddWJatRxfz8",
	"https://youtu.be/mlQmCfjXApM",
	"https://youtu.be/7J5KK51RgIM",
	"https://youtu.be/iX6ex5fYT7o",
	"https://youtu.be/YAmxDIKDEuM",
	"https://youtu.be/Hf4yfoWnJ0Y",
	"https://www.youtube.com/watch?v=mi20Dzmbaxs",
	"https://youtu.be/02vDkMEdIkY",
	"https://youtu.be/atuFSv2bLa8",
	"https://www.youtube.com/watch?v=dv13gl0a-FA",
	"https://youtu.be/fnd6TqjF9gw",
	"https://youtu.be/XmVagnlM-Ys",
	"https://youtu.be/HnyGSl3K-IE",
	"https://youtu.be/xZEPgLkzhwE",
	"https://youtu.be/4V4IEV8l-gA",
	"https://youtu.be/ULeDlxa3gyc",
	"https://www.youtube.com/watch?v=8VyaShl6urc",
	"https://youtu.be/hzGmbwS_Drs",
	"https://www.youtube.com/watch?v=K5Fhd7dWeCs",
	"https://youtu.be/yc3Jo65Lct4",
	"https://youtu.be/AAGYmLLyOpI",
	"https://youtu.be/0tdyU_gW6WE",
	"https://www.youtube.com/watch?v=RZ_tOz8V65g",
	"https://youtu.be/hkuQVT6Irsk",
	"https://youtu.be/3-pQ9y6RevY",
	"https://www.youtube.com/watch?v=L-2ufHb06Mc",
	"https://www.youtube.com/watch?v=mw2fh8qfDiA",
	"https://youtu.be/lA79J-tifAY",
	"https://youtu.be/gT47xlDK-iM",
	"https://youtu.be/6uNNT9xhmXw",
	"https://youtu.be/yVcAyEMM4Cc",
	"https://youtu.be/vvnzu0Nu6tI",
	"https://www.youtube.com/watch?v=Zpu861-LpCE",
	"https://youtu.be/ahdH8eTydWY",
	"https://youtu.be/6wWHZE14hP8",
	"https://youtu.be/7R_aWNgSdec",
	"https://youtu.be/D0dPdLvLeac",
	"https://youtu.be/zMi0DSJZ71Y",
	"https://youtu.be/0DxV5_A-K_4",
	"https://youtu.be/IUB_KD98QDE",
	"https://youtu.be/7HSritifpTI",
	"https://youtu.be/hsrjhl8_m_Q",
	"https://youtu.be/Gm_-vcOEFmM",
	"https://youtu.be/BcoXuRjPUcw",
	"https://youtu.be/eJOizZWp-MY",
	"https://youtu.be/h1c6JlGiRVg",
	"https://youtu.be/B1lNhNHdoPI",
	"https://youtu.be/XfqjXgDZoE4",
	"https://youtu.be/EDb303T-B1w",
	"https://youtu.be/ZHwVBirqD2s",
	"https://youtu.be/2Q_ZzBGPdqE",
	"https://youtu.be/SYnVYJDxu2Q",
	"https://youtu.be/R1bO0H1D2v8",
	"https://youtu.be/Dnrd4MkY0Go",
	"https://youtu.be/MpLQxduGNZw",
	"https://youtu.be/0IwIwsxVMZ0",
	"https://youtu.be/ktUd6imka5Y",
	"https://youtu.be/JWfezfD4wnU",
	"https://www.youtube.com/watch?v=3w4B16TRsPM",
	"https://youtu.be/AhccsEK8S_Y",
	"https://youtu.be/1WAlkyxz2mU",
	"https://youtu.be/oxoqm05c7yA",
	"https://www.youtube.com/watch?v=srEzqf7pRlE",
	"https://youtu.be/GYQfNJDj6bk",
	"https://youtu.be/e0T0rI-GiR4",
	"https://youtu.be/rjRV0G6qWgw",
	"https://youtu.be/7-tNUur2YoU",
	"https://youtu.be/VUTUuAoBFPk",
	"https://youtu.be/00vYncpl0pk",
	"https://youtu.be/hBzfpsEyqeU",
	"https://youtu.be/yD2FSwTy2lw",
	"https://youtu.be/JfibeZy0nGs",
	"https://youtu.be/C3OVpEGnF0Y",
	"https://youtu.be/8GW6sLrK40k",
	"https://youtu.be/Yw6u6YkTgQ4",
	"https://youtu.be/EAG7pye0V1g",
	"https://youtu.be/xZ8aFy-wtVc",
	"www.youtube.com/watch?v=Zrkmj-9X248",
	"www.youtube.com/watch?v=yD2FSwTy2lw",
	"https://www.youtube.com/watch?v=3yQFebRcznA",
	"www.youtube.com/watch?v=v1K4EAXe2oo",
	"www.youtube.com/watch?v=8D-WVlRohQk",
	"www.youtube.com/watch?v=kR0gOEyK6Tg",
	"www.youtube.com/watch?v=oF9yHO-UUws",
	"www.youtube.com/watch?v=_JcnSgeEe34",
	"www.youtube.com/watch?v=3HWG3h-IARU",
	"www.youtube.com/watch?v=HoGGKCdPKLk",
	"www.youtube.com/watch?v=Dk2O3yyOgwE",
	"www.youtube.com/watch?v=3mzXxsvnwMc",
	"https://youtu.be/7M2Qt0RjktU",
	"https://www.youtube.com/watch?v=aRsOBFhNjVM",
	"https://youtu.be/nQoM5kw4z1I",
	"https://youtu.be/0q5vYr-SWlY",
]

const vgfunfacts = [
	"video game fun fact #1: in super mario 64, smoke emits from mario whenever he is on fire. this smoke is actually in the wrong format, and as such is rendered incorrectly.",
	"video game fun fact #2: in team fortress 2, the pyro\'s voice actor is actually the same voice actor as the spy.",
	"video game fun fact #3: in team fortress 2, the pyro has actual voice lines, but they are read off whilst a hand is covering up the voice actor\'s mouth.",
	"video game fun fact #4: in minecraft, the creeper is a result of a coding bug with the pig, where his torso was rotated incorrectly.",
	"video game fun fact #5: in portal, glados was not the origonal antagonist. instead, it was a robotic hoop.",
	"video game fun fact #6: in quake 2, the developers tried to patch out bunnyhopping, and instead created a new bug called \'strafehopping\'. this second bug was never removed in any later entries.",
	"video game fun fact #7: the game quake live origonally ran on a browser plugin, but was later on sold as a normal game.",
	"video game fun fact #8: the game celeste is based off of a PICO-8 demo created by the same developer. there is a copy of the PICO-8 game in celeste.",
	"video game fun fact #9: in minecraft, the elivation of the end of a wolf\'s tail is a representation of their health. the lower the tail, the more hurt they are.",
	"video game fun fact #10: the game doom\'s guns are all based off of pictures of toy guns being held by the developers. the only real weapon is a chainsaw.",
	"video game fun fact #11: in minecraft, crops grow fastest when surrounded by grass and being fully watered. the second fastest crop growing method is surrounding it with other crops.",
	"video game fun fact #12: in minecraft, there is a 0.75-6.75% of a skeleton horse spawning during a thunder strom. if you go within ten blocks of this horse, a skeleton will begin to ride it, and 2 more will appear, also with a skeleton.",
	"video game fun fact #13: in minecraft, there was once a deadly rabbit that had a 1 in 2500 chance of spawning. this rabbit did 4 hearts of damage.",
	"video game fun fact #14: in team fortress 2, there is a 1/100 chance of a dove flying out of the scout when he is gibbed.",
	"video game fun fact #15: there is an official chess set for team fortress 2.",
	"video game fun fact #16: all campaign posters for left 4 dead 1 & 2 are sold on the official valve store.",
	"video game fun fact #17: in minecraft, there is a giant version of the zombie called a \"giant\". these do not spawn naturally, and have no ai.",
	"video game fun fact #18: in minecraft, the villagers were first going to be walking and talking pigs, but were changed to instead be how they are today.",
	//"video game fun fact #19:"
]

const chantitles = ["0.jpg","1.jpg","2.jpg","4.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg","12.jpg","13.jpg","14.jpg","16.jpg","17.jpg","18.jpg","19.jpg","20.jpg","21.jpg","22.jpg","24.jpg","25.jpg","26.jpg","28.jpg","29.jpg","33.jpg","38.jpg","39.jpg","43.jpg","44.jpg","45.jpg","46.jpg","47.jpg","52.jpg","54.jpg","57.jpg","59.jpg","60.jpg","61.jpg","64.jpg","66.jpg","67.jpg","69.jpg","71.jpg","72.jpg","76.jpg","77.jpg","81.jpg","82.jpg","83.jpg","84.jpg","88.jpg","90.jpg","91.jpg","96.jpg","98.jpg","99.jpg","100.jpg","104.jpg","106.jpg","116.jpg","119.jpg","137.jpg","140.jpg","148.jpg","149.jpg","150.jpg","154.jpg","156.jpg","157.jpg","158.jpg","159.jpg","161.jpg","162.jpg","164.jpg","165.jpg","166.jpg","167.jpg","168.jpg","169.jpg","170.jpg","171.jpg","172.jpg","173.jpg","174.jpg","175.jpg","176.jpg","178.jpg","179.jpg","180.jpg","181.jpg","182.jpg","183.jpg","186.jpg","189.jpg","190.jpg","192.jpg","193.jpg","194.jpg","197.jpg","198.jpg","200.jpg","201.jpg","202.jpg","203.jpg","205.jpg","206.jpg","207.jpg","208.jpg","210.jpg","213.jpg","214.jpg","215.jpg","216.jpg","218.jpg","219.jpg","220.jpg","221.jpg","222.jpg","223.jpg","224.jpg","227.jpg","0.png","1.png","2.png","3.png","5.png","6.png","9.png","10.png","11.png","12.png","14.png","16.png","19.png","20.png","21.png","22.png","23.png","24.png","26.png","27.png","28.png","29.png","30.png","31.png","32.png","33.png","34.png","37.png","39.png","40.png","41.png","42.png","43.png","44.png","45.png","48.png","49.png","50.png","51.png","52.png","53.png","57.png","58.png","59.png","64.png","66.png","67.png","68.png","69.png","70.png","71.png","72.png","76.png","78.png","79.png","81.png","82.png","85.png","86.png","87.png","89.png","95.png","98.png","100.png","101.png","102.png","105.png","106.png","107.png","109.png","110.png","111.png","112.png","113.png","114.png","115.png","116.png","118.png","119.png","120.png","121.png","122.png","123.png","126.png","128.png","130.png","134.png","136.png","138.png","139.png","140.png","142.png","145.png","146.png","149.png","150.png","151.png","152.png","153.png","154.png","155.png","156.png","157.png","158.png","159.png","160.png","163.png","164.png","165.png","166.png","167.png","168.png","169.png","170.png","171.png","172.png","173.png","174.png","178.png","179.png","180.png","181.png","182.png","184.png","186.png","188.png","190.png","192.png","193.png","194.png","195.png","196.png","197.png","198.png","200.png","202.png","203.png","205.png","206.png","207.png","209.png","212.png","213.png","214.png","216.png","217.png","218.png","219.png","220.png","221.png","222.png","223.png","224.png","225.png","226.png","229.png","231.png","232.png","233.png","234.png","235.png","237.png","238.png","239.png","240.png","241.png","242.png","244.png","245.png","246.png","247.png","248.png","249.png","250.png","253.png","254.png","255.png","256.png","257.png","258.png","259.png","260.png","262.png","268.png","0.gif","1.gif","2.gif","3.gif","4.gif","5.gif","6.gif","7.gif","8.gif","9.gif","10.gif","12.gif","13.gif","14.gif","15.gif","16.gif","18.gif","19.gif","20.gif","21.gif","22.gif","23.gif","24.gif","28.gif","29.gif","30.gif","33.gif","34.gif","35.gif","36.gif","37.gif","39.gif","40.gif","42.gif","44.gif","45.gif","46.gif","48.gif","50.gif","52.gif","54.gif","55.gif","57.gif","58.gif","59.gif","60.gif","61.gif","63.gif","64.gif","66.gif","67.gif","68.gif","69.gif","70.gif","72.gif","73.gif","75.gif","76.gif","77.gif","78.gif","80.gif","81.gif","82.gif","83.gif","86.gif","87.gif","88.gif","92.gif","93.gif","94.gif","95.gif","96.gif","97.gif","98.gif","99.gif","100.gif","101.gif","102.gif","103.gif","104.gif","105.gif","106.gif","108.gif","109.gif","110.gif","111.gif","112.gif","113.gif","115.gif","116.gif","117.gif","118.gif","119.gif","120.gif","122.gif","123.gif","124.gif","127.gif","129.gif","130.gif","131.gif","134.gif","135.gif","136.gif","138.gif","139.gif","141.gif","144.gif","146.gif","148.gif","149.gif","153.gif","154.gif","155.gif","157.gif","158.gif","159.gif","160.gif","161.gif","162.gif","164.gif","166.gif","167.gif","168.gif","169.gif","170.gif","171.gif","172.gif","173.gif","174.gif","175.gif","176.gif","177.gif","178.gif","181.gif","182.gif","183.gif","185.gif","186.gif","187.gif","188.gif","189.gif","190.gif","191.gif","192.gif","193.gif","195.gif","196.gif","197.gif","200.gif","201.gif","202.gif","203.gif","204.gif","205.gif","206.gif","207.gif","208.gif","209.gif","210.gif","211.gif","212.gif","213.gif","214.gif","215.gif","216.gif","217.gif","219.gif","220.gif","221.gif","222.gif","224.gif","225.gif","226.gif","227.gif","228.gif","230.gif","232.gif","233.gif","234.gif","235.gif","238.gif","240.gif","241.gif","243.gif","244.gif","245.gif","246.gif","247.gif","249.gif","250.gif","251.gif","253.gif"]

const contestwinners = ["https://i.imgur.com/s4Zx0bp.png","https://i.imgur.com/0TLsrNC.gif","https://i.imgur.com/SBQY6tH.png","https://i.imgur.com/Utj2E3h.gif","https://i.imgur.com/OVAbo6b.gif","https://i.imgur.com/77Tg6ST.gif","https://i.imgur.com/ZIdtIfx.png","https://i.imgur.com/g0ydoV6.gif","https://i.imgur.com/7f7T7Of.png","https://i.imgur.com/WXUg7Hj.gif","https://i.imgur.com/f4kpqlm.gif","https://i.imgur.com/dQqmwbs.png","https://i.imgur.com/42F0y7Y.jpeg","https://i.imgur.com/UuvbsFd.png","https://i.imgur.com/KDHitJE.gif","https://i.imgur.com/YQIQmBJ.gif","https://i.imgur.com/AGL3bss.jpeg","https://i.imgur.com/WUIb2rw.jpeg","https://i.imgur.com/hdr7xgj.png","https://i.imgur.com/zrmGFlG.jpeg","https://i.imgur.com/PF9gFMx.gif","https://i.imgur.com/a18eand.png","https://i.imgur.com/8GLpjdV.png","https://i.imgur.com/7RxXIPu.jpeg","https://i.imgur.com/P8n5WPo.png","https://i.imgur.com/aMgCtuv.png","https://i.imgur.com/JEglFmh.png","https://i.imgur.com/CqZwjSE.png","https://i.imgur.com/maagDHI.gif","https://i.imgur.com/qBC8wXT.png","https://i.imgur.com/yEhdBWH.gif","https://i.imgur.com/MUQgKUQ.png","https://i.imgur.com/KYFTb9G.jpg","https://i.imgur.com/bq8TmdD.gif","https://i.imgur.com/TkRli4g.jpg","https://i.imgur.com/ocqsZ6J.gif","https://i.imgur.com/brajwcL.gif","https://i.imgur.com/Hn4DVn5.png","https://i.imgur.com/BQ4pkLq.gif","https://i.imgur.com/97LPBvJ.png","https://i.imgur.com/UFI9WdN.png","https://i.imgur.com/BxsZQpi.png","https://i.imgur.com/2lzWit0.gif","https://i.imgur.com/SarjhmE.gif","https://i.imgur.com/AyKwfmX.gif","https://i.imgur.com/KsyFSos.gif","https://i.imgur.com/nkub2CK.gif","https://i.imgur.com/TleNwuv.png","https://i.imgur.com/TleNwuv.png","https://i.imgur.com/SdrJPcR.png","https://i.imgur.com/VcF6nLi.gif","https://i.imgur.com/14QreYj.gif","https://i.imgur.com/umc9yMw.gif","https://i.imgur.com/GvYxTk9.gif","https://i.imgur.com/3iZKlfT.gif","https://i.imgur.com/qDIvKbc.png","https://i.imgur.com/X72UAcL.png","https://i.imgur.com/GmRr33J.gif","https://i.imgur.com/Xht1A19.gif","https://i.imgur.com/nWisv43.gif","https://i.imgur.com/wn7cPdq.gif","https://i.imgur.com/beSwF0t.png","https://i.imgur.com/UcrDlQd.gif","https://i.imgur.com/htXjn11.png","https://i.imgur.com/6HAg2Rw.jpg","https://i.imgur.com/ReKUts0.png","https://i.imgur.com/rTTmHEi.png","https://i.imgur.com/e34yHiw.gif","https://i.imgur.com/OnoTJHq.gif","https://i.imgur.com/vGSuGSl.jpg","https://i.imgur.com/vGSuGSl.jpg","https://i.imgur.com/KB5Zsto.gif","https://i.imgur.com/7uiOqHV.png","https://i.imgur.com/pZ0ARTd.gif","https://i.imgur.com/NGtmB2G.gif","https://i.imgur.com/fomNzv0.gif"]

const snoocolors = ["A5A4A4","545452","A06A42","C18D42","FF4500","FF8717","FFB000","FFD635","DDBD37","D4E815","94E044","46A508","46D160","0DD3BB","25B79F","008985","24A0ED","0079D3","7193FF","4856A3","7E53C1","FF66AC","DB0064","EA0027","FF585B"]

const snooposes = ["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20"]

//{name:"", link:"", image:"", status:""}
const huds = [
	{name:"d1zr1ght hud", link:"https://huds.tf/forum/showthread.php?tid=380", image:"https://huds.tf/forum/xthreads_attach.php/581_1487414529_9ba3f05e/21a2920607116c6b41ac38b919856d7a/20170218153617_1.jpg", status:"outdated"},
	{name:"JayHUD", link:"https://huds.tf/forum/showthread.php?tid=210", image:"https://huds.tf/forum/xthreads_attach.php/71_1463092938_1e1f7722/d9f2e101b708c7f5b1a664aececdfb8b/8IY0Ig0.jpg", status:"outdated"},
	{name:"smeshud", link:"https://huds.tf/forum/showthread.php?tid=338", image:"https://huds.tf/forum/xthreads_attach.php/466_1475399274_c672c804/51a055d9462bd17b96b1e674711a413b/ZgRhnZ4.jpg", status:"outdated"},
	{name:"QTCHud", link:"https://huds.tf/forum/showthread.php?tid=243", image:"https://huds.tf/forum/xthreads_attach.php/233_1465167802_e25a7a02/1973239f1971fbe6f06496785950371a/jHiJ8IV.jpg", status:"outdated"},
	{name:"Magnum HUD", link:"https://huds.tf/forum/showthread.php?tid=266", image:"https://huds.tf/forum/xthreads_attach.php/303_1467475477_80c37732/af23b0f48377db2dacf50921d18cc0b1/magnum_hud_screenshot_2.png", status:"outdated"},
	{name:"pineHUD", link:"https://huds.tf/forum/showthread.php?tid=390", image:"https://huds.tf/forum/xthreads_attach.php/612_1489855061_ed15833a/0dccb96b54f0cac17ca33c6c7f115f3f/sdas.jpg", status:"outdated"},
	{name:"The Mannterface", link:"https://huds.tf/forum/showthread.php?tid=219", image:"https://huds.tf/forum/xthreads_attach.php/109_1463776109_b55d5a96/ac39213458fa18a434f500ba61b2cfdc/19201080default.jpg", status:"outdated"},
	{name:"DoodleHUD", link:"https://huds.tf/forum/showthread.php?tid=285", image:"https://huds.tf/forum/xthreads_attach.php/356_1468234536_3219bf54/61ed77f72e134e2341a71beaeaa77724/20160711044917_1.jpg", status:"outdated"},
	{name:"mHUD", link:"https://huds.tf/forum/showthread.php?tid=250", image:"https://huds.tf/forum/xthreads_attach.php/253_1465505869_62f537f1/c1362a2cee136a45b435c8e102e856be/bNB46yH.png", status:"outdated"},
	{name:"DoggyHud", link:"https://huds.tf/forum/showthread.php?tid=227", image:"https://huds.tf/forum/xthreads_attach.php/153_1464169566_156aa720/11cbbab1bb586c6fca583e04166348d3/screenshot4.jpg", status:"outdated"},
	{name:"rayshud", link:"https://huds.tf/forum/showthread.php?tid=254", image:"https://huds.tf/forum/xthreads_attach.php/272_1465807385_45b50e47/4dc1f72f2b1122d10561bb97b7986271/6fXYbi9.png", status:"outdated"},
	{name:"noto", link:"https://huds.tf/forum/showthread.php?tid=183", image:"https://huds.tf/forum/xthreads_attach.php/21_1460800545_0e49b3a3/e0ba4e0fcbc81ac3cd01587326b5de30/5.png", status:"outdated"},
	{name:"Overwatch HUD", link:"https://huds.tf/forum/showthread.php?tid=284", image:"https://huds.tf/forum/xthreads_attach.php/352_1482815087_e363e7f7/f2c8d983f42781eed1f2feaf4d7a5525/Y2lw4kf.jpg", status:"outdated"},
	{name:"yayahud", link:"https://huds.tf/forum/showthread.php?tid=265", image:"https://huds.tf/forum/xthreads_attach.php/301_1467475390_2a2f7cfd/a2491eb419e0f953ec18427081287b73/fmO5soN.jpg", status:"outdated"},
	{name:"RevHud", link:"https://huds.tf/forum/showthread.php?tid=246", image:"https://huds.tf/forum/xthreads_attach.php/240_1465229837_ea23ffd5/0fa90ac7ff569abae1088fad0353825e/FSw3W2n.jpg", status:"outdated"},
	{name:"G-Mang HUD", link:"https://huds.tf/forum/showthread.php?tid=273", image:"https://huds.tf/forum/xthreads_attach.php/328_1467995902_83de03d1/344352da57da31d23691479c1c1640be/04%20-%20In-Game%20HUD.png", status:"outdated"},
	{name:"medHUD", link:"https://huds.tf/forum/showthread.php?tid=223", image:"https://huds.tf/forum/xthreads_attach.php/131_1463946944_3807eb09/30465efa15eedf8637431b9a416c8ba7/screeshot.jpg", status:"outdated"}
]