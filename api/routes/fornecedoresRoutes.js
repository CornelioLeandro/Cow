const { Router } = require("express");
const router = Router();
const FornecedorController = require("../controllers/fornecedorController");

const schemasFornecedor = require("../joi-schemas/fornecedores");
const middleware = require("../middleware/joi-validator");

router.get("/fornecedores/:id", FornecedorController.getOneFornecedor);
router.get("/fornecedores", FornecedorController.getAllFornecedor);

router.post(
  "/fornecedores",
  middleware(schemasFornecedor.schemaPOST),
  FornecedorController.createFornecedor
);

router.put("/fornecedores/:id", FornecedorController.putFornecedor);

router.delete("/fornecedores/:id", FornecedorController.deleteFornecedor);

module.exports = router;
