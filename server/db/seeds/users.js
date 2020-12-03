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
        {
          id: 1, 
          name: 'Ian', 
          username: 'eeny', 
          hash: ianHash, 
          email: 'eeny@geni.com'
        },
        {
          id: 2, 
          name: 'Orlando', 
          username: 'landi', 
          hash: orlandoHash, 
          email: 'landi@handi.com'
        },
        {
          id: 3, 
          name: 'Hortense', 
          username: 'tensi', 
          hash: hortenseHash, 
          email: 'tensi@rensi.com'
        },

       ])
    )
}
