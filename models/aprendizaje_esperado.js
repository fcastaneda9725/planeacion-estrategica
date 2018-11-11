'use strict';
module.exports = (sequelize, DataTypes) => {
  const aprendizaje_esperado = sequelize.define('aprendizaje_esperado', {
    id_aprendizaje_esperado: DataTypes.INTEGER,
    aprendizaje_esperado: DataTypes.STRING
  }, {});
  aprendizaje_esperado.associate = function(models) {
    // associations can be defined here
  };
  return aprendizaje_esperado;
};