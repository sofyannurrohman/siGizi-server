const express = require("express");
const router = express.Router();
const {
  registerUsers,
  getUserProfile,
  editUserProfile,
  deleteUserProfile,
} = require("../controllers/usersController");
const verifyJWT = require("../middleware/verifyJWT");
// /api/users
router.post("/", registerUsers);
router.get("/users", verifyJWT, getUserProfile);
router.put("/users/:id", verifyJWT, editUserProfile);
router.delete("/users", verifyJWT, deleteUserProfile);

module.exports = router;
