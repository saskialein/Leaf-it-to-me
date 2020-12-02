const express = require('express')
const router = express.Router()

const productsDb = require('../db/products')

// GET /api/products
router.get('/', (req,res) => {
  productsDb.getProducts()
    .then(products => {
      res.json(products)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Something is broken' })
    })
})

module.exports = router