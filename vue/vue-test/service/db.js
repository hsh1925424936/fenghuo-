const mongoose = require('mongoose');
const db = mongoose.createConnection('mongodb://127.0.0.1:27017/test');

db.once('open',function(){
    console.log('链接数据库成功');
})
const loginSchema = new mongoose.Schema({
    account:{type:String},
    password:{type:String}
})
const loginModel = db.model('login',loginSchema);

module.exports = db