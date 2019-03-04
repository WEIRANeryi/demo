mongoose的使用主要分为四步：
1. 首先要创建一个链接，然后有两个监听事件，一个监听错误信息，一个监听开启数据库事件。
```angular2
//引入mongoose模块
const mongoose = require("mongoose");
//连接到相应数据库 27017是mongodb默认端口，后边跟上数据库的名字
mongoose.connect('mongodb://localhost:27017/book', {useNewUrlParser: true});
//定义一个链接，连接到数据库
var db = mongoose.connection;
//下边两个是监听事件，一个是监听错误信息，一个是监听开启数据库事件
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("链接成功");
});
```
2. 然后在app.js文件中引入之前写的mongoose链接。
```angular2
var db = require("./database");
```
3. 声明骨架，用来控制数据文档的模型，用来统一属性，因为所有数据必须要有相同的属性名和属性值。并且到处骨架模型，用于日后的开发。
```angular2
//第三步，声明一个骨架，用来控制数据文档的模型，数据属性的统一化，都要有一样多的属性
const mongoose = require("mongoose");
//定义book这个集合下的数据文档的模型骨架
var book = new mongoose.Schema({
    title: String,
    author: String
});
//然后导出book这个骨架，bookModule是mongoose在数据库中所创建的集合名字，注意有时会自动变为复数。
module.exports = mongoose.model("bookModel",book);
```
4. 在服务端需要链接数据库时，只需要引入之前写好的骨架模型即可，然后就可以调用mongoose的方法函数对数据库进行增删改查等操作。
```angular2
const article = require('../model/article');
article.findOne({_id}).then(data => { }
```
