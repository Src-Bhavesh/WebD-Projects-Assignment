const express = require("express")
const mongoose = require("mongoose")
const app = express();

// app.use(express.json())
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
const Student = mongoose.model("student",studentSchema,)



app.get('/',async(req,res)=>{

  let allstudent = await Student.find();
  console.log(allstudent);
  allstudent=allstudent.filter((elem)=>{
    return elem.age>20;
  })


  // res.json(allstudent)

  res.render("students", { allstudent });
})


app.post('/createdata',async(req,res)=>{
  let obj ={
    name:"YOOYOO",
    age:20,
    course:"WEBD"
  }
  let data = await Student.create(obj)
  console.log(data);
  res.send("Data Saved sucessfully")
  
})





app.listen(3000,()=>{
  console.log("server is running at 3000");
  
})