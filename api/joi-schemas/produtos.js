const Joi = require("joi");
const schemaProdutos = {
  schemaPOST: Joi.object().keys({
    descricao: Joi.string().required(),
    espessura: Joi.string().required(),
    quantidade: Joi.number().required(),
    cor: Joi.string().required(),
    id_classificacoes: Joi.number().required(),
    id_fornecedores: Joi.number().required(),
  }),
};

module.exports = schemaProdutos;
