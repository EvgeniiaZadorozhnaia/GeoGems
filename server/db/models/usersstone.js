'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UsersStone extends Model {
    static associate(models) {}
  }
  UsersStone.init(
    {
      userId: DataTypes.INTEGER,
      stoneId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'UsersStone',
    }
  );
  return UsersStone;
};
