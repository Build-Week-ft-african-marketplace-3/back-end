const db = require("../data/db-config");

function getAll() {
    return db("users");
}

function getById(id) {
    return db("users")
        .where({ id })
        .first();
}

async function addUser(user) {
    const [id] = await db("users").insert(user, "id");

    return getById(id);
}

async function updateUser(id, changes) {
    await db("users")
        .where({ id })
        .update(changes)

    return getById(id);
}

function deleteUser(id) {
    return db("users")
        .where({ id })
        .del();
}

function getItemsByUser(id) {
    return db("items").where({ "user_id": id });
}

module.exports = {
  addUser,
  getAll,
  getById,
  updateUser,
  deleteUser,
  getItemsByUser,
};
