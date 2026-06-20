const express = require("express");
const app = express();
const port = 3333;

console.log(typeof express);

app.get('/', (req, res) => {
  console.log("User is on home page");
  res.send(`
    <h1 style="color: red;">
      YUPPPPP!!!!! <br> 
      Noooooo hihlkh whatttt <br> 
      <img src="https://images.unsplash.com/photo-1570535316416-24e50eb19881?auto=format&fit=crop&w=300" alt="Skull Logo"> 
    </h1>
  `);
});

app.get('/about', (req, res) => {
  res.send("Heyyy its me");
});



app.all('/about', (req, res) => {
  res.status(405).send("Method Not Allowed");
});


app.get(("*"), (req, res) => {
  res.send("get request mein path galat hai")
})

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});