import { ADD_PLANT_2PROFILE } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLANT_2PROFILE:
      return action.plant
    default:
      return state
  }
}

export default reducer