'use strict';
module.exports = (sequelize, DataTypes) => {
  const contenido_central = sequelize.define('contenido_central', {
    id_contenido_central: DataTypes.INTEGER,
    contenido_central: DataTypes.STRING
  }, {});
  contenido_central.associate = function(models) {
    // associations can be defined here
  };
  return contenido_central;
};