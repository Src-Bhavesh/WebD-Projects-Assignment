const express = require("express")
const mongoose = require("mongoose")
const app = express();

app.set("view engine","ejs")

mongoose.connect("mongodb://127.0.0.1:27017/Hitech")
.then(()=>{
  console.log("DB Connected")
})
.catch((err)=>{
  console.log(err," Error aaa gya")
});

const studentSchema = new mongoose.Schema({
  name:String,
  age:Number,
  course:String
})

//model
const Student = mongoose.model("Student",studentSchema,)



app.get('/',async(req,res)=>{

  let allstudent = await Student.find();
  console.log(allstudent);
  allstudent=allstudent.filter((elem)=>{
    return elem.age>20;
  })


  // res.json(allstudent)

  res.render("students", { allstudent });
})






app.listen(3000,()=>{
  console.log("server is running at 3000");
  
})