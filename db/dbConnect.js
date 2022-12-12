const mongoose = require("mongoose");
require('dotenv').config()

async function dbConnect(){
    try{
        await mongoose.connect(process.env.DB_URL);
        console.log("Connected to mongodb");
    }
    catch(error){
        console.log(error);
    }
}

module.exports = dbConnect;
