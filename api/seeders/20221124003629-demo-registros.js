"use strict";

const { Model } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Registros",
      [
        {
          dataenvio: new Date(),
          responsavel: "Leandro Cornelio",
          quantidade: 200,
          id_produtos: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          dataenvio: new Date(),
          responsavel: "Cleber Cornelio",
          quantidade: 100,
          id_produtos: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Registros", null, {});
  },
};
