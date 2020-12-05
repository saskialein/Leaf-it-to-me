const express = require('express')
const router = express.Router()

const { getPlants, getPlant,createPlant, addPlantToProfileDbFunc } = require('../db/plantDbFuncs')


// READ -- GET LIST OF PLANTS
router.get('/', (req, res) => {
    getPlants()
        .then(plants => {
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
// ADDS PLANT TO USERS_PLANTS DB (WHEN PLANT CLICKED TO ADD TO PROFILE)
router.post('/addtoprofile', (req, res) => {
    const plant = req.body
    addPlantToProfileDbFunc(plant)
    .then( () => {
        res.json({})
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Something broke' })
    })
})

module.exports = router
