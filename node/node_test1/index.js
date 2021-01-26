const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');
const a = require('./a');
console.log(a)
let user = {
    admin:123456
}
http.createServer((req,res)=>{
    let path,get,post;
    if(req.method == 'GET'){
        console.log('get请求')
        let {pathname,query} = url.parse(req.url,true);
        path = pathname;
        get = query;
        complate();
    }else if(req.method == 'POST'){
        console.log('post请求')
        let arr = [];
        path = req.url;
        
        req.on('data', buffer => {
            console.log(buffer)
            arr.push(buffer)
        });
        req.on("end", () => {
            post = querystring.parse(Buffer.concat(arr).toString());
            console.log(post)
            complate();
        })
        // let arr = [];
        // path = req.url;
        // console.log('faaaaaaaaaaaaaaaaa')
        // req.on('data',buffer=>{
        //     arr.push(buffer)
        // })
        // req.on('end',()=>{
        //     post = querystring.parse(Buffer.concat(arr).toString());
        //     console.log(Buffer.concat(arr).toString())
        //     complate();
        // })
    }
    function complate(){
        if(path == '/login'){
            res.writeHead(200,{
                'Content-Type': 'text/plain; charset=UTF-8'
            })
            if(user[get.username] == get.password){
                res.end(JSON.stringify({
                    msg:0,
                    data:'登录成功！'
                }))
            }else if(!user[get.username]){

                res.end(JSON.stringify({
                    msg:1,
                    data:'没有账号！'
                }))
            }else if(user[get.username] !== get.password){
                res.end(JSON.stringify({
                    msg:1,
                    data:'密码错误！'
                }))
            }
        }else if(path == '/reg'){
            res.writeHead(200,{
                'Content-Type': 'text/plain; charset=UTF-8'
            })
            console.log(post)
            if(user[post.username]){
                res.end(JSON.stringify({
                    msg:1,
                    data:'账号已存在！'
                }))
            }else{
                user[post.username] = post.password
                res.end(JSON.stringify({
                    msg:1,
                    data:'注册成功，请登录！'
                }))
            }
        }else{
            fs.readFile(`./www/${req.url}`,(err,data)=>{
                if(err){
                    res.writeHead(404,{
                        'Content-Type': 'text/plain; charset=UTF-8'
                    })
                    res.end('404')
                }else{
                    res.writeHead(200)
                    res.end(data)
                }
            })
        }
    }
   
    
}).listen(8888)


// console.time();
// let a = 1;
// for(let i = 0;i<1000;i++){
//     for(let j=0;j<1000;j++){
//         a+=1
//     }
// }
// console.log(a)
// console.timeEnd()