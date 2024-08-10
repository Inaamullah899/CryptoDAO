const mongoose = require('mongoose');
// const connectionstring='mongodb+srv://dbuser:inam1234@cryptodao.oi4yx.mongodb.net/?retryWrites=true&w=majority&appName=CryptoDAO';

const dbstring = require('../config/index.js')
const dbconnect= async() => {

try {
  const conn= await mongoose.connect(dbstring);
  console.log(`db connected to host:${conn.connection.host}`);
    
} catch (error) {
    console.log(`Error : ${error}`);
}



};
module.exports = dbconnect;