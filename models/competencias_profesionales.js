'use strict';
module.exports = (sequelize, DataTypes) => {
  const competencias_profesionales = sequelize.define('competencias_profesionales', {
    id_competencias_profesionales: DataTypes.INTEGER,
    competencias_profesionales: DataTypes.STRING
  }, {});
  competencias_profesionales.associate = function(models) {
    // associations can be defined here
  };
  return competencias_profesionales;
};