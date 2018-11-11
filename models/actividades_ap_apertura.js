'use strict';
module.exports = (sequelize, DataTypes) => {
  const actividades_ap_apertura = sequelize.define('actividades_ap_apertura', {
    id_actividades_ap_apertura: DataTypes.INTEGER,
    id_nivel_marzano: DataTypes.INTEGER,
    id_actividades_docente: DataTypes.INTEGER,
    id_instrumento: DataTypes.INTEGER
  }, {});
  actividades_ap_apertura.associate = function(models) {
    // associations can be defined here
  };
  return actividades_ap_apertura;
};
