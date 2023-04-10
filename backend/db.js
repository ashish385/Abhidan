// mongodb+srv://Ashish:Ashish1234@cluster0.vnevat0.mongodb.net/test
//  practice



const mongoose = require('mongoose');


const db_url = "mongodb+srv://Abhidan:Abhidan@cluster0.xfqelmx.mongodb.net/Abhidan";

mongoose.connect(db_url);

const db_connect = mongoose.connection;

db_connect.on("error", () => {
    console.log("Database Connection failed!");
})

db_connect.on("connected", () => {
    console.log("Database Connection successfully!");
})

module.exports = mongoose;