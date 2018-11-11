'use strict';
module.exports = (sequelize, DataTypes) => {
  const planeacion_estrategica = sequelize.define('planeacion_estrategica', {
    id_planeacion_estrategica: DataTypes.INTEGER,
    id_identificacion: DataTypes.INTEGER,
    id_intenciones: DataTypes.INTEGER,
    id_actividades_aprendizaje: DataTypes.INTEGER,
    id_recurso: DataTypes.INTEGER,
    id_instrumentos_evaluacion: DataTypes.INTEGER,
    porcentaje: DataTypes.INTEGER
  }, {});
  planeacion_estrategica.associate = function(models) {
    // associations can be defined here
  };
  return planeacion_estrategica;
};