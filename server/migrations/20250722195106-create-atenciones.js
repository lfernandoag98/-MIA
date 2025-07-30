'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('atenciones', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      fecha: {
        type: Sequelize.DATE,
        allowNull: false
      },
      horaInicio: {
        type: Sequelize.TIME,
        allowNull: false
      },
      horaFinal: {
        type: Sequelize.TIME
      },
      signosVitales: {
        type: Sequelize.TEXT
      },
      dxPresuntivo: {
        type: Sequelize.TEXT
      },
      medicacion: {
        type: Sequelize.TEXT
      },
      servicio: {
        type: Sequelize.STRING
      },
      enfermera: {
        type: Sequelize.STRING
      },
      tipoServicio: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'ENFERMERA'
      }
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('atenciones');
  }
};
