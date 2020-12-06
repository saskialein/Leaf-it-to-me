import { SET_USERS_PLANTS, DEL_USER_PLANT, CLEAR_USERS_PLANTS } from '../actions/usersPlants'

const initialState = []

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_USERS_PLANTS:
        return action.plants
        
      case CLEAR_USERS_PLANTS:
        return initialState
      
      case DEL_USER_PLANT:
        return state.filter((plant) => plant.id != action.id)

      default:
        return state
    }
  }

  export default reducer
