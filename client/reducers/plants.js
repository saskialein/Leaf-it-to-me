import { SET_PLANTS } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PLANTS:
      return action.plants
    default:
      return state
  }
}

export default reducer
