'use strict';
module.exports = (sequelize, DataTypes) => {
  const recursos = sequelize.define('recursos', {
    id_recurso: DataTypes.INTEGER,
    equipo: DataTypes.STRING,
    material: DataTypes.STRING,
    espacio_fisico: DataTypes.STRING,
    fuentes_informacion: DataTypes.STRING
  }, {});
  recursos.associate = function(models) {
    // associations can be defined here
  };
  return recursos;
};