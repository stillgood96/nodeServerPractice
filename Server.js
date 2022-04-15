const express = require('express');
const bodyParser = require('body-parser');
const aiGolf = require('./mysql/Db');

const app = express();
const port = 5006;

const index = require('./router/index');


app.use(bodyParser.urlencoded({ extended: true }))
app.use((_, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


app.use('/login', index);


app.listen(port, () => {
    
});