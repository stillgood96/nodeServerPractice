const express = require('express');
const { resourceLimits } = require('worker_threads');
const router = express.Router();
const db = require("../../mysql/Db");

router.get('/', (req, res) => { // 회원가입 
    
    console.log("회원가입 시작");

    const params = req.query;

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
                    console.log(result.success);
                    result.success = true;
                    console.log(result.success);
                }
                res.json(result);
            }
        )
    }else {

        res.json(result);
    }
    
});



module.exports = router;