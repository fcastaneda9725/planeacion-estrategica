'use strict';
module.exports = (sequelize, DataTypes) => {
  const detalle_usuario = sequelize.define('detalle_usuario', {
    id_detalle_usuario: DataTypes.INTEGER,
    nombre_usuario: DataTypes.STRING,
    apellido_usuario: DataTypes.STRING,
    direccion_usuario: DataTypes.STRING,
    telefono: DataTypes.STRING,
    especialidad: DataTypes.STRING,
    id_profesional: DataTypes.INTEGER,
    id_plantel: DataTypes.INTEGER
  }, {});
  detalle_usuario.associate = function(models) {
    // associations can be defined here
  };
  return detalle_usuario;
};