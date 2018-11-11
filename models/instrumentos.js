'use strict';
module.exports = (sequelize, DataTypes) => {
  const instrumentos = sequelize.define('instrumentos', {
    id_instrumento: DataTypes.INTEGER,
    instrumentos: DataTypes.STRING
  }, {});
  instrumentos.associate = function(models) {
    // associations can be defined here
  };
  return instrumentos;
};