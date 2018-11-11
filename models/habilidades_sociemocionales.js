'use strict';
module.exports = (sequelize, DataTypes) => {
  const habilidades_sociemocionales = sequelize.define('habilidades_sociemocionales', {
    id_habilidades_sociemocionales: DataTypes.INTEGER,
    habilidades_sociemocionales: DataTypes.STRING
  }, {});
  habilidades_sociemocionales.associate = function(models) {
    // associations can be defined here
  };
  return habilidades_sociemocionales;
};