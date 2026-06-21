const express = require("express")
const app = express();
const mongoose = require("mongoose")
const path = require("path")

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,"public")))
app.set("view engine" , "ejs");

mongoose.connect("mongodb://localhost:27017/Hitech")

const todoschema = new mongoose.Schema({
  task:{
  type: String,
  minlength: 5
  }
})
const todo = mongoose.model('todo',todoschema);

app.get("/",async(req,res)=>{
  res.send("Server Started")
})


app.get('/insert',async(req,res)=>{
  let tasks = await todo.find();

  res.render('form', { tasks }  );
})

app.post('/create',async(req,res)=>{
  
  let data = await todo.create(req.body)
  console.log(data);
  res.redirect('/insert');

})


app.get('/delete/:id', async (req, res) => {
  await todo.findByIdAndDelete(req.params.id);
  res.redirect('/insert');
});


app.get('/edit/:id', async (req, res) => {
  let taskToEdit = await todo.findById(req.params.id);
  res.render('edit', { task: taskToEdit });
});


app.post('/update/:id', async (req, res) => {
  await todo.findByIdAndUpdate(req.params.id, { task: req.body.task });
  res.redirect('/insert');
});



app.listen(3000,(req,res)=>{
  console.log("server is running at 3000");
  
})