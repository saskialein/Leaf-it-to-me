import { retrievePlants } from "../apis/plants"

export const SET_PLANTS = 'SET_PLANTS'
// export const SET_LOADED = 'SET_LOADED'

export const setPlants = (plants) => {
  return {
    type: SET_PLANTS,
    plants
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

// export const setLoaded = () => {
//   return {
//     type: SET_LOADED
//   }
// }