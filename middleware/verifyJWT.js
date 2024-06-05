const jwt = require("jsonwebtoken");
function verifyJWT(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      status: "fail",
      code: 401,
      message: "Unauthorized: No token provided",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
  } catch (err) {
    return res
      .status(403)
      .json({ status: "fail", code: 403, message: "Forbidden: Invalid token" });
  }
  next();
}

module.exports = verifyJWT;
