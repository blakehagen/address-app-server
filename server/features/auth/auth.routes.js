'use strict';

const authCtrl = require('./auth.server.controller');
const jwt      = require('jwt-simple');
const secret   = require('../../config/secret');


module.exports = (app) => {

  // ======================= //
  // USER SIGN UP / REGISTER //
  // ======================= //
  app.route('/api/v1/signup')
    .post(authCtrl.register);

  // ========== //
  // USER LOGIN //
  // ========== //
  app.route('/api/v1/login')
    .post(authCtrl.login);

  // TEST TEST TEST //

  app.get('/api/v1/protected', (req, res) => {

    console.log('req.user', req.user);

    if (!req.headers.authorization) {
      return res.status(401).json('Unauthorized');
    }

    var test = req.headers.authorization.split(' ');
    console.log('test', test);

    var token = req.headers.authorization.split(' ')[1];

    var payload = jwt.decode(token, secret.tokenSecret);
    console.log('payload::::: ', payload);

    res.send(req.headers.authorization);

  })

};