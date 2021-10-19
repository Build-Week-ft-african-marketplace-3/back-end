const router = require("express").Router();

const Users = require("./users-model.js");
const { verifyUserId } = require(".//user-middlewere");

router.get("/", (req, res, next) => {
  Users.getAll()
    .then((users) => {
      res.json(users);
    })
    .catch(next);
});

router.get("/:user_id", (req, res, next) => {
  Users.getById(req.params.user_id)
    .then((user) => {
      res.json(user);
    })
    .catch(next);
});

router.delete("/:id", verifyUserId, (req, res, next) => {
  const id = req.params.id;

  Users.deleteUser(id)
    .then(() => {
      res.status(200).json({ message: "User successfully deleted." });
    })
    .catch(next);
});

module.exports = router;
