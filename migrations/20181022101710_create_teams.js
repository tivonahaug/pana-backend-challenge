exports.up = function(knex, Promise) {
  return knex.schema.createTable('teams', function(table) {
    table.increments('id').primary()
    table.timestamps()
    table.string('name')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('teams')
};
