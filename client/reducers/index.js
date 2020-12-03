import { combineReducers } from 'redux'

import plants from './plants'
import setLoaded from './setLoaded'
import auth from './auth'


export default combineReducers({
  plants,
  setLoaded,
  auth,
})
