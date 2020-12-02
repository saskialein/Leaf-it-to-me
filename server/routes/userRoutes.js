const express = require('express')
const router = express.Router()

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