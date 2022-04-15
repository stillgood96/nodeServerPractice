const mysql = require('mysql');  //

module.exports = {
     connection : mysql.createConnection({
          host:'127.0.0.1', 
          user:'root', 
          password:'aa787574!', 
          port:3306, 
          database:'aiGolf' 
     })
};

/*
con.connect(function(err) {
     if(err) throw err;
     console.log("connected !");
})
*/

