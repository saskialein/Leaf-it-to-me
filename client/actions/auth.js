import { getDecodedToken } from 'authenticare/client/auth'

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGOUT = 'LOGOUT'

export const logIn = (user) => {
  return {
    type: LOGIN_SUCCESS,
    user
  }
}

export const logOut = () => {
  return {
    type: LOGOUT
  }
}

export const checkAuth = () => {
  return dispatch => {
    const user = getDecodedToken()
    if (user) {
      dispatch(logIn(user))
    }
  }
}