const express = require("express");
const router = express.Router();
const { registerUsers } = require("../controllers/usersController");

// /api/users
router.post("/", registerUsers);

module.exports = router;
