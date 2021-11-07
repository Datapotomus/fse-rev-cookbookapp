var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/cookbookApp", {useNewUrlParser: true})
  .then(() => {
    console.log(`We have connected to mongo`)
  }).catch(() => {
    console.log(`Could not connect to mongoose`)
  })

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const recipeRouter = require('./routes/recipe.routes')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/recipes', recipeRouter);

module.exports = app;
