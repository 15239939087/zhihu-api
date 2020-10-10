/**
 * Created by 陈威 on 2020/10/10
 * Description:
 */

const fs = require('fs');

module.exports = (app) => {
    fs.readdirSync(__dirname).forEach((file) => {
        if(file === 'index.js') {return;}
        const route = require(`./${file}`);
        app.use(route.routes()).use(route.allowedMethods())
    })
}
