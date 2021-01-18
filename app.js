const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router/router')
const app = express();
//配置 body-parser
app.use(bodyParser.urlencoded({extended:false}));
//端口号
let port = 3000
//配置静态资源
app.use('/static', express.static('static'))
// 配置模板引擎
app.engine('html', require('express-art-template'));
//挂载路由
app.use(router)
//启动
app.listen(port,()=>{
    console.log('启动成功')
})