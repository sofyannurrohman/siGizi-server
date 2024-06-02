const jwt = require("jsonwebtoken");
function verifyJWT(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1]; // Extract token from Authorization header

  if (!token) {
    return res.status(401).send("Unauthorized: No token provided");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token using secret
    req.user = decoded; // Attach decoded user data to the request object
  } catch (err) {
    return res.status(403).send("Forbidden: Invalid token");
  }
  next(); // Proceed with the request if valid
}

module.exports = verifyJWT;
