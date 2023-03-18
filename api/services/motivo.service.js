const database = require("../models");

const findall = async () => await database.Motivos.findAll();

const getOneMotivo = async (id) =>
  await database.Motivos.findOne({ where: { id: Number(id) } });

const createMotivos = async (novoMotivo) =>
  await database.Motivos.create(novoMotivo);

const updateMotivos = async (motivoInfo, id) => {
  await database.Motivos.update(motivoInfo, {
    where: { id: Number(id) },
  });
};

const deleteMotivos = async (id) => {
  await database.Motivos.destroy({
    where: {
      id: Number(id),
    },
  });
};

module.exports = {
  findall,
  getOneMotivo,
  createMotivos,
  updateMotivos,
  deleteMotivos,
};
