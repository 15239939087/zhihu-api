/**
 * Created by 陈威 on 2020/10/10
 * Description:
 */
const Router = require('koa-router');
const userCtl = require('../controllers/users')
const router = new Router({prefix: '/users'});



router.get('/',  userCtl.findUser)
// 增加
router.post('/', userCtl.createUser)
// 查找
router.get('/:id',userCtl.findUserById)
// 改
router.put('/:id', userCtl.updateUser)
// 删除
router.delete('/:id', userCtl.deleteUser)

module.exports = router;
