'use strict';

module.exports = {

  signupSuccess: (req, res) => {
    console.log('req ++++++++++', req);
    res.status(200).json({user: req.user, session: JSON.stringify(req.sessionStore.session.sessions), message: 'Success'});
  },

  signupFailure: (req, res) => {
    res.send('Unable to create new user');
  }


};