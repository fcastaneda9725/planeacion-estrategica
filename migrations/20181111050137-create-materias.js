'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('materias', {
      id_materias: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_plantel: {
        type: Sequelize.INTEGER
      },
      nombre_materia: {
        type: Sequelize.STRING
      },
      detalle_materia: {
        type: Sequelize.STRING
      },
      id_semestre: {
        type: Sequelize.INTEGER
      },
      id_ejes: {
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
    return queryInterface.dropTable('materias');
  }
};
