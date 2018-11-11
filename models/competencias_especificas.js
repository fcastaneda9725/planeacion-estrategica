'use strict';
module.exports = (sequelize, DataTypes) => {
  const competencias_especificas = sequelize.define('competencias_especificas', {
    id_competencias_especificas: DataTypes.INTEGER,
    competencia_generica: DataTypes.STRING
  }, {});
  competencias_especificas.associate = function(models) {
    // associations can be defined here
  };
  return competencias_especificas;
};