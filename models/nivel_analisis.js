'use strict';
module.exports = (sequelize, DataTypes) => {
  const nivel_analisis = sequelize.define('nivel_analisis', {
    id_nivel_analisis: DataTypes.INTEGER,
    verbos: DataTypes.STRING
  }, {});
  nivel_analisis.associate = function(models) {
    // associations can be defined here
  };
  return nivel_analisis;
};