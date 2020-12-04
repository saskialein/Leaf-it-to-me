import { combineReducers } from 'redux'

import plants from './plants'
import auth from './auth'
import search from './search'


export default combineReducers({
  plants,
  auth,
  search
})
