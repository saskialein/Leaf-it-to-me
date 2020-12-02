exports.up = function (knex) {
  return knex.schema.createTable('products_orders', table => {
    table.increments('id')
    table.integer('product_id')
    table.integer('order_id')
    table.integer('quantity')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('products_orders')
}
