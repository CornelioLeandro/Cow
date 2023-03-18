const { Router } = require("express");
const MotivoController = require("../controllers/motivoController");
const router = Router();

router.get("/motivos", MotivoController.getAllMotivos);
router.get("/motivos/:id", MotivoController.getMotivosId);

router.post("/motivos", MotivoController.createMotivos);

router.put("/motivos/:id", MotivoController.updateMotivos);

module.exports = router;
