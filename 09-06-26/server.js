const express = require("express")
const app = express();
const port = 3000
const fs = require("fs")

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.get('/', (req, res) => {
  res.send("Home page")
})

app.post('/register', (req, res) => {
  console.log(req.body);
  
  fs.writeFileSync("data.json", JSON.stringify(req.body) + "\n", "utf-8")
  res.send("registration completed")
})

app.listen(port, () => {
  console.log(`server is running at ${port}`);
})
