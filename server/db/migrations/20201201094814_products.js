exports.up = function (knex) {
  return knex.schema.createTable('products', table => {
    table.increments('id')
    table.string('name')
    table.string('image_url', 5000)
    table.string('description')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('products')
}
