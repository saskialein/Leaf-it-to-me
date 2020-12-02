import { getPlants } from "../apis/plants"

export const SET_PLANTS = 'SET_PLANTS'

export const setPlants = (plants) => {
  return {
    type: SET_PLANTS,
    plants
  }
}

export const fetchPlants = () => {
  return dispatch => {
    return getPlants()
      .then(products => {
        dispatch(setPlants(plants))
      })
  }
}
