exports.up = async (knex) => {
  await knex.schema
    .createTable("users", (table) => {
      table.increments("user_id");
      table.string("username", 64).notNullable();
      table.string("password", 32).notNullable();
      table.timestamps(false, true);
    })
    .createTable("products", (table) => {
      table.increments("product_id");
      table.string("product_name", 64).notNullable();
    })
    .createTable("locations", (table) => {
      table.increments("location_id");
      table.string("location_name", 64).notNullable();
    })
    .createTable("listings", (table) => {
      table.increments("listing_id");
      table
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("user_id")
        .inTable("users")
        .onUpdate("RESTRICT")
        .onDelete("RESTRICT");
      table
        .integer("product_id")
        .unsigned()
        .notNullable()
        .references("product_id")
        .inTable("products")
        .onUpdate("RESTRICT")
        .onDelete("RESTRICT");
      table
        .integer("location_id")
        .unsigned()
        .notNullable()
        .references("location_id")
        .inTable("locations")
        .onUpdate("RESTRICT")
        .onDelete("RESTRICT");
    });
};

exports.down = async (knex) => {
  await knex.schema
    .dropTableIfExists("users")
    .dropTableIfExists("products")
    .dropTableIfExists("locations")
    .dropTableIfExists("listings");
};
