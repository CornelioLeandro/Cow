"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Classificacoes",
      [
        {
          tipo: "B",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tipo: "C",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tipo: "D",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tipo: "E",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Classificacoes", null, {});
  },
};
