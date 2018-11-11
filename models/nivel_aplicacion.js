'use strict';
module.exports = (sequelize, DataTypes) => {
  const nivel_aplicacion = sequelize.define('nivel_aplicacion', {
    id_nivel_aplicacion: DataTypes.INTEGER,
    verbos: DataTypes.STRING
  }, {});
  nivel_aplicacion.associate = function(models) {
    // associations can be defined here
  };
  return nivel_aplicacion;
};