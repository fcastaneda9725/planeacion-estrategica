'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    id: DataTypes.INTEGER,
    mail: DataTypes.STRING,
    password: DataTypes.STRING,
    id_detalle_usuario: DataTypes.INTEGER,
    rol_de_usuario: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {});
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};
