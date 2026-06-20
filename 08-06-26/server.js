const express = require("express");
const app = express();
const port = 3456;
const fs = require("fs");

let i = 0;


app.use("/public",express.static("public"));


// app.use((req, res, next) => {
//   i++;
//   const timestamp = new Date();
//   const log = `[${i}] Client data = ${timestamp} , ${req.ip} , ${req.url}`;

  
//   fs.appendFileSync("log.txt", log, "utf-8");

//   next();
// });

app.get("/", (req, res) => {
  res.send("Home Page ....");
});

app.post("/register", (req, res) => {
  res.send("user registration completed");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
