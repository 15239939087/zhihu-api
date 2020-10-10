/**
 * Created by 陈威 on 2020/10/8
 * Description:
 */
const Koa = require('koa');
const bodypaser = require('koa-bodyparser')
const app = new Koa();
const routing = require('./routes')
// body 解析必须放在 router 上面
app.use(bodypaser())
routing(app)
app.listen(3000, () => {
    console.log('监听 3000 端口')
})
