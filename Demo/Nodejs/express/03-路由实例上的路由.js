//这边接收到router交过来的任务，并进行处理
const express = require("express");
const path = require("path");

const router = express.Router();

//这里处理的路由都是要嵌套在router路由后的
router.get("/index",(req,res) => {
   res.send(`
        <h1>我是主页</h1>
        <a href="/page/details">跳转到详情页</a>
   `)
});

router.get("/details",(req,res) => {
    res.send(`
        <h1>我是详情页</h1>
        <a href="/page/index">跳转到主页</a>
   `);
});

module.exports = router;