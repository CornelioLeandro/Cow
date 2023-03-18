const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const usuarioService = require("../services/usuario.service.js");

dotenv.config();

const authMiddleware = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).send({ message: "401 não autorizado" });
    }
    const parts = authorization.split(" ");

    if (parts.length !== 2) {
      return res.status(401).send({ message: "401 não autorizado" });
    }

    const [schema, token] = parts;

    if (schema !== "Bearer") {
      return res.status(401).send({ message: "401 não autorizado" });
    }

    jwt.verify(token, process.env.SECRET_JWT, async (error, decode) => {
      if (error) {
        return res.status(401).send({ message: "Token invalid" });
      }

      const usuario = await usuarioService.getOneUsuarios(decode.id);

      if (!usuario == null || usuario.id == null) {
        return res.status(401).send({ message: "invalid token 23" });
      }

      req.userId = usuario.id;

      return next();
    });
  } catch (error) {
    return res.status(401).send({ message: "401 não autorizado 3" });
  }
};

module.exports = { authMiddleware };
