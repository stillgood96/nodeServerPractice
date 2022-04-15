const express = require('express');
const router = express.Router();
const db = require("../mysql/Db");


router.get('/', (req, res) => {
    
    /* DB User 조회 */
    db.connection.query(
        "SELECT * FROM USER",
        function(err, result, fields) {
            res.send(result);
        }
    )    
});


module.exports = router;