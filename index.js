// สอนใช้งานโดย Beer-Studio.com
// https://beer-studio.com/steam-hour-booster/
const steamUser = require('steam-user');
const steamTotp = require('steam-totp');

var steamusername = 'steamid';
var steampassword = 'steampass';
var steamshared_secret = '';

var steamgames = ["Boost By Nozeed", 578080, 1172470, 570, 730, 1938090];  // Enter here AppIDs of the needed games
// PUBG=578080 CS2=730 Dota2=570 ApexLegends=1172470 CallOfDuty=1938090
// หากต้องการ รู้ APP ID ของเกมส์ที่จะบูสดูได้ที่ https://steamdb.info
var steamstatus = 1;  // การแสดงสถานะเล่นเกมส์ 1 - ออนไลน์, 7 - ซ่อนตัว


boost = new steamUser();
boost.logOn({"accountName": steamusername, "password": steampassword, "twoFactorCode": steamTotp.generateAuthCode(steamshared_secret)});
boost.on('loggedOn', () => {
	if (boost.steamID != null) console.log(boost.steamID + ' - Login Complete');
	boost.setPersona(steamstatus);               
	boost.gamesPlayed(steamgames);
});
