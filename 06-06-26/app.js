const express = require("express");
const app = express();

app.use((req,res,next)=>{
  let out = `url = ${req.url} and address is ${req.ip}`
  console.log(out);
  next();
})

app.use((req,res,next)=>{
  console.log("Middleware 1 for mobile Authentication");
  // Authentication 
  let auth = true;
  if(!auth){
    res.send("Mobile auth failed . ... try again")
  }
  else{
    next();
  }
})

app.use((req, res, next) => {
  console.log("Middleware 1 for email Authentication");
  // Authentication 
  let auth = true;
  if (!auth) {
    res.send("Email auth failed . ... try again")
  }
  else {
    next();
  }
})

app.get("/", (req, res) => {
  res.send("Home page")
})

app.post("/details",(req,res)=>{
  console.log("details wala route");
  console.log(req.body);

  res.send("Data saved...")
  
  
})


app.get("/about",(req,res)=>{
  res.send("About Page ......")
})

app.use((req,res,next)=>{
  res.send("404 not found")
})






app.listen(3434,()=>{
  console.log("server is running at 3434");
  
})
