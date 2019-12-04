var express = require('express');
var path = require('path');
// var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');

var http = require('http');

var index = require('./routes/index');
var articles = require('./routes/articles');
var categorys = require('./routes/categorys');

var upload = require('./routes/upload');



var app = express();
app.set('trust proxy', 1); // trust first proxy

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

var mysql = require("mysql");
//Database connection
app.use(function(req, res, next){
	res.locals.connection = mysql.createConnection({
    host: 'localhost',
		user     : 'root',
		password : 'password',
    database: 'blnzentral',
    port: 3308
	});
	res.locals.connection.connect();
	next();
});

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/articles', articles);
app.use('/categorys', categorys);
app.use('/upload', upload);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
var server = http.createServer(app);
server.listen(4007);
