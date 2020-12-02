const express = require('express')
const path = require('path')

const plantRoutes = require('./routes/plants')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/plants', plantRoutes)

server.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
  })

module.exports = server
