const { Router } = require("express");
const usuarioController = require("../controllers/usuarioController.js");

const router = Router();

router.post("/usuarios", usuarioController.createUsuario);
router.get("/usuarios", usuarioController.getAllUsuario);

module.exports = router;
