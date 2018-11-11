'use strict';
module.exports = (sequelize, DataTypes) => {
  const materias = sequelize.define('materias', {
    id_materias: DataTypes.STRING,
    id_plantel: DataTypes.INTEGER,
    nombre_materia: DataTypes.STRING,
    detalle_materia: DataTypes.STRING,
    id_semestre: DataTypes.INTEGER,
    id_ejes: DataTypes.INTEGER
  }, {});
  materias.associate = function(models) {
    // associations can be defined here
  };
  return materias;
};
