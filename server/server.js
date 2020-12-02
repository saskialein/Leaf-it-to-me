const express = require('express')
const path = require('path')

<<<<<<< HEAD
const plantRoutes = require('./routes/plantRoutes')
const userRoutes = require('./routes/userRoutes')
=======
const plantRoutes = require('./routes/plants')
>>>>>>> a96559ff427d203d4ff0999eb7b1965a52de23c8

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/plants', plantRoutes)
<<<<<<< HEAD
server.use('/api/v1/users', userRoutes)
=======

server.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
  })
>>>>>>> a96559ff427d203d4ff0999eb7b1965a52de23c8

module.exports = server
