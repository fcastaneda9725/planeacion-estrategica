'use strict';
module.exports = (sequelize, DataTypes) => {
  const nivel_marzano = sequelize.define('nivel_marzano', {
    id_nivel_marzano: DataTypes.INTEGER,
    id_nivel_recuperacion: DataTypes.INTEGER,
    id_nivel_comprension: DataTypes.INTEGER,
    id_nivel_analisis: DataTypes.INTEGER,
    id_nivel_aplicacion: DataTypes.INTEGER,
    id_nivel_metacognicion: DataTypes.INTEGER,
    id_nivel_autoregulacion: DataTypes.INTEGER
  }, {});
  nivel_marzano.associate = function(models) {
    // associations can be defined here
  };
  return nivel_marzano;
};