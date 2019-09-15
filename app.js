// Server Code's Start
const tmi = require("tmi.js");
const rp = require('request-promise-native');
const countdown = require('countdown');
const request = require('request');
var SpotifyWebApi = require('spotify-web-api-node');

var kanser = 200;

var spotifyApi = new SpotifyWebApi({
    clientId: '{SPOTİFY_CLİENT_İD}',
    clientSecret: '{SPOTİFY_CLİENT_SECRET}',
    redirectUri: '{YOUR_SPOTİFY_APİ_URL}'
});

const options = {
    options: {
        debug: true
    },
    connection: {
        reconnect: true
    },
    identity: {
        username: "yagoo_bot",
        password: "oauth:rvisfo0vupc3uubweif0nod802eki8"
    },
    channels: ["#YAGOO"]
};


kraken = request.defaults({
    baseUrl: 'https://api.twitch.tv/kraken/',
    json: true,
    headers: {
        'Client-ID': 'l3sj3xhu5joj3rq9u2tz0h362stj7l',
        Accept: 'application/vnd.twitchtv.v5+json'
    }
});
// Server Code's End
const client = new tmi.client(options);

// Connect the client to the server..
client.connect();


// Called every time the bot connects to Twitch chat
function onConnectedHandler(addr, port) {
    client.say(`* Connected to ${addr}:${port}`);
}
client.on("chat", (channel, user, message, self) => {

    var reg = /^[0-9]+$/;
    //if (self) return;
    /*
	// Timeout Codes Start
	if (user['mod'] == false || user != 'yagoo') {
		let upperMsg = message.toUpperCase(),
			userDName = user['display-name']
		if ( message == "n-world") {
			client.timeout(channel, userDName, 30)
			if (userDName != 'yagoo') {
				client.say(channel, userDName + " Yazdığın kelimeler ayıp.(30 Saniye timeout.)")
		


		} else if (message == upperMsg && !message.includes(':')) {
			client.timeout(channel, userDName, 15)
			if (userDName != 'yagoo' && userDName.match(reg)) {
				client.say(channel, userDName + " Bağırmana gerek yok brom.. (15 Saniye timeout).")
			}	}
}*/
})



// Timeout Codes End   

// Chat Commands Start 

// Sosyal command
client.on("chat", (channel, user, message, self) => {
    if (message == "!sosyal") {
        client.say("yagoo", " Sosyal Medya üzerinden de beni takip edebilirsiniz :) | Youtube: youtube.com/yilmazyagizdokumaci | İnstagram: instagram.com/yagizdo | Medium:  medium.com/@dokumaciyagiz | Twitter: twitter.com/yagizdoo");
    }
});

// Takip command
client.on("chat", (channel, user, message, self) => {
    if (message == "!takip") {
        client.say("yagoo", "Sağ üst kısımdan beni takip ederseniz, yayınlarımı sosyal mecralar üzerinden paylaşırsanız bana en büyük desteği vermiş olursunuz :)")
    }
});

