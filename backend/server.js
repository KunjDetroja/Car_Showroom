const express = require("express");
const app = express();
const Car = require('./models/carModel');
const port = process.env.PORT || 5000;
const dbConnection = require ('./db');
app.use(express.json());

require('dotenv').config();

// require('dotenv').config({ path: '.env' });
// console.log(process.env.MONGOURL)
const path = require("path");
const usersRoute = require('./routes/usersRoute')
const carsRoute = require('./routes/carsRoute')
const bookingsRoute = require('./routes/bookingsRoute')


app.use("/api/cars/", require("./routes/carsRoute"));
app.use("/api/users/", require("./routes/usersRoute"));
app.use("/api/bookings/", require("./routes/bookingsRoute"));


__dirname = path.resolve();

if(process.env.NODE_ENV==="production") {
 app.use(express.static(path.join(__dirname,"/frontend/build")));

 app.get('*',(req,res)=>{
   res.sendFile(path.resolve(__dirname,"frontend","build","index.html"));
 });
}else{
	app.get("/", (req, res)=>{
      res.send("API is running.");
	});
}

//static files
app.use(express.static(path.join(__dirname,'../frontend/build')))

app.get('*', function(req,res){
  res.sendFile(path.join(__dirname,"../frontend/build/index.html"))
})


//----------deployment-----------



app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Node JS Server Started in Port ${port}`));