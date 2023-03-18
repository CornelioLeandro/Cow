const registrosService = require("../services/registros.service.js");

class RegistroController {
  static async getAllRegistro(req, res) {
    try {
      const currentUrl = req.path;
      let { limit, offset } = req.query;

      limit = Number(limit);
      offset = Number(offset);

      if (!limit) {
        limit = 5;
      }

      if (!offset) {
        offset = 0;
      }

      const registros = await registrosService.findall(limit, offset);
      console.log(registros);
      let total = await registrosService.countRegistro();
      total = total.count;

      const next = offset + limit;
      const nextUrl =
        next < total ? `${currentUrl}?limit=${limit}&offset=${next}` : null;
      console.log("NEXTURL:", next, "TOTAL", total);
      const previus = offset - limit < 0 ? null : offset - limit;
      const previusUrl =
        next < total ? `${currentUrl}?limit=${limit}&offset=${previus}` : null;

      res.status(200).send({
        nextUrl,
        previusUrl,
        limit,
        offset,
        total,
        registros,

        resuls: registros.map((newItens) => ({
          id: newItens.id,
          quantidade: newItens.quantidade,
        })),
      });
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async getRegistroId(req, res) {
    try {
      const { id } = req.params;
      const registro = await registrosService.getOneRegistros(id);
      res.status(200).json(registro);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async createRegistro(req, res) {
    try {
      const registroInfo = req.body;
      const registro = await registrosService.createRegistros(registroInfo);
      res.status(200).json(registro);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async updateRegistro(req, res) {
    try {
      const registroInfo = req.body;
      const { id } = req.params;
      await registrosService.updateRegistros(registroInfo, id);
      const registro = await registrosService.getOneRegistros(id);
      return res.status(200).json(registro);
    } catch (error) {
      return res.status(500).json(erro.message);
    }
  }
}

module.exports = RegistroController;