// Youtube Command 
client.on("chat", (channel, user, message, self) => {
    if (message == "!youtube") {
        client.say("yagoo", "Yayından kesitler ve Youtube'a özel içerikler için youtube'da bizi takip etmeyi unutmayın :)  ► https://www.youtube.com/yilmazyagizdokumaci")
    }
});
// İnstagram Command 
client.on("chat", (channel, user, message, self) => {
    if (message == "!instagram") {
        client.say("yagoo", "Beni instagramdan da takip etmek istemezmisin Kappa instagram.com/yagizdo")
    }
});
// Discord Command 
client.on("chat", (channel, user, message, self) => {
    if (message == "!discord") {
        client.say("yagoo", "Discord ailemize katılmak için ► https://discord.gg/yASARch | Twitch Hesabını discord'a bağlamak : https://clips.twitch.tv/QuaintTentativeBisonAliens")
    }
});
// Prime Command 
client.on("chat", (channel, user, message, self) => {
    if (message == "!prime") {
        client.say("yagoo", "Twitch Prime artık Türkiye'de ! Siz de her ay 1 kanala ücretsiz abone olabilirsiniz! Bunun yanında yayınları reklamsız izlemek, onlarca oyun ve içeriğe de ücretsiz ulaşma şansını kaçırmayın! https://twitch.amazon.com/prime Beleş aboneliğinizi de alırım he Kappa")
    }
});
// Abone Command 
client.on("chat", (channel, user, message, self) => {
    if (message == "!sub") {
        client.say("yagoo", 'Yayınları desteklemenin en iyi yolu abone olmaktır :) Gel Ailemize katıl :) Abone olmak için : https://www.twitch.tv/products/yagoo  istersen Durmaplay üzerinden abone kodu alarak da abone olabilirsin :) https://www.durmaplay.com/tr/store/twitch/buy/1-aylik-abonelik#a=1274553')
    }
});
// Donate Command 
client.on("chat", (channel, user, message, self) => {
    if (message == "!donate") {
        client.say("yagoo", "Yayınların gelişmesine destek olmak istiyorsan https://www.bynogame.com/destekle/yagoo link'i ile Bynogame üzerinden donate atabilirsiniz.")
    }
});
// Komutlar Command
client.on("chat", (channel, user, message, self) => {
    if (message == "!komutlar") {
        client.say("yagoo", "sosyal, takip, youtube, instagram, discord, prime, abone, donate")
    }
});

// Çekiliş Command
client.on("chat", (channel, user, message, self) => {
    if (message == "!çekiliş") {
        client.say("yagoo", "Haftalık abone hedefi dolduğunda çekiliş yapılacaktır. Çekiliş ödülleri o haftaya göre değişiklik gösterebilir.")
    }
});

// Kanser Command
client.on("chat", (channel, user, message, self) => {
    if (message == "!kanser") {
        kanser++;
        client.say("yagoo", "Yago " + " " + kanser + " kere kanser etti FeelsBadMan");
    }
});

// Chat Commands End 
// Timers Start
var sec = 60;
var mSec = 1000;
var sTime = 20 * sec * mSec;
var dTime = 100 * sec * mSec;
var tpTime = 15 * sec * mSec;
var doTime = 45 * sec * mSec;
var subTime = 70 * sec * mSec;

// 1. Timers 
fSocial = () => {
    client.say("yagoo", "Sosyal Medya üzerinden de beni takip edebilirsiniz :) | Youtube: youtube.com/yilmazyagizdokumaci | İnstagram: instagram.com/yagizdo | Medium:  medium.com/@dokumaciyagiz | Twitter: twitter.com/yagizdoo")
}
setInterval(() => {
    fSocial()
}, sTime)


// 2. Timers
fDiscord = () => {
    client.say("yagoo", "Discord ailemize katılmak için ► https://discord.gg/yASARch | Twitch Hesabını discord'a bağlamak : https://clips.twitch.tv/QuaintTentativeBisonAliens")
}

setInterval(() => {
    fDiscord()
}, dTime)


// 3. Timers
fTPrime = () => {
    client.say("yagoo", "Twitch Prime artık Türkiye'de ! Siz de her ay 1 kanala ücretsiz abone olabilirsiniz! Bunun yanında yayınları reklamsız izlemek, onlarca oyun ve içeriğe de ücretsiz ulaşma şansını kaçırmayın! https://twitch.amazon.com/prime Beleş aboneliğinizi de alırım he Kappa")
}

setInterval(() => {
    fTPrime()
}, tpTime)

// 4. Timers     
fDonate = () => {
    client.say("yagoo", "Yayınların gelişmesine destek olmak istiyorsan https://www.bynogame.com/destekle/yagoo link'i ile Bynogame üzerinden donate atabilirsiniz.")
}

