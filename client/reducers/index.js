import { combineReducers } from 'redux'

import plants from './plants'
import auth from './auth'


export default combineReducers({
  plants,
  auth,
})
