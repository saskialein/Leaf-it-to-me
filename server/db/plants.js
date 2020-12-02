const e = require('express');
const connection = require('./connection')

function getAllPlants(db = connection) {
  return db('plants').select()
}

module.exports = {
  getAllPlants,
}