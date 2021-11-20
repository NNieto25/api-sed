var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
var indexRouter = require('./routes/index');
var tasksRouter = require('./routes/tasks');
const cors = require('cors');
const user = 'todoadmin';
const password = 'Gj8MfTvf';
const dbname = 'todo-list';
const authsource = 'admin';

mongoose.connect(`mongodb://${user}:${password}@localhost/${dbname}?authSource=${authsource}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'mongodb connection error:'));

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/tasks', tasksRouter);
module.exports = app;
