var fs = require('fs');
fs.writeFile('./input.txt','这是写入的内容',function(err){
  if(err){
    console.log(err)
  }
  fs.readFile('./input.txt',function(err,data){
    console.log(data.toString())
  })
})