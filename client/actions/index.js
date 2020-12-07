import { retrievePlants, addPlantToUsersPlantsDB, addPlantImage, addPlantData } from "../apis/plants"

export const SET_PLANTS = 'SET_PLANTS'
export const ADD_PLANT = 'ADD_PLANT'
export const ADD_PLANT_2PROFILE = 'ADD_PLANT_2PROFILE'
// export const CURRENT_PLANT = 'CURRENT_PLANT'
export const ADD_USER_PLANT = 'ADD_USER_PLANT'
//export const SET_USERS_PLANTS = 'SET_USERS_PLANTS'

export const setPlants = (plants) => {
  return {
    type: SET_PLANTS,
    plants
  }
}

export function pushPlant (plant) {
  return {
    type: ADD_PLANT,
    plant: plant
  }
}

// export const addPlantToRedux = (plant) => {
//   return {
//     type: ADD_PLANT_2PROFILE,
//     plant
//   }
// }

export const currentPlant = (plant) => {
  return {
    type: ADD_USER_PLANT,
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

export function addPlant (plantImage, plantData) {
  return dispatch => {
    return addPlantImage(plantImage)
      .then(fileUrl => {
        fileUrl = JSON.parse(fileUrl)
        plantData.img = fileUrl.imageUrl
        return addPlantData(plantData)
          .then(plantId => {
            plantData.id = plantId
            dispatch(pushPlant(plantData))
            return null
          })
      })
      .catch(err => {
        console.log('error in actions: ', err.message)
      })
  }
}

export const addPlantToReduxandDb = (plantObject) => {
  return dispatch => {
    return addPlantToUsersPlantsDB(plantObject)
      .then(id => {
        plantObject.id = id
        dispatch(currentPlant(plantObject))
      })
  }
}

// export const addCurrentPlantToRedux = (plant) => {
//   return dispatch(currentPlant(plant))
// }



