'use strict';
module.exports = (sequelize, DataTypes) => {
  const componente = sequelize.define('componente', {
    id_componente: DataTypes.INTEGER,
    componente: DataTypes.STRING
  }, {});
  componente.associate = function(models) {
    // associations can be defined here
  };
  return componente;
};