/**
 * Created by 陈威 on 2020/10/10
 * Description:
 */
class HomeCtl {
    homeGet(ctx) {
        ctx.body = '这是主页'
    }
}
module.exports = new HomeCtl();
