var http = require('http');
var fs = require('fs');
var url = require('url')
http.createServer(function(req,res){
  var pathname = url.parse(req.url).pathname;
  console.log(pathname)
  fs.readFile(pathname.substr(1),function(err,data){
    res.writeHead(200,{
      "ContentType":"text/plain;charset=utf-8"
    })
    if(err){
      console.log(err)
    }else{
      res.write(data.toString())
    }
    res.end()
  })
}).listen(1100);