setInterval(() => {
    fDonate()
}, doTime)

// 5. Timers 
fSub = () => {
    client.say("yagoo", "Yayınları desteklemenin en iyi yolu abone olmaktır :) Gel Ailemize katıl :) Abone olmak için : https://www.twitch.tv/products/yagoo  istersen Durmaplay üzerinden abone kodu alarak da abone olabilirsin :) https://www.durmaplay.com/tr/store/twitch/buy/1-aylik-abonelik#a=1274553")
}

setInterval(() => {
    fSub()
}, subTime)

// Timers End 

// Uptime Command Start
client.on('message', (channel, userstate, message, fromSelf) => {
    if (fromSelf || message[0] !== '!') {
        return;
    }

    userstate.name = userstate['display-name'] || userstate.username;

    let chan = channel.slice(1),
        params = message.split(' '),
        commandName = params.shift().slice(1).toLowerCase(),
        hasParams = params.length > 0,
        perms = {
            mod: userstate.mod,
            broadcaster: userstate['user-id'] === userstate['room-id']
                //broadcaster: 'broadcaster' in userstate.badges
        },
        reply = msg => client.say(channel, msg);

    perms.modUp = perms.mod || perms.broadcaster;

    if (commandName === 'time') {
        let d = new Date();
        reply(d.toLocaleString());
    } else if (commandName === 'created') {
        let target = userstate.username;
        if (hasParams && perms.modUp) {
            target = params[0];
        }

        request({
            // Yeni url eklendi
            url: `https://api.twitch.tv/kraken/streams/${channelID}?client_id=${clientID}&api_version=5`,
            qs: {
                _: Math.random() * 1000000
            }
        }, (err, res, body) => {
            if (err) {
                console.log('ERROR', err);
                reply('DEV: Errror');
                return;
            } else if (res.statusCode !== 200) {
                reply('DEV: User not found');
                return;
            }

            let timestamp = new Date(body.created_at).getTime(),
                created = countdown(timestamp, Date.now(), 158),
                name = body.display_name || body.name,
                message = `${userstate.name}, ${name} was created ` +
                `${created.toString()} ago.`;

            reply(message);
        });
    } else if (commandName === 'süre') {
        let target = chan;
        if (hasParams && perms.modUp) {
            target = params[0];
        }

        kraken({
            url: `streams/${channelID}?client_id=${clientID}&api_version=5`,
            qs: {
                _: Math.random() * 1000000
            }
        }, (err, res, body) => {
            if (err) {
                console.log('ERROR', err);

                reply('Errror');
                return;
            } else if (res.statusCode !== 200) {
                reply('User not found');
                return;
            }

            if (body.stream === null) {
                reply(`Yagoo şuan yayında değil. :(`);
                return;
            }

            let timestamp = new Date(body.stream.created_at).getTime(),
                uptime = countdown(timestamp, Date.now(), 158);
            let message;
            if (uptime.hours > 0) {
                message = `${uptime.hours} saat ${uptime.minutes} dakikadır yayındayız! `;
            } else {
                message = `${uptime.minutes} dakika ${uptime.seconds} saniyedir yayındayız! `;
            }

            reply(message);
        });
    }
});
// Uptime Command End

// Sub Command Start
client.on("subscription", function(channel, username, method, message, userstate) {
    client.action("yagoo", username + " Abone olduğun için teşekkürler PogChamp")
});

// Sub Command End 


// Resub Command Start
client.on("resub", function(channel, username, months, message, userstate, methods) {
    client.action("yagoo", username + months + " aydır abone olduğun için teşekkürler PogChamp")
});

// Resub Command End 

