/**
 * Created by 陈威 on 2020/10/10
 * Description:
 */

// 创建一个内存数据库
const db = [{name: '小明'}]

class UserCtl {
    findUser(ctx) {
        ctx.body = db
    }
    findUserById(ctx) {
        ctx.body = db[ctx.params.id * 1]
    }
    deleteUser(ctx) {
        db.splice(ctx.params.id * 1, 1)
        ctx.body = 204;
    }
    createUser(ctx) {
        db.push(ctx.request.body)
        ctx.body = ctx.request.body;
    }
    updateUser(ctx) {
        db[ctx.params.id * 1] = ctx.request.body;
        ctx.body = ctx.request.body;
    }

}
module.exports = new UserCtl();
