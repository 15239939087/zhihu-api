/**
 * Created by 陈威 on 2020/10/10
 * Description:
 */
const Router = require('koa-router');
const homeCtl = require('../controllers/home')
const router = new Router();

router.get('/', homeCtl.homeGet)
module.exports = router;
