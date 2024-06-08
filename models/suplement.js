"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Suplement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Suplement.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT("long"),
      url: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Suplement",
    }
  );
  return Suplement;
};
