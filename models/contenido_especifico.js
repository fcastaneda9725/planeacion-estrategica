'use strict';
module.exports = (sequelize, DataTypes) => {
  const contenido_especifico = sequelize.define('contenido_especifico', {
    id_contenido_especifico: DataTypes.INTEGER,
    contenido_especifico: DataTypes.STRING
  }, {});
  contenido_especifico.associate = function(models) {
    // associations can be defined here
  };
  return contenido_especifico;
};