const express = require('express');
const router = express.Router();
const db = require("../../mysql/Db");


// 로그인 
router.get('/', (req, res) => {

    const id = req.query.id;
    const password = req.query.password;

    if(id && password) {

        db.connection.query(
            `SELECT * FROM USER WHERE EMAIL_ID = '${id}' AND PASSWORD = '${password}'`,
            function(err, result, fields) {
                if(result.length > 0) {
                    res.json(result);
                }else {
                    res.json({success : "fail"});
                } 
            }
        )   
    }else {
        res.json({success : "fail"});
    }
     
});

module.exports = router;