'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('recursos', {
      id_recurso: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      equipo: {
        type: Sequelize.STRING
      },
      material: {
        type: Sequelize.STRING
      },
      espacio_fisico: {
        type: Sequelize.STRING
      },
      fuentes_informacion: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('recursos');
  }
};
