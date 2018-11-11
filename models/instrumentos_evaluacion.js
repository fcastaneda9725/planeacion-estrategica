'use strict';
module.exports = (sequelize, DataTypes) => {
  const instrumentos_evaluacion = sequelize.define('instrumentos_evaluacion', {
    id_intrumentos_evaluacion: DataTypes.INTEGER,
    anexo: DataTypes.INTEGER,
    instrumento: DataTypes.STRING,
    titulo: DataTypes.STRING,
    porcentaje: DataTypes.INTEGER
  }, {});
  instrumentos_evaluacion.associate = function(models) {
    // associations can be defined here
  };
  return instrumentos_evaluacion;
};