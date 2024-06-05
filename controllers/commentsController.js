const { Comment, Article } = require("../models");

exports.postComment = async (req, res) => {
  const userID = req.user.id;
  const articleID = req.params.articleID;
  const body = req.body.body;

  const article = await Article.findByPk(articleID);

  if (!article) {
    return res.status(404).json({
      status: "fail",
      code: 404,
      message: "article not found",
    });
  }
  const newComment = await Comment.create({
    articleID,
    userID,
    body,
  });
  return res.status(200).json({
    status: "success",
    code: 200,
    message: "comment has successfuly created",
    data: newComment,
  });
};
exports.findComment = async (req, res) => {
  try {
    const commentID = req.params.id;
    const comment = await Comment.findByPk(commentID);

    if (!comment) {
      return res.status(404).json({ message: "comment not found" });
    }

    res.status(200).json({
      status: "success",
      code: 200,
      message: "success find comment by id",
      data: comment,
    });
  } catch (err) {
    return res
      .status(500)
      .json({ status: "fail", code: 500, message: err.message });
  }
};
exports.deleteComment = async (req, res) => {
  const commentID = req.params.commentID;
  const comment = await Comment.findByPk(commentID);

  if (!comment) {
    return res.status(404).json({ message: "comment not found" });
  }
  try {
    await comment.destroy();

    return res.status(200).json({
      status: "success",
      code: 200,
      message: "comment has been deleted",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ status: "fail", code: 500, message: error.message });
  }
};
exports.updateComment = async (req, res) => {};
