'use strict';
module.exports = (sequelize, DataTypes) => {
  const producto_esperado = sequelize.define('producto_esperado', {
    id_producto_esperado: DataTypes.INTEGER,
    producto_esperado: DataTypes.STRING
  }, {});
  producto_esperado.associate = function(models) {
    // associations can be defined here
  };
  return producto_esperado;
};