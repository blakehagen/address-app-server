'use strict';
const jwt    = require('jwt-simple');
const secret = require('../../config/secret');

module.exports = (app, passport) => {

  // ==================== //
  // USER SIGN UP ROUTES //
  // =================== //
  app.post('/api/v1/signup', passport.authenticate('local-signup', {
      successRedirect: '/registerSuccess',
      failureRedirect: '/registerFailure'
    })
  );

  // USER SIGN UP FAILURE ROUTE //
  app.get('/registerFailure', (req, res) => {
    res.send('Unable to create new user');
  });

  // USER SIGN UP SUCCESS ROUTE //
  app.get('/registerSuccess', (req, res) => {
    res.status(200).json({user: req.user, message: 'Success'});
  });

  // ================== //
  // USER LOGIN ROUTES //
  // ================= //
  app.post('/api/v1/login', passport.authenticate('local-login', {
      successRedirect: '/loginSuccess',
      failureRedirect: '/loginFailure'
    })
  );

  // USER LOGIN FAILURE ROUTE //
  app.get('/loginFailure', (req, res) => {
    res.status(500).send('Login Failed');
  });

  // USER LOGIN SUCCESS ROUTE //
  app.get('/loginSuccess', (req, res) => {

    var token = jwt.encode({email: req.user.email}, secret.tokenSecret);

    console.log('token', token);

    res.status(200).json({user: req.user, message: 'Success', token: token});
  });

  //====================//
  // USER LOGOUT ROUTES //
  //===================//
  app.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
  });

  //===============//
  // WHO IS USER? //
  //==============//
  app.get('/api/v1/me', function (req, res) {
    if (req.user) {
      res.status(200).json({user: req.user, endpoint: '/api/v1/me'});
    } else {
      res.status(401).send('NO CURRENT USER');
    }
  });

};