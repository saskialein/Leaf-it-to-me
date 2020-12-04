

const express = require('express')
const router = express.Router()

const { applyAuthRoutes } = require('authenticare/server')


const {
  userExists,
  getUserByName,
  createUser
} = require('../db/authDbFuncs')



applyAuthRoutes(router, {
  userExists,
  getUserByName,
  createUser
})

// TODO: create POST routes for /auth/signin and /auth/register





module.exports = router