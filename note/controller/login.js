const {Router} = require("express");
const router = Router();
const path = require("path");
const users = require('../model/user');

//用户登陆接口
router.post("/",(req,res) => {
    //接收客户端传来的数据
    const{email,pwd} = req.body;
    users.findOne({email}).then(data => {
        //首先判断邮箱是否被注册，然后取出相应的密码进行之后的对比。
        if (!data){
            res.json({
                code: 401,
                msg: "未找到该用户，请确认正确输入用户邮箱"
            })
        }else{
            if (data.pwd == pwd){
                //如果密码对比正确就将用户的session状态改为true，然后返回登陆成功信息。
                req.session.loginStatus = true;
                req.session.user = email;
                res.json({
                    code: 200,
                    msg: "登陆成功，欢迎回来"
                })
            }else {
                //如果密码对比错误的话，就返回登陆失败，密码输入有误的错误信息。
                res.json({
                    code: 401,
                    msg: "密码输入错误，请确认正确输入用户邮箱及密码"
                })
            }
        }
    })
});

module.exports = router;