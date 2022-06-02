
const net = require('net')

const hostName = '127.0.0.1';
const port = '9001';
const url = [hostName,port].join(":");
// 客户端建立连接
const client = new net.Socket();
let count = 1;
// 客户端进行连接
client.connect(port,hostName,()=>{
  console.log(`客户端已经成功连接到${url}`)

  // 向服务端发数据
  const timer = setInterval(()=>{
    if(count > 10){
      client.write("客户端发送完毕了")
      clearInterval(timer);
      return
    }
    client.write(`这是客户端第${count++}次发送数据`)
  },1000)


})

// 接收服务端发过来的信息，
client.on("data",(data)=>{
  console.log(`收到服务端的数据:${data}`)
})

client.on("close",()=>{
  console.log(`客户端关闭连接`)
})
