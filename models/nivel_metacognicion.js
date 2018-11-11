'use strict';
module.exports = (sequelize, DataTypes) => {
  const nivel_metacognicion = sequelize.define('nivel_metacognicion', {
    id_nivel_metacognicion: DataTypes.INTEGER,
    verbos: DataTypes.STRING
  }, {});
  nivel_metacognicion.associate = function(models) {
    // associations can be defined here
  };
  return nivel_metacognicion;
};