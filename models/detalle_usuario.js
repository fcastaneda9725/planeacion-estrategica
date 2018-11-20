'use strict';
module.exports = (sequelize, DataTypes) => {
  const detalle_usuarios = sequelize.define('detalle_usuarios', {
    id_detalle_usuario: DataTypes.INTEGER,
    nombre_usuario: DataTypes.STRING,
    apellido_usuario: DataTypes.STRING,
    direccion_usuario: DataTypes.STRING,
    telefono: DataTypes.STRING,
    especialidad: DataTypes.STRING,
    id_profesional: DataTypes.INTEGER,
    id_plantel: DataTypes.INTEGER
  }, {});
  detalle_usuarios.associate = function(models) {
    detalle_usuarios.hasMany(models.user);
  };
  return detalle_usuarios;
};
