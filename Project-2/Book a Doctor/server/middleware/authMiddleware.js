const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  // console.log("AUTH HEADER:", req.headers.authorization);

  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_KEY);

    req.user = decoded.id; //  CORRECT
    next();
  } catch (error) {
    return res.status(401).send({
      success: false,
      message: "Unauthorized",
    });
  }
};
