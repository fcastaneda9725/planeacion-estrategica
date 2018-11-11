'use strict';
module.exports = (sequelize, DataTypes) => {
  const actividades_ap_desarrollo = sequelize.define('actividades_ap_desarrollo', {
    id_actividades_ap_desarrollo: DataTypes.INTEGER,
    id_nivel_marzano: DataTypes.INTEGER,
    id_actividades_docente: DataTypes.INTEGER,
    id_instrumento: DataTypes.INTEGER
  }, {});
  actividades_ap_desarrollo.associate = function(models) {
    // associations can be defined here
  };
  return actividades_ap_desarrollo;
};