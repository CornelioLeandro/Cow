"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Aprovados extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Aprovados.belongsTo(models.Registros, { foreignKey: "id_registros" });
      Aprovados.belongsTo(models.Classificacoes, {
        foreignKey: "id_classificacoes",
      });
    }
  }
  Aprovados.init(
    {
      nr_serie_item: DataTypes.INTEGER,
    },
    {
      sequelize,
      freezeTableName: true,
      modelName: "Aprovados",
    }
  );
  return Aprovados;
};
