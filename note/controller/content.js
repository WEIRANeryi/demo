const {Router} = require("express");
const router = Router();
const path = require("path");
const article = require('../model/article');

router.get("/",(req,res) => {
    res.sendFile(path.resolve(__dirname, '../public/page/content.html'));
});

router.post("/",(req,res) => {
   const {_id} = req.body;
   article.findOne({_id}).then(data => {
       console.log(data);
       res.json({
           code: 200,
           data
       })
   })
});

module.exports = router;