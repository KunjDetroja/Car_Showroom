const mongoose = require("mongoose");

require('dotenv').config();
// console.log(process.env.MONGOURL)

function connectDB(){

    mongoose.connect(process.env.MONGOURL , {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , (e)=>{
        console.log('Mongo DB Connection Error',e)
    })


}

connectDB()

module.exports = mongoose