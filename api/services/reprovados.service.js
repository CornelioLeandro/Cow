const database = require("../models");

const findall = async () => await database.Reprovados.findAll();

const getOneReprovados = async (id) =>
  await database.Reprovados.findOne({ where: { id: Number(id) } });

const createReprovados = async (newInf) =>
  await database.Reprovados.create(newInf);

const updateReprovados = async (newInf, id) => {
  await database.Reprovados.update(newInf, {
    where: { id: Number(id) },
  });
};

const deleteReprovados = async (id) => {
  await database.Reprovados.destroy({
    where: {
      id: Number(id),
    },
  });
};

module.exports = {
  findall,
  createReprovados,
  getOneReprovados,
  updateReprovados,
  deleteReprovados,
};
