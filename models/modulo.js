'use strict';
module.exports = (sequelize, DataTypes) => {
  const modulo = sequelize.define('modulo', {
    id_modulo: DataTypes.INTEGER,
    id_plantel: DataTypes.INTEGER,
    nombre_modulo: DataTypes.STRING,
    detalle_modulo: DataTypes.STRING,
    id_semestre: DataTypes.INTEGER
  }, {});
  modulo.associate = function(models) {
    // associations can be defined here
  };
  return modulo;
};