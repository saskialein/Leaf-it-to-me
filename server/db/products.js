const e = require('express');
const connection = require('./connection')

function getProducts(db = connection) {
  return db('products').select()
}

module.exports = {
  getProducts,
}