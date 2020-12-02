import request from 'superagent'

const rootUrl = '/api/orders'

export function createOrder (order) {
  return request.post(rootUrl)
    .send(order)
    .then(res => res.body)
}
