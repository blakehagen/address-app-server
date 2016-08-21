'use strict';

// EXPRESS //
const express    = require('express');
const session    = require('express-session');
const bodyParser = require('body-parser');
const cors       = require('cors');
const logger     = require('morgan');
// const jwt    = require('jwt-simple');
// const secret     = require('./secret');

module.exports = () => {
  const app = express();

  app.set('jwtTokenSecret', process.env.JWT_SECRET);
  app.use(logger('dev'));
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(session({
    secret: 'aksdjf472rtyaksjdasdf',
    resave: false,
    saveUninitialized: true
  }));

  app.use(express.static('www'));
  return app;
};