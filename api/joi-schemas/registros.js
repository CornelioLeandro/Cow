const { number } = require("joi");
const Joi = require("joi");
const schemaRegistros = {
  schemaPost: Joi.object().keys({
    dataenvio: Joi.date().required(),
    quantidade: Joi.number().required(),
    id_produtos: Joi.number().required(),
    id_usuarios: Joi.number().required(),
  }),
};

module.exports = schemaRegistros;
