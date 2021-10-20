exports.seed = async function (knex) {
  await knex("users").insert([
    { username: "greg", password: "1234" },
    { username: "will", password: "1234" },
    { username: "jane", password: "1234" },
  ]);
  await knex("products").insert([
    {
      product_name: "mangoes",
      product_price: 5,
      product_description: "good mangoes",
      location: "kinshasa",
      user_id: 1,
    },
    {
      product_name: "black beans",
      product_price: 2,
      product_description: "good black beans",
      location: "lagos",
      user_id: 1,
    },
    {
      product_name: "corn",
      product_price: 3,
      product_description: "good corn",
      location: "cairo",
      user_id: 1,
    },
  ]);
};
