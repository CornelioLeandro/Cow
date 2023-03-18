const bcrypt = require("bcrypt");
const autenticacaoService = require("../services/autenticacao.service");
const jwt = require("jsonwebtoken");

class AutenticacaoController {
  static async login(req, res) {
    try {
      const { email, senha } = req.body;
      const usuario = await autenticacaoService.findOneEmail(email);

      if (usuario === null) {
        return res.send({ message: "usuario nao existe" });
      }
      const senhaisValid = await bcrypt.compare(senha, usuario.senha);

      if (!senhaisValid) {
        return res.status(400).send({ message: "senha invalida" });
      }
      const id = usuario.id;

      const token = autenticacaoService.generateToken(id);

      res.status(200).send({ token });
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
}

module.exports = AutenticacaoController;
