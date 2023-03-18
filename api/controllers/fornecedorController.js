const fornecedorService = require("../services/fornecedor.services.js");

class FornecedorController {
  static async getAllFornecedor(req, res) {
    try {
      const allFornecedo = await fornecedorService.findAll();
      console.log(allFornecedo);
      return res.status(200).json(allFornecedo);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getOneFornecedor(req, res) {
    const { id } = req.params;
    try {
      const fornecedor = await fornecedorService.getOneFornecedor(id);
      if (fornecedor === null) {
        return res.status(404).send();
      }
      return res.status(200).json(fornecedor);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async createFornecedor(req, res) {
    const novoFornecedor = req.body;
    try {
      const fornecedor = await fornecedorService.createFornecedor(
        novoFornecedor
      );
      return res.status(201).json(fornecedor);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async putFornecedor(req, res) {
    const { id } = req.params;
    const fornecedorInfo = req.body;
    try {
      await fornecedorService.updateFornecedor(fornecedorInfo, id);

      const fornecedorAtualizado = await fornecedorService.getOneFornecedor(id);

      if (fornecedorAtualizado === null) {
        return res.status(404).send();
      }
      return res.status(200).json(fornecedorAtualizado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deleteFornecedor(req, res) {
    const { id } = req.params;
    try {
      await fornecedorService.deleteFornecedor(id);
      return res.status(200).send("Fornecedor deletado com sucesso");
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = FornecedorController;
