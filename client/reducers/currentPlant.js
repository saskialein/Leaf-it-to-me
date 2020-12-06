import { CURRENT_PLANT } from '../actions/index'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_PLANT:
      return action.currentPlant
    default:
      return state
  }
}

export default reducer