"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Reprovados extends Model {
    static associate(models) {
      Reprovados.belongsTo(models.Registros, { foreignKey: "id_registros" });
      Reprovados.belongsTo(models.Motivos, { foreignKey: "id_motivos" });
    }
  }
  Reprovados.init(
    {
      nr_serie_item: DataTypes.INTEGER,
    },
    {
      sequelize,
      freezeTableName: true,
      modelName: "Reprovados",
    }
  );
  return Reprovados;
};
