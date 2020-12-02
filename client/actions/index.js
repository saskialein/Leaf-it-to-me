import { createOrder } from "../apis/orders"
import { getProducts } from "../apis/products"

export const SET_PRODUCTS = 'SET_PRODUCTS'
export const ADD_TO_CART = 'ADD_TO_CART'
export const ADD_TO_ORDERS = 'ADD_TO_ORDERS'

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    products
  }
}

export const addToCart = (product_id, quantity = 1) => {
  return {
    type: ADD_TO_CART,
    product_id,
    quantity
  }
}

export const addToOrders = (order) => {
  return {
    type: ADD_TO_ORDERS,
    order
  }
}

export const fetchProducts = () => {
  return dispatch => {
    return getProducts()
      .then(products => {
        dispatch(setProducts(products))
      })
  }
}

export const checkoutOrder = (order) => {
  return dispatch => {
    return createOrder(order)
      .then(order => {
        dispatch(addToOrders(order))
      })
  }
}
