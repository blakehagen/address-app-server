'use strict';

const authCtrl = require('./auth.server.controller');

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

    if (!req.headers.authorization) {
      return res.status(401).json('Unauthorized');
    }
    console.log('req.headers.authorization:::::::', req.headers.authorization);

    var token = req.headers.authorization.split(' ')[1];

    var payload = jwt.decode(token, 'test');
    console.log('payload::::: ', payload);

    res.send(req.headers.authorization);

  })

};