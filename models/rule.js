"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Rule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Rule.init(
    {
      umur: DataTypes.INTEGER,
      energi: DataTypes.INTEGER,
      lemak: DataTypes.INTEGER,
      karbohidrat: DataTypes.INTEGER,
      protein: DataTypes.INTEGER,
      kalsium: DataTypes.INTEGER,
      tag: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Rule",
    }
  );
  return Rule;
};
