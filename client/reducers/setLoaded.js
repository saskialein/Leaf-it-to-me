const initialState = false

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOADED':
      return true
      default: return state
  }
}

export default reducer