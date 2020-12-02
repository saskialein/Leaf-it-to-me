import { ADD_TO_ORDERS } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_ORDERS:
      return [...state, action.order]
    default:
      return state
  }
}

export default reducer
