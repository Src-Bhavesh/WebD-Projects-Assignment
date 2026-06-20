const log = (req,res,next)=>{
  console.log("Global middleware 1");
  next();
  
}

module.exports=log;