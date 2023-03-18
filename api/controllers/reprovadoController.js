const reprovadosService = require("../services/reprovados.service.js");

class ReprovadoController {
  static async getAllReprovados(req, res) {
    try {
      const reprovados = await reprovadosService.findall();
      res.status(200).json(reprovados);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async getReprovadosId(req, res) {
    try {
      const { id } = req.params;
      const reprovado = await reprovadosService.getOneReprovados(id);
      res.status(200).json(reprovado);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async createReprovado(req, res) {
    try {
      const reprovadoInfo = req.body;
      const reprovado = await reprovadosService.createReprovados(reprovadoInfo);
      res.status(200).json(reprovado);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async updateReprovado(req, res) {
    try {
      const reprovadoInfo = req.body;
      const { id } = req.params;
      await reprovadosService.updateReprovados(reprovadoInfo, id);
      const reprovado = await reprovadosService.getOneReprovados(id);
      return res.status(200).json(reprovado);
    } catch (error) {
      return res.status(500).json(erro.message);
    }
  }
}

module.exports = ReprovadoController;
