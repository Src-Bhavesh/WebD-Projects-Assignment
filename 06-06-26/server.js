const express = require("express")
const app = express();

const data = require("./data.json");
// console.log(data);

app.get("/",(req,res)=>{
  res.send(data);
})

app.use((req,res,next)=>{
  console.log(`${req.url} running middleware 1`);
  next();
})

// app.get("/",(req,res)=>{
//   res.send({
//     "name": "XYZ",
//     "age": 44
//   })
// })

app.listen(3434,()=>{
  console.log("Server is running at 3434");
  
})