const express = require("express")
const mongoose = require("mongoose")
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.set("view engine", "ejs")


// mongoose.connect("mongodb://127.0.0.1:27017/Hitech")
mongoose.connect("mongodb+srv://bhaveshpandey:webdevproject@cluster0.wz63xid.mongodb.net/?appName=Cluster0")
.then(()=>{
  console.log("DB Connected")
})
.catch((err)=>{
  console.log(err," Error aaa gya")
});



const studentSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true,
    minlength:3
  },
  age:{
    type: Number,
    required: false,
    min: 18
  },
  email:String,
  gpa:Number
})

//model
const Student = mongoose.model("Student",studentSchema,)


app.use(express.static("public"))


app.get('/insertdata',(req,res)=>{
  res.render("form.ejs")
})

app.post('/createdata',async(req,res)=>{
  console.log(req.body);
  let data = await Student.create(req.body)
  console.log(data);
  
  res.send("Data received successfully!");
  
})



app.listen(3000,()=>{
  console.log("server is running at 3000");
  
})