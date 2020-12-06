import { retrieveUsersPlants, deletePlantAPI } from "../apis/usersPlants"

export const SET_USERS_PLANTS = 'SET_USERS_PLANTS'
<<<<<<< HEAD
export const CLEAR_USERS_PLANTS = 'CLEAR_USERS_PLANTS'
=======
export const DEL_USER_PLANT = 'DEL_USER_PLANT'
>>>>>>> 6a3a4767d2db539bbc04b7f382e847692c9026ff

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

  export const deletePlant = (id) => {
    return {    
    type: DEL_USER_PLANT,
    id: id
    }
  }
  
  export function removePlant(id){
    return (dispatch) => {
      deletePlantAPI(id)
      .then(() => dispatch(deletePlant(id)))
    } 
  }