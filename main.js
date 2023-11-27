const Koa = require("koa");
const app = new Koa();

app.use(async ctx => {
    ctx.body = 'hello world from Railway';
});
const PORT = 3000
app.listen(process.env.PORT || PORT,()=>console.log("run server " + PORT));