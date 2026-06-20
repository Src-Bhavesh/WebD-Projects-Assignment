const express = require("express");
const app = express();
const port = 3535;
const fs = require("fs");

app.use(express.json());
app.use(express.urlencoded({extended : true}));



app.get("/", (req, res) => {
  res.send("Home Page ....");
});

app.post("/register", (req, res) => {
  console.log(req.body);
  fs.appendFileSync("data.json", JSON.stringify(req.body)+'\n',"uft-8")
  res.send("user registration completed");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
