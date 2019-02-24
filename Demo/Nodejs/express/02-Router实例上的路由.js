//router实例处理路由，就是导入app路由实例路由来实现路由的嵌套处理。
//这边导入处理函数，然后将处理交给路由实例那边，也可以进行多层多步骤的路由嵌套。
const express = require("express");
const path = require("path");
const routerPage = require("./03-路由实例上的路由");
const app = express();

//这里将page请求后面的路由交给导进来的routerPage函数，从而实现路由嵌套
//注意这里的请求方式是use，写单独的get可能会出现一些问题

//get 拿来获取一个资源
//post 提交一个需要在数据库增加的资源
//options 跨域请求的时候会出现
//patch 针对服务器上某个资源进行修改（替换性修改）
//delete 删除数据库上的某个资源
//put 针对某个资源进行修改（部分修改）

app.use("/page",routerPage);

app.listen(3000);