// Game and Title Change Command Start
const clientID = 'l3sj3xhu5joj3rq9u2tz0h362stj7l';
const channelID = '167305593';
const oauthToken = 'l3sj3xhu5joj3rq9u2tz0h362stj7l';
client.on("chat", (channel, user, message, self) => {
    if (user['mod'] || user.username == 'yagoo') {
        if (message.includes('!title')) {
            message = message.replace('!title', '')
            message = message.substring(1)
            request({
                url: `https://api.twitch.tv/kraken/channels/${channelID}"&api_version=5`,
                json: true,
                method: 'put',
                headers: {
                    'Client-ID': clientID,
                    Accept: 'application/vnd.twitchtv.v5+json',
                    Authorization: 'OAuth ' + oauthToken
                },
                body: {
                    channel: {
                        status: message
                    }
                }
            })
            client.say("yagoo", "Başlık" + ' "' + message + '" ' + "olarak güncellendi")
        } else if (message.includes('!game')) {
            message = message.replace('!game', '')
            message = message.substring(1)
            request({
                url: `https://api.twitch.tv/kraken/channels/${channelID}"&api_version=5`,
                json: true,
                method: 'put',
                headers: {
                    'Client-ID': clientID,
                    Accept: 'application/vnd.twitchtv.v5+json',
                    Authorization: 'OAuth ' + oauthToken
                },
                body: {
                    channel: {
                        game: message
                    }
                }
            })
            client.say("yagoo", "Oyun adı" + ' "' + message + '" ' + "olarak güncellendi")
        }
    }
});
// Game and Tittle Command's End 

// Subcount Code's Start
const privateAPI = rp.defaults({
    baseUrl: 'https://api.twitch.tv/api/',
    json: true,
    simple: false
});
client.on('message', async(channel, userstate, message, self) => {
    // Don't reply to messages from self or without the "!" as the first char
    if (self || message[0] !== '!') {
        return;
    }
    // Split the message by spaces
    let params = message.slice(1).split(' ');
    // Grab and remove the 1st parameter from the list and set it to lower case
    let command = params.shift().toLowerCase();
    // Naively convert the channel to its login
    let chan = channel.slice(1);
    // Grab the room ID from the userstate
    let {
        'room-id': roomID
    } = userstate;

    // Run the !subcount command
    if (command === 'abone') {
        // Get the subscriber count for the channel
        let count = await getSubcount({
            chan,
            roomID
        });
        // If not null, a valid OAuth token was used and the data was returned
        if (count >= 0) {
            client.say(channel, `Abone sayısı :  ${count}`).catch(logErr);
        }
    }
});

// Simply log errors
function logErr(err) {
    if (err) {
        console.error(err);
    }
}

async function getSubcount({
    chan,
    roomID
}) {
    // Somehow get the token associated with the channel

    // Make the API call
    let body = await privateAPI({
        // Channel login, not ID
        url: `channels/${channelID}/subscriber_count`,
        headers: {
            Authorization: `OAuth ${oauthToken}`
        }
    });
    // If there's an error then log and return null
    if ('error' in body) {
        logErr(data);
        return null;
    }
    // Return the sub count
    return body.count;
}
// Subcount Code's End


// !şarkı Code's Start
client.on("chat", (channel, user, message, self) => {
    if (message.includes('!şarkı')) {
        request({
            url: '{YOUR_SPOTİFY_APİ_URL}',
            json: true
        }, function(err, res, json) {
            if (err) {
                throw err;
            } else {
                let song = json.toString();
                let lastC = json.substring(json.length - 1);
                let linkN = json.indexOf('" ');
                song = song
                    .replace('Playing', 'Şuan Çalan Şarkı')
                    .replace('▶️', '')
                    .replace('->', 'Spotify Linki :');
                client.say(channel, song);
            }
        });
    }
});

// Function called when the "dice" command is issued
function rollDice() {
    const sides = 6;
    return Math.floor(Math.random() * sides) + 1;
}

// !zar Code's Start
client.on("chat", (channel, user, message, self) => {
    if (message == '!zar') {
        const num = rollDice();
        client.say(channel, num + ' attın');

    }
});