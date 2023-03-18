"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Registros extends Model {
    static associate(models) {
      Registros.hasMany(models.Reprovados, { foreignKey: "id_registros" });

      Registros.belongsTo(models.Produtos, { foreignKey: "id_produtos" });
      Registros.belongsTo(models.Usuarios, { foreignKey: "id" });
    }
  }
  Registros.init(
    {
      dataenvio: DataTypes.DATE(new Date()),
      quantidade: DataTypes.INTEGER,
    },
    {
      sequelize,
      freezeTableName: true,
      modelName: "Registros",
    }
  );
  return Registros;
};
