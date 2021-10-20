const router = require("express").Router();
const bcrypt = require("bcryptjs");

const buildToken = require("./token-builder");
const { checkUsernameExists } = require("./auth-middleware");
const Users = require("../users/users-model");

router.post("/register", (req, res, next) => {
  const { username, password } = req.body;
  const hash = bcrypt.hashSync(password, 8);
  Users.addUser({ username, password: hash })
    .then((newUser) => {
      res.status(201).json(newUser);
    })
    .catch(next);
});

router.post("/login", checkUsernameExists, (req, res, next) => {
  if (bcrypt.compareSync(req.body.password, req.user.password)) {
    const token = buildToken(req.user);
    res.json({
      message: `${req.user.username} is back`,
      token,
    });
  } else {
    next({ status: 401, message: "Invalid credentials" });
  }
});

module.exports = router;
