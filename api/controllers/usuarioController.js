const usuarioService = require("../services/usuario.service.js");

class UsuarioController {
  static async createUsuario(req, res) {
    try {
      const userInf = req.body;

      const user = await usuarioService.createUsuarios(userInf);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async getAllUsuario(req, res) {
    try {
      const user = await usuarioService.findall();
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}

module.exports = UsuarioController;
