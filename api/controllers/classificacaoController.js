const classificacoesService = require("../services/classificacao.service.js");

class ClassificacaoController {
  static async getAllClassificacoes(req, res) {
    try {
      const classificacaos = await classificacoesService.findall();
      return res.status(200).json(classificacaos);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getClassificacoesId(req, res) {
    try {
      const { id } = req.params;
      const classificacoes = await classificacoesService.getOneClassificacoes(
        id
      );
      return res.status(200).json(classificacoes);
    } catch (error) {
      return res.status(200).json(error.message);
    }
  }

  static async createClassificacoes(req, res) {
    try {
      const classificacaoInfo = req.body;
      const novaClassificacoes = await classificacoesService.createClassificacoes(
        classificacaoInfo
      );
      return res.status(200).json(novaClassificacoes);
    } catch (error) {
      return res.status(200).json(error.message);
    }
  }

  static async updateClassificacoes(req, res) {
    try {
      const { id } = req.params;
      const classificacaoInfo = req.body;
      await classificacoesService.updateClassificacoes(classificacaoInfo, id);
      const novaclassificacao = await classificacoesService.getOneClassificacoes(
        id
      );
      return res.status(200).json(novaclassificacao);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = ClassificacaoController;
