var express = require('express');
var router = express.Router();
const path = require('path');
const article = require('../model/article');
const users = require("../model/user");

const publish = require("../controller/publish");
const region = require("../controller/region");
const content = require("../controller/content");
const login = require("../controller/login");

/* GET home page. */
router.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../public/page/index.html'));
});

router.get("/getnews",(req,res) => {
    article.find({},(err,data) => {
        res.json({
            code: 200,
            data
        })
    })
});

router.get("/isLogin",(req,res) => {
    let email = req.session.user;
    if(req.session.loginStatus){
        users.findOne({email}).then(data => {
            res.json({
                code: 200,
                login: true,
                data
            })
        })
    } else {
        res.json({
            code: 200,
            login: false,
        })
    }
});

router.get("/exit",(req,res) => {
    req.session.loginStatus = false;
    res.json({
        code: 200,
        msg: "退出成功，等待您的回归"
    })
});


router.use("/region",region);
router.use("/publish",publish);
router.use("/content",content);
router.use("/login",login);

module.exports = router;
