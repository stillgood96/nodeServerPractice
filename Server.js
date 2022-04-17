const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5006;

const login = require('./router/sign/login');


app.use(bodyParser.urlencoded({ extended: true }))
app.use((_, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/login', login);


app.listen(port, () => {
    
});