exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products_orders').del()
    .then(function () {
      // Inserts seed entries
      return knex('products_orders').insert([])
    })
}
