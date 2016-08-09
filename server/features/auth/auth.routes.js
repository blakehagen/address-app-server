'use strict';

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
    res.send('Login Failed');
  });

  // USER LOGIN SUCCESS ROUTE //
  app.get('/loginSuccess', (req, res) => {
    res.status(200).json({user: req.user, message: 'Success'});
  });

};