const aprovadoService = require("../services/aprovados.service.js");

class AprovadoController {
  static async getAllAprovados(req, res) {
    try {
      const aprovado = await aprovadoService.findall();
      res.status(200).json(aprovado);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async getAprovadossId(req, res) {
    try {
      const { id } = req.params;
      const aprovado = await aprovadoService.getOneAprovados(id);
      res.status(200).json(aprovado);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async createAprovados(req, res) {
    try {
      const aprovadoInfo = req.body;
      const aprovado = await aprovadoService.createAprovados(aprovadoInfo);
      res.status(200).json(aprovado);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async updateAprovados(req, res) {
    try {
      const aprovadoInfo = req.body;
      const { id } = req.params;
      await aprovadoService.updateAprovados(aprovadoInfo, id);
      const aprovado = await aprovadoService.getOneAprovados(id);
      return res.status(200).json(aprovado);
    } catch (error) {
      return res.status(500).json(erro.message);
    }
  }
}

module.exports = AprovadoController;
