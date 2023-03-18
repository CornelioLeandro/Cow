const database = require("../models");

const findall = async () => await database.Classificacoes.findAll();

const getOneClassificacoes = async (id) =>
  await database.Classificacoes.findOne({ where: { id: Number(id) } });

const createClassificacoes = async (newInf) =>
  await database.Classificacoes.create(newInf);

const updateClassificacoes = async (newInf, id) => {
  await database.Classificacoes.update(newInf, {
    where: { id: Number(id) },
  });
};

const deleteClassificacoes = async (id) => {
  await database.Classificacoes.destroy({
    where: {
      id: Number(id),
    },
  });
};

module.exports = {
  findall,
  createClassificacoes,
  getOneClassificacoes,
  updateClassificacoes,
  deleteClassificacoes,
};
