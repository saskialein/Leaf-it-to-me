import { combineReducers } from 'redux'

import plants from './plants'
import auth from './auth'
import search from './search'
import currentPlant from './currentPlant'
import usersPlants from './usersPlants'


export default combineReducers({
  plants,
  usersPlants,
  auth,
  search,
  currentPlant
})
