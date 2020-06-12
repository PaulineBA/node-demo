const express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var books = require('./routes/books');
const authentication = require('./routes/authentication')

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use('/api/v1/books', books);
app.use('/api/v1/auth', authentication)

module.exports = app;
