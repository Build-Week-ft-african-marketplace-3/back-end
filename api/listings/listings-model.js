const db = require("../data/db-config");
const Users = require("../users/users-model");

function getAll() {
  return db("products");
}

function getById(id) {
  return db("products").where("product_id", id).first();
}

function getBy(filter) {
  return db("products").where(filter);
}

async function addProduct(product) {
  const [id] = await db("products").insert(product, "product_id");

  return getById(id);
}

async function updateProduct(id, changes) {
  await db("products").where("product_id", id).update(changes);

  const product = await getById(id);

  return Users.getProductsByUser(product.user_id);
}

function deleteProduct(id) {
  return db("products").where("product_id", id).del();
}

function search(value) {
  return db("products").where(
    db.raw('LOWER("name")'),
    "like",
    `%${value.toLowerCase()}%`
  );
}

module.exports = {
  getAll,
  getById,
  getBy,
  addProduct,
  updateProduct,
  deleteProduct,
  search,
};
