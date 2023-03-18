"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Fornecedores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Fornecedores.hasMany(models.Produtos, { foreignKey: "id_fornecedores" });
    }
  }
  Fornecedores.init(
    {
      razaosocial: DataTypes.STRING,
      nomefantasia: DataTypes.STRING,
      cnpj: DataTypes.STRING,
    },
    {
      sequelize,
      freezeTableName: true,
      modelName: "Fornecedores",
    }
  );
  return Fornecedores;
};
