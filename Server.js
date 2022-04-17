const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5006;

const login = require('./router/sign/login');
const signUp = require("./router/signUp/sginUp");

app.use(bodyParser.urlencoded({ extended: true }))
app.use((_, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/login', login);  // 로그인
app.use('/signUp', signUp);// 회원가입 


app.listen(port, () => {
    
});