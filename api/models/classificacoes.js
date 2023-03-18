"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Classificacoes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Classificacoes.hasMany(models.Produtos, {
        foreignKey: "id_classificacoes",
      });
    }
  }
  Classificacoes.init(
    {
      tipo: DataTypes.STRING,
    },
    {
      sequelize,
      freezeTableName: true,
      modelName: "Classificacoes",
    }
  );
  return Classificacoes;
};
