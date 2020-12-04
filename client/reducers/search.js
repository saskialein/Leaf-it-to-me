import { SET_SEARCH } from '../actions/search'

const initialState = ""

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH:
      return action.searchTerm
    default:
      return state
  }
}

export default reducer
