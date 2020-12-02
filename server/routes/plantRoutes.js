const express = require('express')
const router = express.Router()

const { getPlants, getPlant,createPlant } = require('../db/plantDb.js')

// READ -- GET LIST OF PLANTS
router.get('/', (req, res) => {
    getPlants()
        .then(plants => {
            console.log('here are the plants: ',plants)
            res.json(plants)
            //res.json means stringify the response & put it in JSON format so we can then deal with it this way
        })
        .catch(err => {
            console.log('catch', err)
            res.status(500).json({ message: 'Something broke' })
        })
})

// READ -- GET SINGLE PLANT 

router.get('/:id', (req, res) => {
    const id = req.params.id
    getPlant(id)
        .then(plant => {
            res.json(plant)
            //res.json means res.send(JSON.stringify(plant))
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Something broke' })
        })
})


// CREATE i.e ADD ONE NEW PLANT 
router.post('/', (req, res) => {
    const newPlant = req.body
    createPlant(newPlant)
    .then( id => {
        res.json({id: id})
        // at this stage one bit of info we don't have is the auto generated id of the new plant, which is why we're passing this back as the response 
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Something broke' })
    })
})



