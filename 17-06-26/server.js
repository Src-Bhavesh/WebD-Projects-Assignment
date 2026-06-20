const express = require("express")
const mongoose = require("mongoose")
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs")

mongoose.connect("mongodb://127.0.0.1:27017/Hitech")
  .then(() => {
    console.log("DB Connected")
  })
  .catch((err) => {
    console.log(err, " Error aaa gya")
  });

const studentSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 3
    },
    age: {
      type: Number,
      required: false,
      min: 18
    },
    email: String,
    gpa: Number,

})

//model
const Student = mongoose.model("Student", studentSchema,)


app.use(express.static("public"))

app.get('/deleteM',async(req,res)=>{
  let data = await Student.deleteMany({age:{$gt:20}})
  res.send("Delete Age graeter than 20")
})

app.get('/',(req,res)=>{
  res.render("home")
})

app.get('/update', async (req, res) => {
  let data = await Student.updateOne({ name: "Pandey" }, { name: "Pandey Bhavesh" })
  res.send("Updated one")
})


app.get('/updateM',async(req,res)=>{
  let data = await Student.updateMany({name:"Bhavesh Pandey"},{name:"Pandey"})
  res.send("Updated all")
})


app.get('/insertdata', (req, res) => {
  res.render("form.ejs")
})

app.post('/createdata', async (req, res) => {

    // let ip = req.body.ip;
    // if()

    console.log(req.body);
    let data = await Student.create(req.body)
    console.log(data);

    res.send("Data received successfully!");

})

app.get('/getdata',async(req,res)=>{
  let data = await Student.find();
  res.render("student",{data})

})



app.listen(3000, () => {
  console.log("server is running at 3000");

})