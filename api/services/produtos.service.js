const database = require("../models");

const findall = async () => await database.Produtos.findAll();

const getOneProdutos = async (id) =>
  await database.Produtos.findOne({ where: { id: Number(id) } });

const createProdutos = async (newInf) => await database.Produtos.create(newInf);

const updateProdutos = async (newInf, id) => {
  await database.Produtos.update(newInf, {
    where: { id: Number(id) },
  });
};

const deleteProdutos = async (id) => {
  await database.Produtos.destroy({
    where: {
      id: Number(id),
    },
  });
};

module.exports = {
  findall,
  createProdutos,
  getOneProdutos,
  updateProdutos,
  deleteProdutos,
};
