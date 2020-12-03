import request from 'superagent'

const rootUrl = '/api/v1/plants'

export function retrievePlants () {
  return request.get(rootUrl)
    .then(res => res.body)
}


