<<<<<<< HEAD
import { SET_USERS_PLANTS, CLEAR_USERS_PLANTS } from '../actions/usersPlants'
=======
import { SET_USERS_PLANTS, DEL_USER_PLANT } from '../actions/usersPlants'
>>>>>>> 6a3a4767d2db539bbc04b7f382e847692c9026ff

const initialState = []

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_USERS_PLANTS:
        return action.plants
<<<<<<< HEAD
        
      case CLEAR_USERS_PLANTS:
        return initialState
      
=======
      case DEL_USER_PLANT:
        return state.filter((plant) => plant.id != action.id)
>>>>>>> 6a3a4767d2db539bbc04b7f382e847692c9026ff
      default:
        return state
    }
  }

  export default reducer
