const database = require("../models");

const findAll = async () => await database.Fornecedores.findAll();

const getOneFornecedor = async (id) =>
  await database.Fornecedores.findOne({
    where: { id: Number(id) },
  });

const createFornecedor = async (fornecedor) =>
  await database.Fornecedores.create(fornecedor);

const updateFornecedor = async (fornecedorInfo, id) => {
  await database.Fornecedores.update(fornecedorInfo, {
    where: { id: Number(id) },
  });
};

const deleteFornecedor = async (id) => {
  await database.Fornecedores.destroy({
    where: {
      id: Number(id),
    },
  });
};
module.exports = {
  findAll,
  getOneFornecedor,
  createFornecedor,
  updateFornecedor,
  deleteFornecedor,
};
