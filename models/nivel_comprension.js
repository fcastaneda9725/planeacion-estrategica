'use strict';
module.exports = (sequelize, DataTypes) => {
  const nivel_comprension = sequelize.define('nivel_comprension', {
    id_nivel_comprension: DataTypes.INTEGER,
    verbos: DataTypes.STRING
  }, {});
  nivel_comprension.associate = function(models) {
    // associations can be defined here
  };
  return nivel_comprension;
};