const { User } = require("../models");
const bcrypt = require("bcrypt");
exports.registerUsers = (req, res) => {
  res.send("Hello World!");
};

exports.getUserProfile = async (req, res) => {
  try {
    const userID = req.user.id;
    const user = await User.findOne({
      where: { id: userID },
      attributes: { exclude: ["updatedAt", "password"] },
    });

    if (!user) {
      return res.status(404).json({
        status: "fail",
        code: 404,
        message: "user not found",
      });
    }

    return res.status(200).json({
      status: "success",
      code: 200,
      message: "success get user",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      code: 500,
      message: error.message,
    });
  }
};
exports.editUserProfile = async (req, res) => {
  try {
    const userID = req.params.id;
    const { name, email, password } = req.body;

    const user = await User.findOne({
      where: { id: userID },
    });

    const salt = await bcrypt.genSaltSync(10);
    const passwordHashed = bcrypt.hashSync(password, salt);
    if (!user) {
      return res.status(404).json({
        status: "fail",
        code: 404,
        message: "user not found",
      });
    }

    await User.update(
      { name: name, email: email, password: passwordHashed },
      { where: { id: userID } }
    );
    const updatedUser = await User.findOne({
      where: { id: userID },
    });

    return res.status(200).json({
      status: "success",
      code: 200,
      message: "success update user",
      data: updatedUser,
    });
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      code: 500,
      message: error.message,
    });
  }
};
exports.deleteUserProfile = async (req, res) => {
  try {
    const userID = req.user.id;
    const user = await User.findOne({
      where: { id: userID },
    });

    if (!user) {
      return res.status(404).json({
        status: "fail",
        code: 404,
        message: "user not found",
      });
    }
    await user.destroy();
    return res.status(200).json({
      status: "success",
      code: 200,
      message: "delete user success",
    });
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      code: 500,
      message: error.message,
    });
  }
};
