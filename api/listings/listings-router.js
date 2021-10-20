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

router.get("/:id", (req, res, next) => {
  const { id } = req.params;

  Listings.getById(id)
    .then((listing) => {
      if (listing) {
        res.json(listing);
      } else {
        next({status: 404,message: "Could not find listing with given id." });
      }
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  const newListing = req.body;

  Listings.addProduct(newListing)
    .then((listing) => {
      res.status(201).json(listing);
    })
    .catch(next);
});

module.exports = router;
