'use strict';
module.exports = (sequelize, DataTypes) => {
  const ejes = sequelize.define('ejes', {
    id_eje: DataTypes.INTEGER,
    nombre_eje: DataTypes.STRING
  }, {});
  ejes.associate = function(models) {
    // associations can be defined here
  };
  return ejes;
};