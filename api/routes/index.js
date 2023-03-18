const bodyParser = require("body-parser");
const app = require("..");
const fornecedores = require("./fornecedoresRoutes");
const produtos = require("./produtosRoutes");
const classificacoes = require("./classificacoesRoutes");
const registros = require("./registrosRoutes");
const motivos = require("./motivosRoutes");
const reprovados = require("./reprovadosRoutes");
const aprovados = require("./aprovadoRoutes");
const usuarios = require("./usuarioRoutes");
const autenticacao = require("./autenticacaoRoutes");

const swaggerUi = require("swagger-ui-express");
const swaggerDocs = require("../swagger/swagger.json");

module.exports = (app) => {
  app.use(bodyParser.json()),
    app.use(
      fornecedores,
      produtos,
      classificacoes,
      registros,
      motivos,
      reprovados,
      aprovados,
      usuarios,
      autenticacao
    ),
    app.get("/heathcheck", (req, res) => res.send({ status: "OK" }));

  app.use("/api-doc", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};
