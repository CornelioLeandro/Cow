const bcrypt = require("bcrypt");
("use strict");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Usuarios extends Model {
    static associate(models) {
      Usuarios.hasMany(models.Produtos, { foreignKey: "id_usuarios" });
      Usuarios.belongsTo(models.Registros, { foreignKey: "id" });
    }
  }

  Usuarios.init(
    {
      nome: DataTypes.STRING,
      ativo: DataTypes.BOOLEAN,
      email: DataTypes.STRING,
      senha: DataTypes.STRING,
    },
    {
      hooks: {
        beforeCreate: async (user) => {
          user.senha = await bcrypt.hash(user.senha, 10);
        },
      },
      defaultScope: {
        attributes: { exclude: "senha" },
      },
      sequelize,
      modelName: "Usuarios",
    }
  );
  return Usuarios;
};
