'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('nivel_marzano', {
      id_nivel_marzano: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_nivel_recuperacion: {
        type: Sequelize.INTEGER
      },
      id_nivel_comprension: {
        type: Sequelize.INTEGER
      },
      id_nivel_analisis: {
        type: Sequelize.INTEGER
      },
      id_nivel_aplicacion: {
        type: Sequelize.INTEGER
      },
      id_nivel_metacognicion: {
        type: Sequelize.INTEGER
      },
      id_nivel_autoregulacion: {
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
    return queryInterface.dropTable('nivel_marzano');
  }
};
