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

    /* DB User 조회 */
    aiGolf.query(
        "SELECT * FROM USER",
        function(err, result, fields) {
            console.log(`에러: ${err}`);
            console.log(`결과: ${JSON.stringify(result)}`);
            console.log(`필드: ${JSON.stringify(fields)}`);
        }
    )    
});

app.listen(port, () => {
    console.log(`서버가 켜졌따`);
});