const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

//gg
module.exports = {
SESSION_ID: 'put your session id', // ඔතනට "KING_DILISHA-MD=" කියලා දාන්න ඕන බොට් කනෙක්ට් වෙලා රිස්පොන්ස් එකක් නැති උනොත් උදා- .alive , .menu ගැහුවට බොට් වැඩ කරේ නැත්තන් අනිවාර්යයෙන් session id එක අලුත් කරන්න ඕන අලුත් session එකක් දාන්න එතකොට හරි.
ANTI_DELETE: process.env.ANTI_DELETE === undefined ? 'true' : process.env.ANTI_DELETE, // මේක false හෝ off දැම්මොත් antidelete off වෙනවා.
MV_BLOCK: process.env. MV_BLOCK === undefined ? 'true' : process.env. MV_BLOCK,  // මෙතනින් අනිත් අය මූවි ගන්න එක නවත්තන්න පුලුවන්  
ANTI_LINK: process.env.ANTI_LINK === undefined ? 'true' : process.env.ANTI_LINK, // මේකෙන් අනිත් අයට ගෲප් වල link shair කරපුහම අවවාද යන එක මේක ඔෆ් කරොත් ඒවා යන්නෙ නෑ
SEEDR_MAIL: '', // මේක ඔයාගෙ මේල් එක
SEEDR_PASSWORD: '', // මේක පාස්වර්ඩ් එක
SUDO: '', // මේක සූඩෝ නම්බර් එක
DB_NAME: 'load-dilisha-database', // මේක ඩේටා බේස් නම මේවා වෙනස් කරන්න එආ
LANG: 'SI', // මේක භාශාව
OWNER_NUMBER: '94754871798', // මෙතනට ඔයාගෙ නම්බරේ දාන්න ඕන (ඔයාට ඕනනම් විතරක්) මේකෙන් වෙන්නේ ඔයා බොට්ගේ ඔව්නර් වෙනවා උදා- .owner ගහපුවම ඔයාගෙ නම්බරේ තමා එන්නේ
TG_GROUP: 'https://t.me/load-dilisha-primium'

};
//GITHUB_AUTH_TdOKEN: 'ouvnI0xSDsmfWA1filVxx.SZ0vJGYkjlC5VX54U0e10',

