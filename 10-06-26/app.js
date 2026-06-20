const express = require("express");

const app = express();


app.set("view engine", "ejs");


let dipesh = {
  name: "Dipesh Singh",
  rollno: 30,
  age: 19
};

let color = "red";
let flag = 5;

app.get('/', (req, res) => {
  
  res.render("user", { dipesh, color, flag });
});


app.listen(3131, () => {
  console.log("Server is running at 3131");
});