'use strict';
module.exports = (sequelize, DataTypes) => {
  const profesiones = sequelize.define('profesiones', {
    id_profesion: DataTypes.STRING,
    grado: DataTypes.STRING,
    id_pivote: DataTypes.INTEGER
  }, {});
  profesiones.associate = function(models) {
    // associations can be defined here
  };
  return profesiones;
};
