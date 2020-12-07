import { SET_SEARCH, CLEAR_SEARCH } from '../actions/search'

const initialState = ""

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH:
      return action.searchTerm
    
    case CLEAR_SEARCH:
      return initialState
    
      default:
      return state
  }
}

export default reducer
