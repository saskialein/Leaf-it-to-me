const connection = require('./connection')

// READ (Single Resource)
function getUser(id, db = connection){
    return db('users').select().where('id', id).first()
}

module.exports = {
    getUser
}