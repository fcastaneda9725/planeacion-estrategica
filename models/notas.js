'use strict';
module.exports = (sequelize, DataTypes) => {
  const notas = sequelize.define('notas', {
    id_nota: DataTypes.INTEGER,
    id_planeacion_estrategica: DataTypes.INTEGER,
    notas_revision: DataTypes.STRING
  }, {});
  notas.associate = function(models) {
    // associations can be defined here
  };
  return notas;
};