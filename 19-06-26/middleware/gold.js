const gold = (req,res,next)=>{
  console.log("Client are gold premium service avail krna chata hai");
  next();
}

module.exports=gold;