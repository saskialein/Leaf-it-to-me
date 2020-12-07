const express = require('express')
const router = express.Router()
const upload = require('../services/file-upload')
const singleUpload = upload.single('img')

router.post('/image-upload', function(req,res){
  console.log(req.body)
  singleUpload(req,res, function(err){
    if (err) {
      console.log(err)
      return res.status(422).send({errors: [{title: 'File Upload Error', detail: err.message}]})
    }
    return res.json({'imageUrl': req.file.location})
  })
})

module.exports = router

//add profile to db first, get back the plant_profile_id and then do the 
// image upload post. Then load entire profile with the get.

//Handle submit two step process
