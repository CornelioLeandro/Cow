const { Router } = require("express");
const ReprovadoController = require("../controllers/reprovadoController");

const router = Router();

router.get("/reprovados", ReprovadoController.getAllReprovados);
router.get("/reprovados/:id", ReprovadoController.getReprovadosId);

router.post("/reprovados", ReprovadoController.createReprovado);

router.put("/reprovados/:id", ReprovadoController.updateReprovado);

module.exports = router;
