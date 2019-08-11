var fs = require('fs');
fs.readdir('./test',function(err,files){
  files.forEach((item,index)=>{
    console.log(item)
  })
})