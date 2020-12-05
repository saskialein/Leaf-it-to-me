const express = require('express')
const router = express.Router()

const { getUsersPlants } = require('../db/plantDbFuncs')


// GET USER'S PLANTS
router.get('/:id', (req, res) => {
    getUsersPlants(req.params.id)
        .then(plants => {
            console.log(plants)
            res.json(plants)
            //res.json means stringify the response & put it in JSON format so we can then deal with it this way
        })
        .catch(err => {
            console.log('catch', err)
            res.status(500).json({ message: 'Something broke' })
        })
})

module.exports = router
