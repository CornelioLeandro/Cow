const { Router } = require("express");
const router = Router();
const autenticacaoController = require("../controllers/autenticacaoController");

router.post("/login", autenticacaoController.login);

module.exports = router;
