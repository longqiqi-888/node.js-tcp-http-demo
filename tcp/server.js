
const net = require('net')

const hostName = '127.0.0.1';
const port = '9001';
// 创建tcp服务的实例
// 当tcp建立连接时，会调用callback 函数，params是socket对象
net.createServer((scoket)=>{
   const url = [hostName,port].join(":")
   console.log(`${url}已经连接成功`)

  // 客户端发来消息-底层都是发布订阅
  scoket.on('data',(data)=>{
    console.log(`${url}收到数据 ${data}`);
    // 回写告诉客户端
    scoket.write(`服务端已经收到了数据：${data}`)
   })

  //  客户端关闭了，也可以监听
  scoket.on('close',(data)=>{
    console.log(`${url}正在关闭`)
   })

}).listen(port,hostName)

console.log(`Server is listening on ${port}`)