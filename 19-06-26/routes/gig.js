const express = require("express")
const route = express.Router();


route.get("/",gigcontroller.ordertrack)
route.get("/assignOrder",gigcontroller.assignOredr)


module.exports=route;