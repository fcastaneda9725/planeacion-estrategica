'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: DataTypes.INTEGER,
    mail: DataTypes.STRING,
    password: DataTypes.STRING,
    id_detalle_usuario: DataTypes.INTEGER,
    rol_de_usuario: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  },{
    charset: 'utf8',
    collate: 'utf8_unicode_ci'
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
