import request from 'superagent'

const rootUrl = '/api/v1/plants'

export function getPlants () {
  return request.get(rootUrl)
    .then(res => res.body)
}
