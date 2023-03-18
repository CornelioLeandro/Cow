"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Registros", "responsavel");
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.addColumn("Registros", "responsavel");
  },
};
