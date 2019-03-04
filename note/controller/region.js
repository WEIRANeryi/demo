const {Router} = require("express");
const router = Router();
const path = require("path");

const user = require('../model/user');

router.get("/",(req,res) => {
    res.sendFile(path.resolve(__dirname, '../public/page/region.html'));
});

router.post("/",(req,res,next) => {
    //注册新用户逻辑
    //写一条正则表达式用来判断用户输入的邮箱是否符合格式，不符合则返回给一条邮箱不符合格式的信息
    var regex = /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;
    const {name,email,pwd} = req.body;
    if (name == "" || email == "" || pwd == ""){
        //判断用户三个是否都输入完毕
        res.json({
            code: 401,
            msg: "您还没有全输入完毕哦"
        })
    } else{
        user.findOne({email}).then(data => {
            //判断邮箱是否已经被注册
            if (data){
                res.json({
                    code: 401,
                    msg: "该邮箱已经被注册了"
                })
            }else {
                if (regex.test(email)){
                    //判断用户输入的邮箱是否符合格式
                    user.create({name,email,pwd}).then(data => {
                        res.json({
                            code: 200,
                            msg: "用户注册成功"
                        })
                    })
                }else{
                    res.json({
                        code: 401,
                        msg: "该邮箱格式不正确"
                    })
                }
            }
        })
    }
});

module.exports = router;

