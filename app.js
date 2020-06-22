const express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const cors = require('cors')
const passport = require('passport'),

//const LocalStrategy = require('passport-local').Strategy

var books = require('./routes/books');
const authentication = require('./routes/authentication')

var app = express();

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())
app.use(passport.initialize())
require('./passport-config')(passport)
app.use('/api/v1/books', passport.authenticate('jwt', { session: false }, books));
app.use('/api/v1/auth', authentication)

module.exports = app;
