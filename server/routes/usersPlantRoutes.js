const express = require('express')
const router = express.Router()

const { getUsersPlants, deletePlant } = require('../db/plantDbFuncs')


// GET USER'S PLANTS
router.get('/:id', (req, res) => {
    getUsersPlants(req.params.id)
        .then(plants => {
            res.json(plants)
            //res.json means stringify the response & put it in JSON format so we can then deal with it this way
        })
        .catch(err => {
            console.log('catch', err)
            res.status(500).json({ message: 'Something broke' })
        })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id
    return deletePlant(id)
      .then(() => {
        res.json({})
      })
      .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Something broke' })
    })
  })

module.exports = router
