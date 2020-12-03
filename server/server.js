const express = require('express')
const path = require('path')

const plantRoutes = require('./routes/plantRoutes')
const userRoutes = require('./routes/userRoutes')
const authRoutes = require('./routes/auth')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/plants', plantRoutes)
server.use('/api/v1/users', userRoutes)
server.use('/api/v1', authRoutes)

server.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
  })

module.exports = server
