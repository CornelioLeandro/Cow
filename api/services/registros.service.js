const database = require("../models");

const findall = async (limit, offset) =>
  await database.Registros.findAll({
    limit: limit,
    lock: true,
    skipLocked: true,
    include: { all: true },
  });

const countRegistro = async () => await database.Registros.findAndCountAll();

const getOneRegistros = async (id) =>
  await database.Registros.findOne({ where: { id: Number(id) } });

const createRegistros = async (newInf) =>
  await database.Registros.create(newInf);

const updateRegistros = async (newInf, id) => {
  await database.Registros.update(newInf, {
    where: { id: Number(id) },
  });
};

const deleteRegistros = async (id) => {
  await database.Registros.destroy({
    where: {
      id: Number(id),
    },
  });
};

module.exports = {
  findall,
  createRegistros,
  getOneRegistros,
  updateRegistros,
  deleteRegistros,
  countRegistro,
};
