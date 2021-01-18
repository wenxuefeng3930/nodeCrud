const fs = require('fs');
const path = './db.json'
//读文件
// exports.Read= ()=>{
//     return new Promise((resolve,reject)=>{
//         fs.readFile(path,(err,data)=>{
//             if(err){
//                 reject(err)
//             }
//             let listData = data.toString()
//             resolve(JSON.parse(listData))
//         })
       
//     })
// }
exports.Read = ()=>{
    let fileData = ''
    try{
        fileData = fs.readFileSync(path,'utf-8');
        console.log(fileData)
    }catch (err) {
        // 出错了
        console.log(err)
    }
    return JSON.parse(fileData)
}
//写文件
// exports.Write= (data)=>{
//     return new Promise((resolve,reject)=>{
//         fs.writeFile(path,JSON.stringify(data),'utf8',(err)=>{
//             if(err){
//                 reject(err)
//             }
//             resolve(true)
//         })
//     })
// }
exports.Write= (data)=>{
    try{
        fs.writeFileSync(path,JSON.stringify(data),'utf8')
    }catch(err){
        //出错
        console.log(err)
    }
}