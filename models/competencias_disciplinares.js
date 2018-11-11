'use strict';
module.exports = (sequelize, DataTypes) => {
  const competencias_disciplinares = sequelize.define('competencias_disciplinares', {
    id_competencias_disciplinares: DataTypes.INTEGER,
    competencias_disciplinares: DataTypes.STRING
  }, {});
  competencias_disciplinares.associate = function(models) {
    // associations can be defined here
  };
  return competencias_disciplinares;
};
