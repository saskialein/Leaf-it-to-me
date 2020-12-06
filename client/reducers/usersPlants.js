import { SET_USERS_PLANTS, CLEAR_USERS_PLANTS } from '../actions/usersPlants'

const initialState = []

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_USERS_PLANTS:
        return action.plants
        
      case CLEAR_USERS_PLANTS:
        return initialState
      
      default:
        return state
    }
  }

  export default reducer
