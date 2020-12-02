const e = require('express');
const connection = require('./connection')

function createOrder(orderDetails, db = connection) {
  const user = {
    name: orderDetails.name,
    email: orderDetails.email,
  }
  const order = {}
  return db('users').insert(user)
    .then(ids => {
      user.id = ids[0]
      order.user_id = ids[0]
      order.secret_code = newSecretCode()
      return db('orders').insert(order)
    })
    .then(ids => {
      order.id = ids[0]

      const products_orders = orderDetails.products.map(item => {
        return {
          product_id: item.id,
          order_id: order.id,
          quantity: item.quantity,
        }
      })

      return db('products_orders').insert(products_orders)
    })
    .then(() => {
      return {
        id: order.id,
        secret_code: order.secret_code
      }
    })
}

function newSecretCode() {
  const colours = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple']
  const animals = ['Badger', 'Chicken', 'Mouse', 'Capybara', 'Elephant', 'Limur', 'Gibbon']
  const colourIndex = Math.floor(Math.random() * colours.length)
  const animalIndex = Math.floor(Math.random() * animals.length)
  return colours[colourIndex] + ' ' + animals[animalIndex]
}

module.exports = {
  createOrder,
}