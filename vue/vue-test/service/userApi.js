const express = require('express');
const router = express.Router();
const db = require('./db');

router.get('/login',function(req,res){
    
    res.json({name:'jajja'})
})
module.exports =  router;