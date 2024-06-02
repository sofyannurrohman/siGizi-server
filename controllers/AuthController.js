const { User } = require("../models");
const jwt = require("jsonwebtoken");
const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

exports.registerUser = async (req, res) => {
  try {
    let { name, email, password } = req.body;

    const newUser = await User.create({ name, email, password });

    const token = signToken(newUser.id);

    return res.status(200).json({
      message: "success",
      token: token,
      data: newUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: "validasi error",
      error: error.errors.map((err) => err.message),
    });
  }
};

exports.loginUser = async (req, res) => {
  try {
    // validasi body
    if (!req.body.email || !req.body.password) {
      return res.status(400).json({
        status: "fail",
        message: "error validation",
        error: "please input email and password ",
      });
    }
    // cek if user email di req ada di DB dan password juga benar
    const userData = await User.findOne({ where: { email: req.body.email } });
    if (
      !userData ||
      !(await userData.correctPassword(req.body.password, userData.password))
    ) {
      return res.status(400).json({
        status: "fail",
        message: "error login",
        error: "invalid email or password",
      });
    }
    //token di res
    const token = signToken(userData.id);
    return res.status(200).json({
      status: "success",
      message: "login berhasil",
      token: token,
    });
  } catch (error) {}
};
