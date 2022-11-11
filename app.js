var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var King = require("./models/king");



// Atlas Mongo DB connection
require('dotenv').config();
const connectionString =
process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
{useNewUrlParser: true,
useUnifiedTopology: true});

//server start
async function recreatDB(){
  await King.delete.Many();

  let insastance1 = new
  King({name:"Dree", kingdom:'the world',
years_ruled:300});
instance1.save( function(err,doc) {
if(err) return console.error(err);
console.log("First object saved")
});
  let insastance2 = new
  King({name:"Alexander", kingdom:'Macedonia',
years_ruled:33});
instance1.save( function(err,doc) {
if(err) return console.error(err);
console.log("First object saved")
});
  let insastance3 = new
  King({name:"Alfred", kingdom:'Wessex',
years_ruled:51});
instance1.save( function(err,doc) {
if(err) return console.error(err);
console.log("First object saved")
});
}
let reseed = true;
if (reseed) {recreatDB();
}


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var kingsRouter = require('./routes/kings');
var gridbuildRouter = require('./routes/gridbuild')
var resourceRouter = require('.routes/resource')
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use('/kings', kingsRouter)
app.use('/gridbuild', gridbuildRouter)
app.use('/resource', resourceRouter)
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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


const { Server } = require('http');
const { start } = require('repl');


module.exports = app;
