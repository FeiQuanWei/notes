var fs = require('fs');
// console.log('Going to open file!')
fs.open('./input.txt','r+',function(err,fd){
  if(err){
    return console.log(err);
  }
  console.log(fd)
})
// console.log('File opened successfully!')