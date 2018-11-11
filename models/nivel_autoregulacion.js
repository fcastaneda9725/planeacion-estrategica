'use strict';
module.exports = (sequelize, DataTypes) => {
  const nivel_autoregulacion = sequelize.define('nivel_autoregulacion', {
    id_nivel_autoregulacion: DataTypes.INTEGER,
    verbos: DataTypes.STRING
  }, {});
  nivel_autoregulacion.associate = function(models) {
    // associations can be defined here
  };
  return nivel_autoregulacion;
};