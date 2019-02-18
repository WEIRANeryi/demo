const http = require("http");
const fs = require("fs");
const path = require("path");
const ejs = require("ejs");
const mime = require("mime");
const querystring = require("querystring");

var resultPath = path.resolve(__dirname,"index.html");
http.createServer((req,res) => {
    dir = path.join(__dirname,req.url);
    switch (req.url) {
        case "/":
        case "/index":
        case "/index.html":
            fs.readFile(resultPath,"utf-8",(err,data) => {
               if (err){
                   console.log(err);
               }else{
                   var blogData = fs.readFile("blog.txt","utf-8",function (err,blogdata) {
                       if (err){
                           var post = [];
                       }else{
                           var post = JSON.parse(blogdata);
                       }
                       let len1 = post.length;
                       var posts= [];
                       for (var i=0;i<len1;i++){
                           posts.push(post.pop());
                       }
                       // console.log(posts);
                       var html = ejs.render(data,{data:posts});
                       res.end(html);
                   })
               }
            });
            break;
        case "/save":
            var str = "";
            req.on("data",(chunk) =>{ str += chunk });
            req.on("end",() => {
                var obj = querystring.parse(str);
                var obj2 = {
                    title : obj.title,
                    author : obj.author,
                    content : obj.content,
                    time : new Date().toLocaleString()
                };
                if (fs.existsSync("blog.txt")){
                    var str1 = fs.readFileSync("blog.txt","utf-8");
                    var arr = JSON.parse(str1);
                }else{
                    var arr = [];
                }
                arr.push(obj2);
                fs.writeFile("blog.txt",JSON.stringify(arr),err => {
                    if (err){
                        console.log(err);
                        return
                    } else{
                        res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
                        res.end("<h1>发表成功 <a href='/'>返回首页</a></h1>");
                    }
                });
            });
            break;
        default:
            if (fs.existsSync(dir) && fs.statSync(dir).isFile()){
                fs.readFile(dir,(err,data) =>{
                    if (err){
                        console.log(err);
                    }else{
                        // res.writeHead(200,{"Content-type":mime.getType(dir)});
                        res.write(data);
                        res.end();
                    }
                })
            }
            break;
    }
}).listen(3000);