'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('planeacion_estrategica', {
      id_planeacion_estrategica: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_identificacion: {
        type: Sequelize.INTEGER
      },
      id_intenciones: {
        type: Sequelize.INTEGER
      },
      id_actividades_aprendizaje: {
        type: Sequelize.INTEGER
      },
      id_recurso: {
        type: Sequelize.INTEGER
      },
      id_instrumentos_evaluacion: {
        type: Sequelize.INTEGER
      },
      porcentaje: {
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
    return queryInterface.dropTable('planeacion_estrategica');
  }
};
