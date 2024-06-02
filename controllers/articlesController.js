var fs = require("fs");
const { Article } = require("../models");
const { Comment } = require("../models");
const { ArticleImage } = require("../models");
const deleteOldImage = require("../helper/deleteOldImage");

exports.getArticles = async (req, res) => {
  try {
    const articleID = req.params.id;
    const article = await Article.findByPk(articleID);
    const imageArticle = await ArticleImage.findOne({
      where: { articleID: articleID },
    });

    const comments = await Comment.findAll({
      where: {
        articleId: articleID, // Find comments where articleId matches the provided ID
      },
    });
    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }

    const responseJSON = {
      id: article.id,
      title: article.title,
      body: article.body,
      image: imageArticle.filename,
      createdAt: article.createdAt,
      comments: comments,
    };
    res.json({
      status: "success",
      data: responseJSON,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

exports.getAllArticles = async (req, res) => {
  try {
    const articles = await Article.findAll();

    return res.status(200).json({
      status: "success",
      data: articles,
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

exports.postArticles = async (req, res) => {
  const title = req.body.title;
  const body = req.body.body;
  const userID = req.user.id;

  if (!req.file) {
    return res
      .status(400)
      .json({ message: "Please provide image for article" });
  }

  const image = req.file.path;

  if (!title || !body) {
    return res.status(400).json({ message: "Please provide title and body" });
  }

  try {
    const newArticle = await Article.create({ userID, title, body });
    const newImage = await ArticleImage.create({
      articleID: newArticle.id,
      userID: userID,
      filename: image,
    });
    const responseJson = {
      userID: userID,
      title: newArticle.title,
      body: newArticle.body,
      image: newImage,
    };
    res.status(201).json({
      status: "success",
      data: responseJson,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateArticles = async (req, res) => {
  const articlesID = req.params.id;

  const article = await Article.findByPk(articlesID);

  const imageArticle = await ArticleImage.findOne({
    where: { articleID: articlesID },
  });

  if (req.file) {
    await deleteOldImage(imageArticle.filename);
  }

  if (!article) {
    return res.status(400).json({ message: "article not found" });
  }

  try {
    const newArticle = {
      title: req.body.title,
      body: req.body.body,
    };
    const newArticleImage = {
      filename: req.file.path,
    };

    await Article.update(newArticle, { where: { id: articlesID } });

    await ArticleImage.update(newArticleImage, {
      where: { articleID: articlesID },
    });
    res.status(201).json(newArticle);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

exports.deleteArticles = async (req, res) => {
  const articleID = req.params.id;
  const article = await Article.findByPk(articleID);

  const commentArticle = await Comment.findOne({
    where: { articleId: articleID },
  });

  const imageArticle = await ArticleImage.findOne({
    where: { articleID: articleID },
  });

  console.log(commentArticle);
  console.log(imageArticle);

  if (!article) {
    return res.status(400).json({ message: "article not found" });
  }
  try {
    await article.destroy(article);
    if (commentArticle != null) {
      await commentArticle.destroy(commentArticle);
    }
    await imageArticle.destroy(imageArticle);

    await deleteOldImage(imageArticle.filename);

    return res.status(200).json({
      status: "success",
      message: "article has been deleted",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
