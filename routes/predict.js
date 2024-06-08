const express = require("express");
const { predictStunting } = require("../controllers/predictController");
const verifyJWT = require("../middleware/verifyJWT");
const router = express.Router();

router.post("/predict", verifyJWT, predictStunting);

module.exports = router;
