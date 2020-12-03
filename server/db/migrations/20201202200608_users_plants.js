
exports.up = function (knex) {
  return knex.schema.createTable('users_plants', table => {
    table.increments('id')
    table.string('user_id')
    table.string('plant_id')
    table.string('name')
    table.string('notes')
    table.string('img')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users_plants')
}

