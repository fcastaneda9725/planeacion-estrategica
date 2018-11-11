'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('intenciones_formativas', {
      id_intencion_formativa: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      proposito: {
        type: Sequelize.STRING
      },
      id_componente: {
        type: Sequelize.INTEGER
      },
      id_contenido_central: {
        type: Sequelize.INTEGER
      },
      id_contenido_especifico: {
        type: Sequelize.INTEGER
      },
      id_aprendizaje_esperado: {
        type: Sequelize.INTEGER
      },
      id_producto_esperado: {
        type: Sequelize.INTEGER
      },
      id_competencias_genericas: {
        type: Sequelize.INTEGER
      },
      id_competencias_disciplinarias: {
        type: Sequelize.INTEGER
      },
      id_competencias_profesionales: {
        type: Sequelize.INTEGER
      },
      id_competencias_especificas: {
        type: Sequelize.INTEGER
      },
      id_habilidades_sociemocionales: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('intenciones_formativas');
  }
};
