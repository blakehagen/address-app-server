'use strict';

// const BPromise = require('bluebird');
// const bcrypt = require('bcrypt-nodejs');

module.exports = (sequelize, DataTypes) => {
  let models;
  let User;

  User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    tableName: 'users',
    timestamps: true,
    classMethods: {
      init: function (_models) {
        models = _models;
        User.hasOne(models.Address)
      }
    }
  });
  return User;
};