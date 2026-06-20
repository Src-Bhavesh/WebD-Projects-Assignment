const express = require("express")
const app = express();


app.get('/',(req,res)=>{
  console.log(req.params);
  
  res.json({
    "Name":"Bhavesh Pandey",
    "Age":19
  })
})

app.get('/result/:year/:name',(req,res)=>{
  console.log(req.params);

  res.send(`Fail hai...${req.params.name}`)
  
})

app.get('/search',(req,res)=>{
  console.log(req.query);
  res.send("data found in database");
  
})


app.listen(3000,()=>{
  console.log("Server is running at 3000");
  
})