const express = require('express');
const router = express.Router();
const db = require("../../mysql/Db");

router.all('/', (req, res) => { // 회원가입 
    
    console.log("회원가입 시작");

    const params = req.query;
    console.log(req.body); // post로 보내는데 Body를 못가져옴 이유를 못찾겠다 . .ㅠㅠ
    console.log(params)

    let user = new Object({
        id : params.id,
        password : params.password,
        nickname : params.nickname,
        phone : params.phone,
        agreement : params.agreement
    });

    let result = new Object({
        success : false,
        failReason : []
    });
    
    for (const [key, value] of Object.entries(user)) {
        if(!value) {
            result.failReason.push(key);
        }
    };

    if(result.failReason.length == 0) {
        
        delete result.failReason;

        db.connection.query(
            `INSERT INTO 
                USER(email_id, password, nickname, phone, info_agreement)
                    VALUES('${user.id}','${user.password}','${user.nickname}','${user.phone}', '${user.agreement}')`,
            function(err,  queryResult, fields) {

                if(queryResult.affectedRows > 0) {
                    result.success = true;
                }else {
                    console.log(err);
                }

                res.json(result);
            }
        )
    }else {

        res.json(result);
    }
    
});

router.get("/checkId", (req, res) => {

    console.log("아이디 중복체크 시작");

    let id = req.query.id;

    let result = new Object({
        success: false
    })

    if(id) {
        db.connection.query(
            `SELECT COUNT(user_no) AS count FROM USER WHERE email_id = '${id}';`, 
            function(err, queryResult, fields){
                console.log(queryResult);
                if(queryResult[0].count == 0) {
                    result.success = true
                }

                res.json(result);
            }
        )
    }else {
        res.json(result);
    }
});
module.exports = router;