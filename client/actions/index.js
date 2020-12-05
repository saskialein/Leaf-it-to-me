import { retrievePlants, addPlantToUsersPlantsDB } from "../apis/plants"
import { retrieveUsersPlants } from "../apis/usersPlants"

export const SET_PLANTS = 'SET_PLANTS'
export const ADD_PLANT_2PROFILE = 'ADD_PLANT_2PROFILE'
export const CURRENT_PLANT = 'CURRENT_PLANT'
export const SET_USERS_PLANTS = 'SET_USERS_PLANTS'



export const setPlants = (plants) => {
  return {
    type: SET_PLANTS,
    plants
  }
}

export const setUsersPlants = (plants) => {
  return {
    type: SET_USERS_PLANTS,
    plants
  }
}

export const addPlantToRedux = (plant) => {
  return {
    type: ADD_PLANT_2PROFILE,
    plant
  }
}

export const currentPlant = (currentPlant) => {
  return {
    type: CURRENT_PLANT,
    currentPlant
  }
}

export const fetchPlants = () => {
  return dispatch => {
    return retrievePlants()
      .then(plants => {
        dispatch(setPlants(plants))
      })
  }
}

export const fetchUsersPlants = () => {
  return dispatch => {
    return retrieveUsersPlants()
      .then(plants => {
        dispatch(setUsersPlants(plants))
      })
  }
}

export const addPlantToReduxandDb = (plant) => {
  return dispatch => {
    return addPlantToUsersPlantsDB(plant)
      .then(res => {
        dispatch(addPlantToRedux(plant.plant_id))
      })
  }
}

// export const addCurrentPlantToRedux = (plant) => {
//   return dispatch(currentPlant(plant))
// }



