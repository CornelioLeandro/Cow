const database = require("../models");
const jwt = require("jsonwebtoken");

const generateToken = (id) =>
  jwt.sign({ id: id }, process.env.SECRET_JWT, { expiresIn: 54000 });

const findOneEmail = async (email) =>
  await database.Usuarios.findOne({
    where: {
      email: email,
    },
    attributes: ["id", "nome", "email", "senha"],
  });

module.exports = { generateToken, findOneEmail };
