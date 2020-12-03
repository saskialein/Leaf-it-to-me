import request from 'superagent'
import { getAuthorizationHeader } from 'authenticare/client'

const rootUrl = '/api/v1/users'
const acceptJsonHeader = { Accept: 'application/json' }

// export function getProfile () {
//   return request.get(rootUrl)
//     .set(acceptJsonHeader)
//     .then(res => {
//       return res.body.profiles
//     })
//     .catch(logError)
// }

export function updateNameAndEmail (user) {
  return request.post(rootUrl)
    .set(acceptJsonHeader)
    .set(getAuthorizationHeader())
    .send(user)
    .then(res => res.body.users)
    .catch(logError)
}

// export function updateProfile () {
//   return request.put(rootUrl)
//     .set(acceptJsonHeader)
//     .set(getAuthorizationHeader())
//     .send(profile)
//     .then(res => res.body.profile)
//     .catch(logError)
// }

// export function deleteProfileAPI (profile) {
//   return request.delete(rootUrl)
//     .set(acceptJsonHeader)
//     .set(getAuthorizationHeader())
//     .send(profile)
//     .then(res => res.body.profiles)
//     .catch(logError)
// }

// function logError (err) {
//   if (err.message === 'Forbidden') {
//     throw new Error('Only the user who added the fruit may update and delete it')
//   } else {
//     // eslint-disable-next-line no-console
//     console.error(
//       'Error consuming the API (in client/api.js):',
//       err.message
//     )
//     throw err
  // }
// }