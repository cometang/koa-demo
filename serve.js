const Koa = require("koa");
const json = require('koa-json');
const koaRouter = require('koa-router');
const path = require('path');
const render = require('koa-ejs')

const app = new Koa();
const router = new koaRouter();




app.use(json());
// app.use(async ctx => (ctx.body={msg:'啦啦啦'}));
// router.get('/index',ctx=>(ctx.body='sssssss'));

//DB
const list = [1,2,3,4,5,6,7]


//配置模板引擎
render(app,{
    root:path.join(__dirname,'views'),
    layout:'layout',
    viewExt:'html',
    cache:false,
    debug:false,
})

//路由跳转
router.get('/',async ctx=>{
    await ctx.render('index',{
        data:'我是一个前端开发者',
        list:list
    })
})


app.use(router.routes()).use(router.allowedMethods());

app.listen(3000,()=>{console.log('koa服务端已启动')});