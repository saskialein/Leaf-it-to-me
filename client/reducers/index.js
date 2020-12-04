import { combineReducers } from 'redux'

import plants from './plants'
import loggedUsersPlants from './loggedUsersPlants'


export default combineReducers({
  plants,
  loggedUsersPlants
})
