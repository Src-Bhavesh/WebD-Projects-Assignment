const fs = require('fs')
// console.log(fs);

let result = fs.readFileSync('file.txt',"utf8")
console.log(result);


fs.readFile("file.txt","utf8",(error,data)=>{
  if(error){
    throw error;
  }
  else{
    console.log(data);
    
  }
})

console.log("hello 2");
