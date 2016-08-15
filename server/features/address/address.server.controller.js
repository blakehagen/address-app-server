'use strict';

const models = require('../../models/index');

module.exports = {

  // UPDATE ADDRESS BY  ADDRESS ID //
  updateAddress: (req, res) => {
    models.Address.update(req.body, {
      where: {
        id: req.params.id
      }
    })
      .then(result => {
        console.log('rows updated ==>', result);
        models.User.findById(req.body.UserId, {
          include: models.Address
        }).then(user => {
          res.status(200).json(user);
        }).catch(error => {
          res.status(500).json(error);
        })
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  }


};

