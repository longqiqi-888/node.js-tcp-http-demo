const http = require("http")

const options ={
  hostName : '127.0.0.1',
  port : '9002',
  path: '/',
  method: 'get',
}

// 客户端http请求
const req = http.request(options,(res)=>{
  // 设置编码格式
  res.setEncoding('utf-8');
  res.on('data',(data)=>{
    console.log(`接收http返回的data:${data}`)
  })
})

req.end();