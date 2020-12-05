import request from 'superagent'

import { getAuthorizationHeader } from 'authenticare/client'

const acceptJsonHeader = { Accept: 'application/json' }
const rootUrl = '/api/v1/plants'



export function retrievePlants () {
  return request.get(rootUrl)
    .then(res => res.body)
}

export function addPlantToUsersPlantsDB (plant) {
  return request.post(rootUrl + '/addtoprofile')
    .set(acceptJsonHeader)
    .set(getAuthorizationHeader())
    .send(plant)
    .then(res => res.body)
    .catch(err => console.log(err))
}


