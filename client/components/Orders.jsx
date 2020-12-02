import React from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../actions'

function Orders (props) {
  return (
    <>
      <ul className="products">
        { props.orders.length === 0 && <h4>You have no orders.</h4> }
        { props.orders.length !== 0 && <h4>Your Orders</h4>}
        { props.orders.map(order => {
          return (
          <li key={order.id}>
            Order Code: {order.secret_code} 
          </li>
          )
        })}
      </ul>
    </>
  )
}

function mapStateToProps(globalState) {
  return {
    orders: globalState.orders
  }
}

export default connect(mapStateToProps)(Orders)