const Koa = require('koa');
const app = new Koa();

app.use(async (ctx,next)=>{
  console.log('query start 1'); //1
  next();
  console.log('query end 1')//7
})

app.use(async (ctx,next)=>{
  console.log('query start 2');//2
  next();
  console.log('query end 2') //6
})

app.use(async (ctx,next)=>{
  console.log('query start 3');//3
  next();
  console.log('query end 3') //5
})

const main = ctx =>{
  ctx.body = "hello koa" //这里执行完
}

app.use(main);
app.listen(3008)