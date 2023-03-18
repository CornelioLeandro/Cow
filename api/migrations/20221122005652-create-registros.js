"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Registros", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      dataenvio: {
        type: Sequelize.DATE,
      },
      responsavel: {
        type: Sequelize.STRING,
      },
      quantidade: {
        type: Sequelize.INTEGER,
      },
      id_produtos: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Produtos", key: "id" },
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
    await queryInterface.dropTable("Registros");
  },
};
