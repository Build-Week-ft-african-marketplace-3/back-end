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
        next({ status: 404, message: "Could not find listing with given id." });
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

// router.put("/:id", async (req, res, next) => {
//   try {
//     Listings.updateProduct(req.params.id, req.body)
//       .then((updatedProduct) => {
//         if (updatedProduct) {
//           res.status(200).json({
//             updatedProduct,
//             message: "You have successfully updated your listings",
//           });
//         } else {
//           next({
//             status: 404,
//             message: "Could not find listings with given ID",
//           });
//         }
//       })
//       .catch(
//         next({
//           message: "Failed to update listings",
//         })
//       );
//   } catch (error) {
//     next(error);
//   }
// });

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  Listings.deleteProduct(id)
    .then((deleted) => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res
          .status(404)
          .json({ message: "Could not find product with given id" });
      }
    })
    .catch(() => {
      res.status(500).json({ message: "Failed to delete product" });
    });
});

module.exports = router;
