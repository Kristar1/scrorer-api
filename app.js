const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const routes = require('./routes/index');
require('./_helpers/db')

var app = express();

require('dotenv').config()
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
routes(app)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500).json({status:err.status ||500, message: err.message})
});

module.exports = app;
