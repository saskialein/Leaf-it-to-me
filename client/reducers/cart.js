import { ADD_TO_CART, ADD_TO_ORDERS } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newState = [...state]
      const cartItem = newState.find(item => item.product_id === action.product_id)
      if (cartItem) {
        cartItem.quantity++
      } else {
        newState.push({ product_id: action.product_id, quantity: action.quantity })
      }
      return newState
    case ADD_TO_ORDERS:
      return []
    default:
      return state
  }
}

export default reducer
