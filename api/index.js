const express = require("express");
const routes = require("./routes");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

routes(app);

app.listen(port, () => console.log(`Servidor no na porta ${port}`));

module.exports = app;
