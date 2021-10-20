const db = require("../data/db-config");

function getAll() {
    return db("users");
}

function getBy(filter) {
  return db("users")
    .where(filter);
}

function getById(id) {
    return db("users").where("user_id", id).first();
}

async function addUser(user) {
    const [id] = await db("users").insert(user, "user_id");

    return getById(id);
}

async function updateUser(id, changes) {
    await db("users").where("user_id", id).update(changes);

    return getById(id);
}

function deleteUser(id) {
    return db("users")
        .where("user_id", id)
        .del();
}

function getItemsByUser(id) {
    return db("items").where("user_id", id );
}

module.exports = {
  addUser,
  getAll,
  getBy,
  getById,
  updateUser,
  deleteUser,
  getItemsByUser,
};
