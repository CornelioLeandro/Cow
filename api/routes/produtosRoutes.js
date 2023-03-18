const { Router } = require("express");
const router = Router();
const ProdutoController = require("../controllers/produtoController");

const schemasProdutos = require("../joi-schemas/produtos");
const middleware = require("../middleware/joi-validator");
const { authMiddleware } = require("../middleware/auth.middleware");

router.get("/produtos", ProdutoController.getAllProduto);
router.put("/produtos/:id", ProdutoController.updateProduto);
router.get("/produtos/:id", ProdutoController.getProdutoId);

router.post("/produtos", authMiddleware, ProdutoController.createProduto);

module.exports = router;
