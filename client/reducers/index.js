import { combineReducers } from 'redux'

import plants from './plants'
import auth from './auth'
import search from './search'
import loggedUsersPlants from './loggedUsersPlants'
import currentPlant from './currentPlant'


export default combineReducers({
  plants,
  auth,
  search,
  loggedUsersPlants,
  currentPlant
})
