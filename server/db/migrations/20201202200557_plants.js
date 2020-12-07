
exports.up = function (knex) {
  return knex.schema.createTable('plants', table => {
    table.increments('id')
    table.string('common_name')
    table.string('species_name')
    table.string('water', 5000)
    table.string('light', 500)
    table.string('temp')
    table.string('humidity', 5000)
    table.string('soil', 5000)
    table.string('lvl')
    table.string('more', 5000)
    table.string('img')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('plants')
}
