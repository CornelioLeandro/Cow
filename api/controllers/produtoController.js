const produtoService = require("../services/produtos.service.js");

class ProdutoController {
  static async getAllProduto(req, res) {
    try {
      const produtos = await produtoService.findall();
      return res.status(200).json(produtos);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async updateProduto(req, res) {
    const { id } = req.params;
    const produtoInfo = req.body;
    try {
      await produtoService.updateProdutos(produtoInfo, id);
      const produtoAtulizado = await produtoService.getOneProdutos(id);
      return res.status(200).json(produtoAtulizado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getProdutoId(req, res) {
    const { id } = req.params;
    try {
      const produto = await produtoService.getOneProdutos(id);
      return res.status(200).json(produto);
    } catch (error) {
      return res.status(200).json(error.message);
    }
  }

  static async createProduto(req, res) {
    console.log("PEGA O REQUSER", req);
    try {
      const {
        descricao,
        espessura,
        quantidade,
        cor,
        id_classificacoes,
        id_fornecedores,
      } = req.body;

      if (
        !descricao ||
        !espessura ||
        !quantidade ||
        !cor ||
        !id_classificacoes ||
        !id_fornecedores
      ) {
        res.status(400).send({ message: "preencha todos os campos" });
      }

      const id = await produtoService.createProdutos({
        descricao,
        espessura,
        quantidade,
        cor,
        id_classificacoes,
        id_fornecedores,
        id_usuarios: req.userId,
      });
      return res.send(id);
    } catch (error) {
      return res.status(200).json(error);
    }
  }
}

module.exports = ProdutoController;
