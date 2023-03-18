"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Produtos",
      [
        {
          descricao: "Coro",
          espessura: "14/2",
          quantidade: 213,
          cor: "Branco",
          id_fornecedores: 1,
          id_classificacoes: 1,
          id_usuarios: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          descricao: "Pincel",
          espessura: "13/2",
          quantidade: 130,
          cor: "Azul",
          id_fornecedores: 2,
          id_classificacoes: 3,
          id_usuarios: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Produtos", null, {});
  },
};
