"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Motivos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Motivos.hasMany(models.Reprovados, { foreignKey: "id_motivos" });
    }
  }
  Motivos.init(
    {
      descricao: DataTypes.STRING,
    },
    {
      sequelize,
      freezeTableName: true,
      modelName: "Motivos",
    }
  );
  return Motivos;
};
