'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('instrumentos_evaluacion', {
      id_intrumentos_evaluacion: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      anexo: {
        type: Sequelize.INTEGER
      },
      instrumento: {
        type: Sequelize.STRING
      },
      titulo: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('instrumentos_evaluacion');
  }
};
