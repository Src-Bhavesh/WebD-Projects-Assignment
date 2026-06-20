const express = require("express");
const app =express();
const mongoose = require('mongoose');


mongoose.connect("mongodb://127.0.0.1:27017/mydb")
  .then(() => console.log("DB Connected"))
  .catch(err => console.log(err));


app.get('/',async(req,res)=>{
  
})


app.listen(3000,()=>{
  console.log("server is running at 3000");
  
})