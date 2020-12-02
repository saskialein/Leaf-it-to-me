const express = require('express')
const path = require('path')

const plantRoutes = require('./routes/plantRoutes')
const userRoutes = require('./routes/userRoutes')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/plants', plantRoutes)
server.use('/api/v1/users', userRoutes)

module.exports = server
