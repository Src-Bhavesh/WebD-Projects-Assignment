const express = require("express")
const mongoose = require("mongoose")
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
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
  course: String,
  gpa: Number,
})

//model
const Student = mongoose.model("Student", studentSchema);

app.use(express.static("public"))

app.get('/', (req, res) => {
  res.render("home")
})

app.get('/insertdata', (req, res) => {
  res.render("form")
})

app.post('/createdata', async (req, res) => {
  req.body.ip = req.ip;
  let data = await Student.create(req.body)
  console.log(data);
  res.redirect('/getdata')
})

app.get('/getdata', async (req, res) => {
  let data = await Student.find();
  res.render("student", { data })
})

app.get('/delete/:id',async(req,res)=>{
  await Student.findByIdAndDelete(req.params.id);
  res.redirect('/getdata');
})

app.get('/edit/:id' , async(req,res)=>{
  let data = await Student.findById(req.params.id)
  res.render('edit',{data})
})

app.post('/update/:id',async(req,res)=>{
  let data = await Student.findByIdAndUpdate(req.params.id,req.body,{new:true});
  res.redirect('/getdata')
})

app.listen(3000, () => {
  console.log("server is running at 3000");
});






