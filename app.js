const express = require('express');
const mysql=require('mysql');
const app = express();
const port = 9000;
const conn = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'db2',
    port : 3306,
  });
conn.connect(function(err) {
    if (err) throw err;
    console.log("Database Connected!");
  });

app.get('/db2table', (req, res) => {
    var sql= "SELECT * FROM db2table";
    let query= conn.query(sql, (err, results) => {
        if(err) throw err;
    res.send(results);
      });
  });

// app.get('/userentries/:year', (req, res) => {
//     var sql= "SELECT * FROM db where year=+2012+";
//     let query= conn.query(sql, (err, results) => {
//         if(err) throw err;
//         res.send(results);
//       });
//   });
// app.post('/userentries/:year', (req, res) => {
//     var sql= "update db set username='pqr' where learner_id="+req.params.year+"";
//     let query= conn.query(sql, (err, results) => {
//         if(err) throw err;
//         res.send(results);
//       });
//   });

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports=conn; 

// http://127.0.0.1:7003/userentries