const express = require('express')
const router = express.Router()

const plantsDb = require('../db/plants')

router.get('/', (req,res) => {
  plantsDb.getAllPlants()
    .then(plants => {
      res.json(plants)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Something is broken' })
    })
})

module.exports = router