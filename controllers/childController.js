const { Child } = require("../models");

exports.registerUsers = (req, res) => {
  res.send("Hello World!");
};

exports.getChildPredict = async (req, res) => {
  try {
    const userID = req.user.id;
    const child = await Child.findAll({
      where: { userID: userID },
      attributes: { exclude: ["updatedAt", "password"] },
    });

    if (!child) {
      return res.status(404).json({
        status: "fail",
        code: 404,
        message: "child not found",
      });
    }

    return res.status(200).json({
      status: "success",
      code: 200,
      message: "success get child",
      data: child,
    });
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      code: 500,
      message: error.message,
    });
  }
};

exports.getChildbyID = async (req, res) => {
  try {
    const childID = req.params.id;
    const child = await Child.findOne({
      where: { id: childID },
      attributes: { exclude: ["updatedAt", "password"] },
    });

    if (!child) {
      return res.status(404).json({
        status: "fail",
        code: 404,
        message: "child not found",
      });
    }

    return res.status(200).json({
      status: "success",
      code: 200,
      message: "success get child",
      data: child,
    });
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      code: 500,
      message: error.message,
    });
  }
};

exports.deleteChildData = async (req, res) => {
  try {
    const childID = req.params.id;
    const child = await Child.findOne({
      where: { id: childID },
    });

    if (!child) {
      return res.status(404).json({
        status: "fail",
        code: 404,
        message: "child not found",
      });
    }
    await child.destroy();
    return res.status(200).json({
      status: "success",
      code: 200,
      message: "delete child data success",
    });
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      code: 500,
      message: error.message,
    });
  }
};
