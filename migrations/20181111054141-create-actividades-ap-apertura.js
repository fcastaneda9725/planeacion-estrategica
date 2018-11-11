'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('actividades_ap_apertura', {
      id_actividades_ap_apertura: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_nivel_marzano: {
        type: Sequelize.INTEGER
      },
      id_actividades_docente: {
        type: Sequelize.INTEGER
      },
      id_instrumento: {
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
    return queryInterface.dropTable('actividades_ap_apertura');
  }
};
