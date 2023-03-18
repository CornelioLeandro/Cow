"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Produtos", "id_usuarios", {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: { model: "Usuarios", key: "id" },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Produtos", "id_usuarios");
  },
};
