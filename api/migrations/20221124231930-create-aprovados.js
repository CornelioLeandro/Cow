"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Aprovados", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_registros: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Registros", key: "id" },
      },
      id_classificacoes: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Classificacoes", key: "id" },
      },
      nr_serie_item: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Aprovados");
  },
};
