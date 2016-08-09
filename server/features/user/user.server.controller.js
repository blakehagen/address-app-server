'use strict';

const models = require('../../models/index');

module.exports = {

  // GET ONE USER BY ID //
  getUser: (req, res) => {
    models.User.findOne({
      where: {
        'id': req.params.id
      }
    }).then(user => {
      res.status(200).json(user);
    })
  }


};