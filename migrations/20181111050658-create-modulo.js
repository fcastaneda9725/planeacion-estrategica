'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('modulos', {
      id_modulo: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_plantel: {
        type: Sequelize.INTEGER
      },
      nombre_modulo: {
        type: Sequelize.STRING
      },
      detalle_modulo: {
        type: Sequelize.STRING
      },
      id_semestre: {
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
    return queryInterface.dropTable('modulos');
  }
};
