'use strict';

const userCtrl = require('../user/user.server.controller');

module.exports = (app, passport) => {

  // ==================== //
  // USER SIGN UP ROUTES //
  // =================== //
  app.post('/api/v1/signup', passport.authenticate('local-signup', {
      successRedirect: 'http://address-app-server.herokuapp.com/registerSuccess',
      failureRedirect: 'http://address-app-server.herokuapp.com/registerFailure'
    })
  );

  // USER SIGN UP FAILURE ROUTE //
  app.get('/registerFailure', userCtrl.signupFailure);

  // USER SIGN UP SUCCESS ROUTE //
  app.get('/registerSuccess', userCtrl.signupSuccess)

};

