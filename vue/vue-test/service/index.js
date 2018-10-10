const userApi = require('./userApi');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/api',userApi)


app.listen('3000',function(){console.log('this server is at listen 3000!')})