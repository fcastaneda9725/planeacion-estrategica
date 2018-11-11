'use strict';
module.exports = (sequelize, DataTypes) => {
  const intenciones_formativas = sequelize.define('intenciones_formativas', {
    id_intencion_formativa: DataTypes.INTEGER,
    proposito: DataTypes.STRING,
    id_componente: DataTypes.INTEGER,
    id_contenido_central: DataTypes.INTEGER,
    id_contenido_especifico: DataTypes.INTEGER,
    id_aprendizaje_esperado: DataTypes.INTEGER,
    id_producto_esperado: DataTypes.INTEGER,
    id_competencias_genericas: DataTypes.INTEGER,
    id_competencias_disciplinarias: DataTypes.INTEGER,
    id_competencias_profesionales: DataTypes.INTEGER,
    id_competencias_especificas: DataTypes.INTEGER,
    id_habilidades_sociemocionales: DataTypes.INTEGER
  }, {});
  intenciones_formativas.associate = function(models) {
    // associations can be defined here
  };
  return intenciones_formativas;
};