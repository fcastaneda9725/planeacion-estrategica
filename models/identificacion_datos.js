'use strict';
module.exports = (sequelize, DataTypes) => {
  const identificacion_datos = sequelize.define('identificacion_datos', {
    id_identificacion_datos: DataTypes.INTEGER,
    id_detalle_usuario: DataTypes.INTEGER,
    titulo_pe: DataTypes.STRING
  }, {});
  identificacion_datos.associate = function(models) {
    // associations can be defined here
  };
  return identificacion_datos;
};