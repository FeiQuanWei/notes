var fs = require('fs');
// 读取流
  // var readStream = fs.createReadStream('./input.txt');
  // var data = ''
  // readStream.setEncoding('utf8');
  // readStream.on('data',function(chunk){
  //   data += chunk;
  // })
  // readStream.on('end',()=>{
  //   console.log(data)
  // })
  // readStream.on('error',(err)=>{
  //   // console.log(err)
  // })

// 写入流
  var data = '写入数据'
  var writeStream = fs.createWriteStream('./output.txt');
  writeStream.write(data,'utf8')
  writeStream.end()
  writeStream.on('finish',()=>{
    console.log("Write completed.");
  })
  writeStream.on('error', function(err) {
    console.log(err.stack);
  });

  console.log("Program Ended");