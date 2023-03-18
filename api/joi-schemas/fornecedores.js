const Joi = require("joi");
const schemasFornecedor = {
  schemaPOST: Joi.object().keys({
    razaosocial: Joi.string().required(),
    nomefantasia: Joi.string().required(),
    cnpj: Joi.string().required(),
  }),
};
module.exports = schemasFornecedor;
