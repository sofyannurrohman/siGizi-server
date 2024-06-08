"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Child extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Child.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      userID: DataTypes.UUID,
      name: DataTypes.STRING,
      umur: DataTypes.INTEGER,
      jenis_kelamin: DataTypes.ENUM("laki-laki", "perempuan"),
      bb: DataTypes.INTEGER,
      pb: DataTypes.INTEGER,
      lk: DataTypes.INTEGER,
      label: DataTypes.STRING,
      ideal: DataTypes.TEXT("long"),
      suggestion: DataTypes.TEXT("long"),
    },
    {
      sequelize,
      modelName: "Child",
    }
  );
  return Child;
};
