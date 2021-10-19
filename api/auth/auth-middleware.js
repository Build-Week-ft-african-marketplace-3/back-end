const jwt = require("jsonwebtoken");
const Users = require("../users/users-model");
const { JWT_SECRET } = require("../secrets");

const restricted = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return next({ status: 401, message: "Token required" });
  }

  jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
    if (err) {
      return next({ status: 401, message: "Token invalid" });
    }

    req.decodedToken = decodedToken;
    return next();
  });
};

const checkUsernameExists = async (req, res, next) => {
  try {
    const [user] = await Users.getBy({ username: req.body.username });
    if (!user) {
      next({ status: 401, message: "Invalid credentials" });
    } else {
      req.user = user;
      next();
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  restricted,
  checkUsernameExists,
};
