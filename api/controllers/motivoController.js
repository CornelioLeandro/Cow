const motivoServices = require("../services/motivo.service.js");

class MotivoController {
  static async getAllMotivos(req, res) {
    try {
      const motivos = await motivoServices.findall();
      return res.status(200).json(motivos);
    } catch (error) {
      return res.status(200).json(error.message);
    }
  }

  static async getMotivosId(req, res) {
    try {
      const { id } = req.params;
      const motivos = await motivoServices.getOneMotivo(id);

      return res.status(200).json(motivos);
    } catch (error) {
      return res.status(200).json(error.message);
    }
  }

  static async createMotivos(req, res) {
    try {
      const novoMotivos = req.body;
      const motivos = await motivoServices.createMotivos(novoMotivos);
      return res.status(200).json(motivos);
    } catch (error) {
      return res.status(200).json(error.message);
    }
  }

  static async updateMotivos(req, res) {
    try {
      const { id } = req.params;
      const motivoInf = req.body;
      await motivoServices.updateMotivos(motivoInf, id);
      const motivos = await motivoServices.getOneMotivo(id);
      return res.status(200).json(motivos);
    } catch (error) {
      return res.status(200).json(error.message);
    }
  }
}

module.exports = MotivoController;
