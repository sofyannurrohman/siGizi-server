const express = require("express");
const router = express.Router();

const verifyJWT = require("../middleware/verifyJWT");
const {
  getChildPredict,
  deleteChildData,
  getChildbyID,
} = require("../controllers/childController");
// /api/users
router.get("/childs", verifyJWT, getChildPredict);
router.get("/childs/:id", getChildbyID);
router.delete("/childs/:id", deleteChildData);

module.exports = router;
