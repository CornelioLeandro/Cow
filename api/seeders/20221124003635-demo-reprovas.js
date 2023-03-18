"use strict";

const { Model } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Reprovados",
      [
        {
          id_registros: 1,
          id_motivos: 1,
          nr_serie_item: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_registros: 3,
          id_motivos: 2,
          nr_serie_item: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Reprovados", null, {});
  },
};
