import request from 'superagent'



const rootUrl = '/api/v1/users_plants'



export function retrieveUsersPlants () {
  return request.get(rootUrl)
    .then(res => res.body)
}