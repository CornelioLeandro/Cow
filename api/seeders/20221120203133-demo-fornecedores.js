"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Fornecedores",
      [
        {
          razaosocial: "PPP-ltda",
          nomefantasia: "Boi Gordo",
          cnpj: "321548000124",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          razaosocial: "DDD-ltda",
          nomefantasia: "Bertin",
          cnpj: "421548000157",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          razaosocial: "HHH-ltda",
          nomefantasia: "JBS",
          cnpj: "721548000168",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Fornecedores", null, {});
  },
};
