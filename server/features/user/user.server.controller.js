'use strict';

module.exports = {

  signupSuccess: (req, res) => {
    console.log('req.user ++++++++++', req.user);
    res.status(200).json({user: req.user, message: 'Success'});
  },

  signupFailure: (req, res) => {
    res.send('Unable to create new user');
  }


};