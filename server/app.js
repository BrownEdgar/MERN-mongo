require('dotenv').config()
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const logger = require('morgan');
const passport = require('passport');
const passportConfig = require('./passport');

const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');
const carsRouter = require('./routes/cars');
const { default: mongoose } = require('mongoose');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(
  cookieSession({ name: "session", keys: ["zidan"], maxAge: 24 * 60 * 60 * 1000 })
);
app.use(cors({
  origin: '*',
  credentials: true
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use("/uploads", express.static('uploads'));

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/cars', carsRouter);

mongoose.connect(process.env.MONGO_DB_URL)
  .then(() => console.log("welcome to Mongo DB"))
  .catch(err => console.log(err))

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
