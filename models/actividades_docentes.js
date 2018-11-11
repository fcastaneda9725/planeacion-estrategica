'use strict';
module.exports = (sequelize, DataTypes) => {
  const actividades_docentes = sequelize.define('actividades_docentes', {
    id_actividades_docente: DataTypes.INTEGER,
    actividades: DataTypes.STRING
  }, {});
  actividades_docentes.associate = function(models) {
    // associations can be defined here
  };
  return actividades_docentes;
};