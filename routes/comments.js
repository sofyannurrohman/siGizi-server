const express = require("express");

const router = express.Router();

router.post("/articles/:articleID/comments", postComments());
router.get("/articles/:articleID/comments/:commentsID", commentsGetByID());
router.put("/articles/:articleID/comments/:commentsID", commentsUpdate());
router.delete("/articles/:articleID/comments/:commentsID", commentsDelete());

module.exports = router;
