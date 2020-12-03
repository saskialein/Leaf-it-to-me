
const { applyAuthRoutes } = require('authenticare/server')

const express = require('express')

const {
  userExists,
  getUserByName,
  createUser
} = require('../db/authDbFuncs')

const router = express.Router()

// TODO: create POST routes for /auth/signin and /auth/register

applyAuthRoutes(router, {
  userExists,
  getUserByName,
  createUser
})

module.exports = router