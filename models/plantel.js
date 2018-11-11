'use strict';
module.exports = (sequelize, DataTypes) => {
  const plantel = sequelize.define('plantel', {
    id_plantel: DataTypes.STRING,
    nombre_plantel: DataTypes.STRING,
    direccion_plantel: DataTypes.STRING,
    cct: DataTypes.STRING
  }, {});
  plantel.associate = function(models) {
    // associations can be defined here
  };
  return plantel;
};
