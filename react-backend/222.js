var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
const session = require('express-session');
const cors = require('cors');
const config = require('./config.js')
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const corsOptions = {
	origin: 'http://localhost:8080'
};
const massive = require('massive');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors(corsOptions));
app.use(session({
	resave: true,
	saveUninitialized: true,
	secret: config.secret
}));
app.use(express.static(path.join(__dirname, 'public')));


var conn = massive.connectSync({
  connectionString: config.connectionString
});
app.set('db', conn);
var db = app.get('db');


// const feedCtrl = require('./feedCtrl.js')
const profileCtrl = require('./profileCtrl.js')



//retrieve the feed
app.put('/feed', profileCtrl.updateCoords)

//update data
// app.put('/profile')




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
