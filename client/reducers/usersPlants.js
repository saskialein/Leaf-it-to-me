import { SET_USERS_PLANTS, DEL_USER_PLANT, CLEAR_USERS_PLANTS} from '../actions/usersPlants'
import { ADD_USER_PLANT } from '../actions/index'

const initialState = []

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_USERS_PLANTS:
        return action.plants
        
      case CLEAR_USERS_PLANTS:
        return initialState
      
      case DEL_USER_PLANT:
        return state.filter((plant) => plant.plant_id != action.id)

      case ADD_USER_PLANT:
        return [...state, action.plant]

      default:
        return state
    }
  }

  export default reducer
