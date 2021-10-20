const router = require("express").Router();
const Listings = require("./listings-model");
// const {  } = require("./listings-middleware");
// const restricted = require("../auth/auth-middleware");

router.get("/", (req, res, next) => {
  Listings.getAll()
    .then((listing) => {
      res.json(listing);
    })
    .catch(next);
});

module.exports = router;
