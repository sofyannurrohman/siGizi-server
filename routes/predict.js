const express = require("express");
const router = express.Router();
import predictStunting from "../controllers/predictController";

router.post("/predict", predictStunting);
module.exports = router;
