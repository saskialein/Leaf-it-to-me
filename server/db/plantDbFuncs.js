const connection = require('./connection')


// READ - Get All Plants
function getPlants(db = connection) {
  return db('plants')
    .select()
}

// READ - Get Single Plant
function getPlant(id, db = connection){
  return db('plants')
  .select()
  .where('id', id)
  .first()
}
// kind of like a find, run thru all of the plants and find the plant whose id matches the id that has been passed in 

// READ - Get User Plants
function getUsersPlants(id, db = connection) {
  return db('users_plants').select().where('user_id', id)
}


//CREATE (Single Resource)
function createPlant(newPlant, db = connection){
  return db('plants').insert(newPlant)
  // here we're going into the plants db, inserting & automatically returning an array of ids for whatever thing(s) has been inserted, but we just want the id of the task we've added, hence the .then
  .then(ids => ids[0])
}

//
function addPlantToProfileDbFunc(plant, db = connection) {
  return db('users_plants').insert(plant, 'id')
}

function deletePlant(id, db = connection) {
  return db('users_plants').delete().where('plant_id', id)
}

module.exports = {
  getPlants,
  getPlant,
  getUsersPlants,
  createPlant,
  addPlantToProfileDbFunc,
  deletePlant
}