
exports.seed = function(knex) {
  return knex('plants').del()
    .then(function () {
      return knex('plants').insert([
        {
          id: 1, common_name: 'Monstera', species_name: 'Monstera deliciosa', water: '', light: 'bright spot, indirect sunlight', temp: '', humidity: 'adaptable, likes a mist spray once a week', soil: '', lvl: 'beginner', more: '', img: ''
        },

        {
          id: 2, common_name: 'Fittonia', species_name: '', water: '', light: '', temp: '', humidity: '', soil: '', lvl: '', more: '', img: ''
        },
        {
          id: 3, common_name: 'Yucca', species_name: '', water: '', light: '', temp: '', humidity: '', soil: '', lvl: '', more: '', img: ''
        },
        {
          id: 4, common_name: 'Peace Lily', species_name: '', water: '', light: '', temp: '', humidity: '', soil: '', lvl: 'beginner', more: '', img: ''
        },
        {
          id: 5, common_name: 'Aloe', species_name: '', water: '', light: '', temp: '', humidity: '', soil: '', lvl: '', more: '', img: ''
        },
        {
          id: 6, common_name: 'Rubber Plant', species_name: 'Ficus Elastica', water: '', light: '', temp: '', humidity: '', soil: '', lvl: 'beginner', more: '', img: ''
        },
        {
          id: 7, common_name: 'Snake Plant', species_name: 'Sansevieria trifasciata', water: '', light: '', temp: '', humidity: '', soil: '', lvl: 'beginner', more: '', img: ''
        },
        {
          id: 8, common_name: 'English Ivy', species_name: '', water: '', light: '', temp: '', humidity: '', soil: '', lvl: '', more: '', img: ''
        },
        {
          id: 9, common_name: 'Maidenhair fern', species_name: 'Adiantum', water: 'regular', light: 'filtered light', temp: 'warm', humidity: 'moist', soil: '', lvl: 'medium-advanced', more: 'ideal for bathrooms', img: ''
        },
        {
          id: 10, common_name: 'String Of Pearls', species_name: 'Senecio rowleyanus', water: 'fortnightly', light: 'bright', temp: '', humidity: '', soil: '', lvl: 'beginner', more: '', img: ''
        },
        {
          id: 11, common_name: 'Madagascar dragon tree', species_name: 'D. marginata', water: 'monthly', light: '', temp: 'room', humidity: '', soil: '', lvl: '', more: 'air purifier', img: ''
        },
        {
          id: 12, common_name: 'Tillandsia (air plants)', species_name: 'epiphytes or bromeliads', water: 'mist or dunk rarely', light: 'bright, indirect light', temp: '', humidity: 'mid', soil: 'no soil', lvl: 'beginner', more: 'obtains water and nutrients from the air', img: ''
        },
        {
          id: 13, common_name: 'Devil’s ivy', species_name: 'Epipremnum pinnatum', water: 'weekly', light: 'bright or low light', temp: '', humidity: '', soil: 'light, aerated, well-drained soil', lvl: '', more: '', img: ''
        },
        {
          id: 14, common_name: 'Fiddle leaf fig', species_name: 'Ficus lyrata', water: 'let soil dry between waters', light: 'bright, indirect light', temp: 'warm', humidity: '', soil: 'premium potting mix', lvl: '', more: '', img: ''
        },
        {
          id: 15, common_name: 'Zanzibar gem', species_name: 'Zamioculcas zamifolia', water: '', light: '', temp: '', humidity: '', soil: '', lvl: '', more: '', img: ''
        },
        {
          id: 16, common_name: 'succulents', species_name: 'echeverias', water: '', light: 'direct', temp: '', humidity: '', soil: '', lvl: 'beginner', more: '', img: ''
        },
        {
          id: 17, common_name: 'Sweetheart Plant', species_name: 'Hoya kerrii', water: '', light: 'bright', temp: '', humidity: '', soil: '', lvl: '', more: '', img: ''
        },
        {
          id: 18, common_name: 'Spider Plant', species_name: '', water: '', light: 'dappled light', temp: '', humidity: '', soil: '', lvl: 'beginner', more: '', img: ''
        },
        {
          id: 19, common_name: 'Pink Bubbles', species_name: 'Pink Callisia repens', water: 'regularly', light: 'bright, indirect light', temp: '', humidity: '', soil: 'moist', lvl: '', more: '', img: ''
        },
        {
          id: 20, common_name: 'Silver Lady Fern ', species_name: 'Blechnum gibbum', water: '', light: 'bright, indrect light', temp: '', humidity: 'damp', soil: '', lvl: '', more: 'air purifier', img: ''
        },
      ]);
    });
};
