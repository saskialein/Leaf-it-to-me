import { retrievePlants, addPlantToUsersPlantsDB } from "../apis/plants"

export const SET_PLANTS = 'SET_PLANTS'
export const ADD_PLANT_2PROFILE = 'ADD_PLANT_2PROFILE'



export const setPlants = (plants) => {
  return {
    type: SET_PLANTS,
    plants
  }
}

export const addPlantToRedux = (plant) => {
  return {
    type: ADD_PLANT_2PROFILE,
    plant
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
export const addPlantToReduxandDb = (plant) => {
  return dispatch => {
    return addPlantToUsersPlantsDB(plant)
      .then(res => {
        dispatch(addPlantToRedux(plant.plant_id))
      })
  }
}


