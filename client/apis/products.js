import request from 'superagent'

const rootUrl = '/api/products'

export function getProducts () {
  return request.get(rootUrl)
    .then(res => res.body)
}
