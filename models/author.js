'use strict';
module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define('Author', {
    name: DataTypes.STRING
  }, {});
  Author.associate = (models) => {
    // associations can be defined here
    Author.hasMany(models.Book)
  };
  return Author;
};