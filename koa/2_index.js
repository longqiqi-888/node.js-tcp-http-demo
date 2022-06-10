const Koa = require('koa');
// 中间件
const Router = require('koa-router')

const app = new Koa();
const router = new Router()

// 跨域 cors 6个头
app.use(async (ctx,next)=>{

  ctx.set('Access-Control-Allow-Origin',"*");
  // 允许通过的头
  ctx.set("Access-Control-Allow-Headers",
  "Content-Type,Content-Length,Authorization,Accept"),
  // 允许通过的方法
  ctx.set("Access-Control-Allow-Methods","put,post,get,delete,options")
  // Access-Control-Allow-Credentails 允许使用cookie
  // Access-Control-Max-Age option 预检
  // Access-Control-Expose-Headers 允许服务端返回的头信息
  ctx.set("Content-Type","application/json;charset=utf-8")
  if(ctx.request.method.toLowerCase()==='option'){
    //  预检就停了
    ctx.state = 200;
  }else{
    await next()
  }
})

router.get('/api',(ctx,next)=>{
  ctx.type = "application/json"
  ctx.body = {data:"hello api"}
})

app.use(router.routes())
// 拦截
app.use(router.allowedMethods())

app.listen(3008,()=>{
  console.log("server is listening in 3008")
})