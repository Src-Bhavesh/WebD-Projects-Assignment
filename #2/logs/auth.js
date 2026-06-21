const auth=(req,res,next)=>{
  console.log("You have sucessfully loged in");
  next();
  
}
module.exports = auth;