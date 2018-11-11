'use strict';
module.exports = (sequelize, DataTypes) => {
  const competencias_genericas = sequelize.define('competencias_genericas', {
    id_competencias_genericas: DataTypes.INTEGER,
    competencias_genericas: DataTypes.STRING
  }, {});
  competencias_genericas.associate = function(models) {
    // associations can be defined here
  };
  return competencias_genericas;
};