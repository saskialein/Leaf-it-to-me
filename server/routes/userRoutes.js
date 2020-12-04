const express = require('express')
const router = express.Router()

const db = require('../db/userDbFuncs')

//  GET SINGLE USER
router.get('/:id', (req, res) => {
    const id = req.params.id
    getUser(id)
        .then(user => {
            res.json(user)
            //res.json means res.send(JSON.stringify(pup))
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Something broke' })
        })
})

// UPDTAE USER
router.patch('/:id', (req,res) => {
    const id = req.params.id
    const user = req.body
    return db.updateUser(id, user)
    .then(() => res.json({task: 'updated'}))
    .catch(err => {
        console.log(err)
        res.status(500).json({message: 'something went wrong'}) 
    })
})

module.exports = router
