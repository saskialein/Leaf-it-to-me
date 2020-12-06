import { SET_PLANTS, ADD_PLANT } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PLANTS:
      return action.plants
    case ADD_PLANT:
      return [...state, action.plant]
    default:
      return state
  }
}

export default reducer
