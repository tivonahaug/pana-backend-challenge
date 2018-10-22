exports.up = function(knex, Promise) {
  return knex.schema.createTable('transactions', function(table) {
    table.increments('id').primary()
    table.timestamps()
    table.integer('amount')
    table.string('currency').defaultTo('USD')
    table.boolean('credit').defaultTo(false)
    table.string('description')
    table.integer('team_id').references('teams.id')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('transactions')
};
