
exports.up = function (knex) {
  return knex.schema.createTable('plants', table => {
    table.increments('id')
    table.string('common_name')
    table.string('species_name')
    table.string('water')
    table.string('light')
    table.string('temp')
    table.string('humidity')
    table.string('soil')
    table.string('lvl')
    table.string('more', 5000)
    table.string('img')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('plants')
}
