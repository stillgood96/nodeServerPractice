const express = require('express');
const app = express();
const port = 5006;

const aiGolf = require('./mysql/Db');


/* localhost:5006 기본 접속시 Get */ 
app.get('/', (req, res) => {

    /* 서버접속 확인 */
    res.json({
        success: true,
    });

    /* DB 연결 확인*/
    aiGolf.connect(function(err) {
        if(err) throw err;
        console.log("connected !");
    })


    
});

app.listen(port, () => {
    console.log(`서버가 켜졌따`);
});