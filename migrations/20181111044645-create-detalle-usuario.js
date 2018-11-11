'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('detalle_usuarios', {
      id_detalle_usuario: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre_usuario: {
        type: Sequelize.STRING
      },
      apellido_usuario: {
        type: Sequelize.STRING
      },
      direccion_usuario: {
        type: Sequelize.STRING
      },
      telefono: {
        type: Sequelize.STRING
      },
      especialidad: {
        type: Sequelize.STRING
      },
      id_profesional: {
        type: Sequelize.INTEGER
      },
      id_plantel: {
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
    return queryInterface.dropTable('detalle_usuarios');
  }
};
