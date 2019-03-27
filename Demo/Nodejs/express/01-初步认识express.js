//首先导入express模块
const express = require("express");
const path = require("path");

//然后利用express快速创建一个服务器
const app = express();

//然后利用创建的服务器处理浏览器发来的一系列请求
app.get("/",(req,res) => {
   res.send("<h1>这是首页</h1>");
});

//最后监听一个端口
pp.listen(3000);