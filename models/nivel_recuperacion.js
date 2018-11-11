'use strict';
module.exports = (sequelize, DataTypes) => {
  const nivel_recuperacion = sequelize.define('nivel_recuperacion', {
    id_nivel_recuperacion: DataTypes.INTEGER,
    verbos: DataTypes.STRING
  }, {});
  nivel_recuperacion.associate = function(models) {
    // associations can be defined here
  };
  return nivel_recuperacion;
};