'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stone extends Model {
    static associate({ User, UsersStone }) {
      this.belongsToMany(User, {
        through: UsersStone,
        foreignKey: 'stoneId',
      });
    }
  }
  Stone.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      url: DataTypes.STRING,
      price: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Stone',
    }
  );
  return Stone;
};
