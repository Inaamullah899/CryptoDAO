const dotenv = require('dotenv').config();


const dbstring = process.env.CONNECTION_STRING;

module.exports = dbstring;