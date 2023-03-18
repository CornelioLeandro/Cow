"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Aprovados",
      [
        {
          id_registros: 2,
          id_classificacoes: 4,
          nr_serie_item: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_registros: 4,
          id_classificacoes: 2,
          nr_serie_item: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_registros: 5,
          id_classificacoes: 2,
          nr_serie_item: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Aprovados", null, {});
  },
};
