'use strict';
module.exports = (sequelize, DataTypes) => {
  const actividades_aprendizaje = sequelize.define('actividades_aprendizaje', {
    id_actividades_aprendizaje: DataTypes.INTEGER,
    id_actividades_ap_apertura: DataTypes.INTEGER,
    id_actividades_ap_desarrollo: DataTypes.INTEGER,
    id_actividades_ap_cierre: DataTypes.INTEGER
  }, {});
  actividades_aprendizaje.associate = function(models) {
    // associations can be defined here
  };
  return actividades_aprendizaje;
};