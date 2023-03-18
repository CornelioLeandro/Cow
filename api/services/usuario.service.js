const database = require("../models");

const findall = async () => await database.Usuarios.findAll();

const getOneUsuarios = async (id) =>
  await database.Usuarios.findOne({ where: { id: Number(id) } });

const createUsuarios = async (newInf) => await database.Usuarios.create(newInf);

const updateUsuarios = async (newInf, id) => {
  await database.Usuarios.update(newInf, {
    where: { id: Number(id) },
  });
};

const deleteUsuarios = async (id) => {
  await database.Usuarios.destroy({
    where: {
      id: Number(id),
    },
  });
};

module.exports = {
  findall,
  createUsuarios,
  getOneUsuarios,
  updateUsuarios,
  deleteUsuarios,
};
