const express = require("express");
const verifyJWT = require("../middleware/verifyJWT");
const {
  postComment,
  findComment,
  updateComment,
  deleteComment,
} = require("../controllers/commentsController");

const router = express.Router();

router.post("/articles/:articleID/comments", verifyJWT, postComment);
router.get("/comments/:commentID", findComment);
router.put("/comments/:commentID", verifyJWT, updateComment);
router.delete("/comments/:commentID", verifyJWT, deleteComment);

module.exports = router;
