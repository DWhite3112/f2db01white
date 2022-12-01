var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var King = require("./models/king");


//part 2 assignment 13 adding passport
passport.use(new LocalStrategy(
  function(username, password, done) {
  Account.findOne({ username: username }, function (err, user) {
  if (err) { return done(err); }
  if (!user) {
  return done(null, false, { message: 'Incorrect username.' });
  }
  if (!user.validPassword(password)) {
  return done(null, false, { message: 'Incorrect password.' });
  }
  return done(null, user);
  });
  }
  ));


// Atlas Mongo DB connection
require('dotenv').config();
const connectionString = process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
{useNewUrlParser: true,
useUnifiedTopology: true});

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});

//server start
async function recreatDB(){
  await King.deleteMany();

  let instance1 = new
  King({king_name:"Dree", kingdom:'the world',
years_ruled:300});
instance1.save( function(err,doc) {
if(err) return console.error(err);
console.log("First object saved")
});
  let instance2 = new
  King({king_name:"Alexander", kingdom:'Macedonia',
years_ruled:33});
instance2.save( function(err,doc) {
if(err) return console.error(err);
console.log("First object saved")
});
  let instance3 = new
  King({king_name:"Alfred", kingdom:'Wessex',
years_ruled:51});
instance3.save( function(err,doc) {
if(err) return console.error(err);
console.log("First object saved")
});
}
//make true to reset 
let reseed = false;
if (reseed) {recreatDB();
}


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var kingsRouter = require('./routes/kings');
var gridbuildRouter = require('./routes/gridbuild');
var resourceRouter = require('./routes/resource');
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
//creating cooie session a13 p2.4
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
  }));
  app.use(passport.initialize());
  app.use(passport.session());

  app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// passport config
// Use the existing connection
// The Account model
var Account =require('./models/account');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());


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
