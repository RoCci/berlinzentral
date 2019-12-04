var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function (req, res, next) {
  res.locals.connection.query('SELECT * from blnzentral.categorys', function (error, results, fields) {
    if (error) throw error;
    console.log(results);
    res.send(JSON.stringify(results));
    
  });
     
  });

  // res.locals.connection.query('insert into blnzentral.article(name,email) values(kk)', function (error, results, fields) {
  //   if (error) throw error;
  //   console.log(results);
  //   res.send(JSON.stringify(results));
    
  // });

module.exports = router;