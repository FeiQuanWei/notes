//同步阻塞写法
  // var fs = require('fs');
  // var readData = fs.readFileSync('./input.txt')
  // var asdf = readData.toString()
  // console.log(readData)
  // console.log(asdf)

//异步非阻塞写法
var fs = require('fs');
fs.readFile('./input.txt',function(err,data){
  if(err){
    console.log(err);
  }else{
    console.log(data.toString())
  }
})
console.log('read over')