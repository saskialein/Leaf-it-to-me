exports.up = function (knex) {
  return knex.schema.createTable('orders', table => {
    table.increments('id')
    table.string('secret_code')
    table.integer('user_id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('orders')
}
