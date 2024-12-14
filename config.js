const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
    
SESSION_ID: process.env.SESSION_ID || "66ozSLbL#2bgaOZ2w-gje3daTNn3cGFb1G_3zcP_hxYsurdzW24c",
PREFIX: process.env.PREFIX || ".",
MODE: process.env.MODE || "public",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",    

}
