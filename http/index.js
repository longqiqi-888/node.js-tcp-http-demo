const http = require('http');


const hostName = '127.0.0.1';
const port = '9002';


// req-请求内容  res-响应内容
http.createServer(function(req,res){
  // 这里是文本格式，正常前端拿到的是json
  res.writeHead(200,{
    'Content-Type':"text/plain"
  });

  // 返回
  res.end("hello Http")
}).listen(port,hostName)
console.log(`http Server is listening on ${port}`)