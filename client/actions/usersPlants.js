import { retrieveUsersPlants } from "../apis/usersPlants"

export const SET_USERS_PLANTS = 'SET_USERS_PLANTS'
export const CLEAR_USERS_PLANTS = 'CLEAR_USERS_PLANTS'

export const setUsersPlants = (plants) => {
    return {
      type: SET_USERS_PLANTS,
      plants
    }
  }

  export function clearUsersPlants() {
    return {
      type: CLEAR_USERS_PLANTS
    }
  }
  

export const fetchUsersPlants = (id) => {
    return dispatch => {
      return retrieveUsersPlants(id)
        .then(plants => {
          return  dispatch(setUsersPlants(plants))
        })
    }
  }