var Db = require('mongodb').Db;
var Connection = require('mongodb').Connection;
var Server = require('mongodb').Server;
var config = require('../config');
// 创建一个数据库连接实例并导出
module.exports = new Db(config.db, new Server(config.host, config.port));