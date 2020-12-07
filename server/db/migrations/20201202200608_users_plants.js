
exports.up = function (knex) {
  return knex.schema.createTable('users_plants', table => {
    table.increments('id')
    table.integer('user_id')
    table.integer('plant_id')
    table.string('name', 5000)
    table.string('notes')
    table.string('img')
  })
}
//user and plant ids need to be integers not strings
exports.down = function (knex) {
  return knex.schema.dropTable('users_plants')
}

