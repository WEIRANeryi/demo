//第三步，声明一个骨架，用来控制数据文档的模型，数据属性的统一化，都要有一样多的属性
const mongoose = require("mongoose");
//定义book这个集合下的数据文档的模型
var article = new mongoose.Schema({
    author: String,
    title: String,
    times: String,
    content: String
});
//然后导出book这个骨架，bookModule是数据库中所创建的集合名字
module.exports = mongoose.model("article",article);