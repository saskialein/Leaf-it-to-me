const express = require('express')
const path = require('path')

const productRoutes = require('./routes/products')
const orderRoutes = require('./routes/orders')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/products', productRoutes)
server.use('/api/orders', orderRoutes)

module.exports = server
