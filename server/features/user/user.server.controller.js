'use strict';

module.exports = {

  signupSuccess: (req, res, user) => {
    res.status(200).json({user: user, message: 'Success'});
  },

  signupFailure: (req, res) => {
    res.send('Unable to create new user');
  }


};