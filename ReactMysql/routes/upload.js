var express = require('express');
var router = express.Router();
router.post('/', function(req, res, next) {
    res.locals.connection.query('INSERT INTO blnzentral.article set ?', req.body.data, function (error, results, fields) {
        if(error) throw error;
        res.send(JSON.stringify(results));
    });
});
router.get('/', function(req, res, next) {
    res.render('index', { title: 'uuu' });
    console.log(req,res);

  });
  








module.exports = router;