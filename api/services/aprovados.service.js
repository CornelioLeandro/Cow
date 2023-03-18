const database = require("../models");

const findall = async () => await database.Aprovados.findAll();

const getOneAprovados = async (id) =>
  await database.Aprovados.findOne({ where: { id: Number(id) } });

const createAprovados = async (novoAprovado) =>
  await database.Aprovados.create(novoAprovado);

const updateAprovados = async (aprovadoInfo, id) => {
  await database.Aprovados.update(aprovadoInfo, {
    where: { id: Number(id) },
  });
};

const deleteAprovados = async (id) => {
  await database.Aprovados.destroy({
    where: {
      id: Number(id),
    },
  });
};

module.exports = {
  findall,
  createAprovados,
  getOneAprovados,
  updateAprovados,
  deleteAprovados,
};
