const express = require('express');
const control = require('../control/control.js')
const router = express.Router();
//首页渲染数据
router.get('/',  (req, res) => {
    //读文件
    let data =  control.Read();
    res.render('index.html', {
        listData: data.list
    });
})
//添加
router.post('/add',  (req, res) => {
    //读文件
    let data =  control.Read();
    //获取前端传来的数据
    let getData =JSON.parse(req.body.data);
    console.log(req.body.data)
    //分配ID
    getData.id = data.list[data.list.length-1].id + 1
    //新增一条数据
    data.list.push(getData)
    //写入文件
    control.Write(data);
    res.json(getData);
})
//读取用户信息
router.get('/getInfo',  (req, res) => {
    let data =  control.Read();
    let userInfo = data.list.find(item => item.id == req.query.id);
    res.json(userInfo);
})
//修改用户信息
router.post('/edit',  (req, res) => {
    //拿数据
    let getData =JSON.parse(req.body.data);
    //读文件
    let data =  control.Read();
    //检索用户返回index
    let userIndex = data.list.findIndex(item => item.id == getData.id);
    // 更新用户信息
    data.list[userIndex] = getData
    //写入文件
    control.Write(data);
    res.json(getData);
})
//删除
router.get('/delete', (req, res) => {
    //读文件
    let data =  control.Read();
    //检索用户返回index
    let userIndex = data.list.findIndex(item => item.id == req.query.id);
    // 删除
    data.list.splice(userIndex, 1);
    //写入文件
    control.Write(data);
    res.json(data);
})
//搜索
router.get('/search', (req, res) => {
    let list = []
    //读文件
    let data =  control.Read();
    //检索用户返回index
    data.list.forEach((item, index, array)=>{
        if(item.name.indexOf(req.query.text)!=-1){
            list.push(item)
        }
        // console.log(item.name.indexOf(req.query.text),req.query.text)
    })
    // let item = data.list.find((item)=>{
    //     return  item.name.indexOf(req.query.text)!==-1
    // });
    // 删除
    // data.list.splice(userIndex, 1);
    //写入文件
    // control.Write(data);
    res.render('search.html', {
        listData: list,
        search:req.query.text
    });
})
module.exports = router 