const {Router} = require("express");
const router = Router();
const path = require("path");
const article = require('../model/article');

router.get("/",(req,res) => {
    res.sendFile(path.resolve(__dirname, '../public/page/write.html'));
});

router.post("/",(req,res,next) => {
    const {author,title,times,content} = req.body;
    console.log({author,title,times,content});
    //首先判断用户的登录状态，如果没有登陆的话是不允许留言的，所以给他返回一个要登陆的信息，然后返回首页。
    if(req.session.loginStatus == false){
        res.json({
            code: 200,
            msg:"您还没有登陆哦，请在登陆后在进行留言。"
        })
    }else{
        //如果登录状态为true的话，就将客户端传过来的数据接收并存入数据库中
        article.create({author,title,times,content}).then(data => {
            console.log(data);
            res.json({
                code: 200,
                msg: "文章发布成功"
            })
        }).catch(err => {
            console.log(err);
        })
    }
});

module.exports = router;