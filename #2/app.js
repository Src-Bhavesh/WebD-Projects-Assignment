const express = require("express");
const app = express();
const connectDB = require("./config/db")
const mobileroute = require('./routes/mobileRoute')
const auth = require("./logs/auth");
const { urlencoded } = require("body-parser");
const port = 3000;

connectDB();

app.set("view engine",'ejs')
app.use(express.static('public'))

app.use(express.json());
app.use(urlencoded({extended:true}));

app.use(auth);
app.use('/',mobileroute);

app.listen(port,(req,res)=>{
  console.log(`Server is running at ${port}`);
  
})