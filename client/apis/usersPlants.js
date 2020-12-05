import request from 'superagent'



const rootUrl = '/api/v1/users_plants/'



export function retrieveUsersPlants (id) {
  return request.get(rootUrl + id)
    .then(res => res.body)
}