const { Router } = require("express");
const RegistroController = require("../controllers/registroController");

const schemaRegistro = require("../joi-schemas/registros");
const midleware = require("../middleware/joi-validator");

const router = Router();

router.get("/registros/", RegistroController.getAllRegistro);
router.get("/registros/:id", RegistroController.getRegistroId);

router.post(
  "/registros",
  midleware(schemaRegistro.schemaPost),
  RegistroController.createRegistro
);

router.put("/registros/:id", RegistroController.updateRegistro);

module.exports = router;
