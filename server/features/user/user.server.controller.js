'use strict';

module.exports = {

  signupSuccess: (req, res) => {
    console.log('req:::::::::::::::::::::::::::::::: ', req);
    console.log('req.body:::::::::::::::::::::::::::::::: ', req.body);

    res.status(200).json({user: req.user, message: 'Success'});
  },

  signupFailure: (req, res) => {
    res.send('Unable to create new user');
  }


};