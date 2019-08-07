var http = require('http');
var currentHttp = http.createServer((req,res)=>{
  res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
  res.end('响应结束')
});
currentHttp.listen(1100);
console.log('code is running');