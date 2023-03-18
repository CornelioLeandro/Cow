"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Motivos",
      [
        {
          descricao: "Flor Aberta",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          descricao: "Ferida",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          descricao: "Estragado",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          descricao: "Forte Odor",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Motivos", null, {});
  },
};
