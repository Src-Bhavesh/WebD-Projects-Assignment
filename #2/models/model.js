const mongoose = require("mongoose")

const mobileschema = new mongoose.Schema({
  brand:{
    type:String,
    required:true
  },
  model:{
    type:String,
    required:true
  },
  ram:Number,
  storage:Number,
  price:{
    type:Number,
    required:true
  }

})

const mobile = mongoose.model('Mobile',mobileschema);

module.exports = mobile;