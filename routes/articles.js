const express = require("express");
const {
  getAllArticles,
  getArticles,
  postArticles,
  updateArticles,
  deleteArticles,
} = require("../controllers/articlesController");
const verifyJWT = require("../middleware/verifyJWT");
const router = express.Router();

router.get("/articles", getAllArticles);
router.get("/articles/:id", getArticles);
router.post("/articles", verifyJWT, postArticles);
router.delete("/articles/:id", verifyJWT, deleteArticles);
router.put("/articles/:id", verifyJWT, updateArticles);

module.exports = router;
