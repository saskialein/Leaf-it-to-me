import { retrieveUsersPlants } from "../apis/usersPlants"

export const SET_USERS_PLANTS = 'SET_USERS_PLANTS'

export const setUsersPlants = (plants) => {
    return {
      type: SET_USERS_PLANTS,
      plants
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