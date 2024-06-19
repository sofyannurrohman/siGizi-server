const processFileMiddleware = require("../middleware/upload");
const { Article } = require("../models");
const { Comment } = require("../models");
const { ArticleImage } = require("../models");
const { User } = require("../models");
const { Storage } = require("@google-cloud/storage");

keyFilename = "credentials.json";
const storage = new Storage({ keyFilename });
const bucket = storage.bucket("sigizi-caps");

exports.getArticles = async (req, res) => {
  try {
    const articleID = req.params.id;
    const article = await Article.findByPk(articleID);
    const imageArticle = await ArticleImage.findOne({
      where: { articleID: articleID },
    });

    const newUser = await User.findOne({ where: { id: article.userID } });
    const comments = await Comment.findAll({
      attributes: { exclude: ["updatedAt"] },
      where: {
        articleID: articleID,
      },
      include: [
        {
          model: User,
          attributes: {
            exclude: ["createdAt", "role_id", "password", "email", "updatedAt"],
          },
        },
      ],
    });

    if (!article) {
      return res.status(404).json({
        status: "fail",
        code: 404,
        message: "Article not found",
      });
    }
    let responseJSON;
    if (!imageArticle) {
      responseJSON = {
        id: article.id,
        user_article: newUser.name,
        title: article.title,
        body: article.body,
        image_url: [],
        createdAt: article.createdAt,
        comments: comments,
      };
    } else {
      responseJSON = {
        id: article.id,
        user_article: newUser.name,
        title: article.title,
        body: article.body,
        image_url: imageArticle.url,
        createdAt: article.createdAt,
        comments: comments,
      };
    }

    res.status(200).json({
      status: "success",
      data: responseJSON,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "fail",
      code: 500,
      message: err.message,
    });
  }
};

exports.getAllArticles = async (req, res) => {
  try {
    const articles = await Article.findAll({
      include: [
        {
          model: ArticleImage,
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
        {
          model: User,
          attributes: {
            exclude: ["createdAt", "role_id", "password", "email", "updatedAt"],
          },
        },
      ],
    });

    return res.status(200).json({
      status: "success",
      code: 200,
      message: "succesfuly get all article",
      data: articles,
    });
  } catch (err) {
    return res
      .status(500)
      .json({ status: "fail", code: 500, message: err.message });
  }
};

exports.postArticles = async (req, res) => {
  const title = req.body.title;
  const body = req.body.body;
  const userID = req.user.id;

  if (!title || !body) {
    return res.status(400).json({
      status: fail,
      code: 400,
      message: "please provide title and body",
    });
  }

  try {
    const newArticle = await Article.create({ userID, title, body });
    const responseJson = {
      userID: userID,
      articleID: newArticle.id,
      title: newArticle.title,
      body: newArticle.body,
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
  await processFileMiddleware(req, res);
  // if (req.file) {
  //   await bucket.file(imageArticle.filename).delete();
  // }

  if (!article) {
    return res
      .status(400)
      .json({ status: "fail", code: 400, message: "article not found" });
  }

  try {
    const newArticle = {
      title: req.body.title,
      body: req.body.body,
    };

    await Article.update(newArticle, { where: { id: articlesID } });

    return res.status(201).json({
      status: "success",
      code: 201,
      message: "succesfuly update article ",
      data: newArticle,
    });
  } catch (err) {
    return res
      .status(500)
      .json({ status: "fail", code: 500, message: err.message });
  }
};

exports.deleteArticles = async (req, res) => {
  const articleID = req.params.id;
  const article = await Article.findByPk(articleID);

  const commentArticle = await Comment.findOne({
    where: { articleID: articleID },
  });

  const imageArticle = await ArticleImage.findOne({
    where: { articleID: articleID },
  });

  if (!article) {
    return res
      .status(404)
      .json({ status: "fail", code: 404, message: "article not found" });
  }
  try {
    await article.destroy(article);
    if (commentArticle != null) {
      await commentArticle.destroy(commentArticle);
    }
    await bucket.file(imageArticle.filename).delete();
    await imageArticle.destroy(imageArticle);

    return res.status(200).json({
      status: "success",
      code: 200,
      message: "article has been deleted",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ status: fail, code: 500, message: error.message });
  }
};
