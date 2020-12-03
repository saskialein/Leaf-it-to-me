const { generateHash } = require('authenticare/server')

exports.seed = (knex) => {
  return knex('users').del()
    .then(() => Promise.all([
      generateHash('ian'),
      generateHash('orlando'),
      generateHash('123')
    ]))
    .then(([ianHash, orlandoHash, hortenseHash]) =>
      knex('users').insert([
        { id: 1, username: 'Ian', hash: ianHash },
        { id: 2, username: 'Orlando', hash: orlandoHash },
        { id: 3, username: 'Hortense', hash: hortenseHash }
      ])
      )
  }