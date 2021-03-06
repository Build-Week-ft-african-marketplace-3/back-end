exports.up = async (knex) => {
  await knex.schema
    .createTable("users", (table) => {
      table.increments("user_id");
      table.string("username", 64).notNullable().unique();
      table.string("password", 64).notNullable();
      table.timestamps(false, true);
    })
    .createTable("products", (table) => {
      table.increments("product_id");
      table.string("product_name", 64).notNullable();
      table.float("product_price").notNullable();
      table.string("product_description", 256);
      table.string("product_image", 256);
      table.string("location", 64).notNullable();
      table
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("user_id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists("products").dropTableIfExists("users");
};
