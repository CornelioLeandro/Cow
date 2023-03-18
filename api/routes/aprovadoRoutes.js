const { Router } = require("express");
const AprovadoController = require("../controllers/aprovadoController");
const router = Router();

router.get("/aprovados", AprovadoController.getAllAprovados);

router.get("/aprovados/:id", AprovadoController.getAprovadossId);

router.post("/aprovados", AprovadoController.createAprovados);

router.put("/aprovados/:id", AprovadoController.updateAprovados);

module.exports = router;
