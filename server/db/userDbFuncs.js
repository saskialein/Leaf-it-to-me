const connection = require('./connection')

// READ (Single Resource)
function getUser(id, db = connection){
    return db('users').select().where('id', id).first()
}

// UPDATE USER
function updateUser(id, user, db = connection) {
    return db('users').update(user).where('id', id)
}

module.exports = {
    getUser,
    updateUser
}