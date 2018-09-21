const express = require('express');
const app = express();
app.get('/test',function(req,res,next){
    // res.send('success')
    console.log('success')
})
app.listen('8080',function(){console.log('this server is running!')})