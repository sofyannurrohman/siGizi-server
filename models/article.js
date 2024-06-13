"use strict";
const { Model, Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Article.hasMany(models.Comment);
      Article.hasMany(models.ArticleImage);
    }
  }
  Article.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      userID: {
        type: DataTypes.UUID,
      },
      title: DataTypes.STRING,
      body: DataTypes.TEXT("long"),
    },
    {
      sequelize,
      modelName: "Article",
    }
  );

  return Article;
};
