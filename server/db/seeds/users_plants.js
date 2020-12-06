
exports.seed = function(knex) {
  return knex('users_plants').del()
    .then(function () {
      return knex('users_plants').insert([
        {
          id: 1, 
          user_id: 3, 
          plant_id: 1, 
          name: '', 
          notes: '', 
          img: ''
        },
        {
          id: 2, 
          user_id: 3, 
          plant_id: 2, 
          name: '', 
          notes: '', 
          img: ''
        },
        {
          id: 3, 
          user_id: 3, 
          plant_id: 3, 
          name: '', 
          notes: '', 
          img: ''
        },
        {
          id: 4, 
          user_id: 1, 
          plant_id: 1, 
          name: '', 
          notes: '', 
          img: ''
        },
        {
          id: 5, 
          user_id: 4, 
          plant_id: 1, 
          name: '', 
          notes: '', 
          img: ''
        },
        {
          id: 6, 
          user_id: 4, 
          plant_id: 3, 
          name: '', 
          notes: '', 
          img: ''
        }
      ]);
    });
};
