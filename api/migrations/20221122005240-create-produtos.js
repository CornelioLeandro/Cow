"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Produtos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      descricao: {
        type: Sequelize.STRING,
      },
      espessura: {
        type: Sequelize.STRING,
      },
      quantidade: {
        type: Sequelize.INTEGER,
      },
      cor: {
        type: Sequelize.STRING,
      },
      id_fornecedores: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Fornecedores", key: "id" },
      },
      id_classificacoes: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Classificacoes", key: "id" },
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
    await queryInterface.dropTable("Produtos");
  },
};
