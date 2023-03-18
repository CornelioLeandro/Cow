"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Registros", "id_usuarios", {
      allowNull: true,
      type: Sequelize.INTEGER,
      references: { model: "Usuarios", key: "id" },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Registros", "id_usuarios");
  },
};
