'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('actividades_aprendizaje', {
      id_actividades_aprendizaje: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_actividades_ap_apertura: {
        type: Sequelize.INTEGER
      },
      id_actividades_ap_desarrollo: {
        type: Sequelize.INTEGER
      },
      id_actividades_ap_cierre: {
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
    return queryInterface.dropTable('actividades_aprendizaje');
  }
};
