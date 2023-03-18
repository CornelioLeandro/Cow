const { Router } = require("express");
const ClassificacaoController = require("../controllers/classificacaoController");
const router = Router();

router.get("/classificacoes", ClassificacaoController.getAllClassificacoes);
router.get("/classificacoes/:id", ClassificacaoController.getClassificacoesId);

router.post("/classificacoes", ClassificacaoController.createClassificacoes);

router.put("/classificacoes/:id", ClassificacaoController.updateClassificacoes);

module.exports = router;
