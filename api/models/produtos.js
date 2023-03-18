"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Produtos extends Model {
    static associate(models) {
      Produtos.hasMany(models.Registros, { foreignKey: "id_produtos" });

      Produtos.belongsTo(models.Fornecedores, {
        foreignKey: "id_fornecedores",
      });
      Produtos.belongsTo(models.Classificacoes, {
        foreignKey: "id_classificacoes",
      });
      Produtos.belongsTo(models.Usuarios, {
        foreignKey: "id_usuarios",
      });
    }
  }
  Produtos.init(
    {
      descricao: DataTypes.STRING,
      espessura: DataTypes.STRING,
      quantidade: DataTypes.INTEGER,
      cor: DataTypes.STRING,
    },
    {
      sequelize,
      freezeTableName: true,
      modelName: "Produtos",
    }
  );
  return Produtos;
};
