'use strict';

module.exports = {

  signupSuccess: (user, req, res) => {
    console.log('user', user);
    res.status(200).json({user: req.user, message: 'Success'});
  },

  signupFailure: (req, res) => {
    res.send('Unable to create new user');
  }


};