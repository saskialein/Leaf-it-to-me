import React, { useState } from 'react'
import { connect } from 'react-redux'
import { checkoutOrder } from '../actions'

class Cart extends React.Component {
  state = {
    showCheckout: false,
    name: '',
    email: '',
  }

  handleChange = event => {
    // const state = {...this.state}
    // state[event.target.name] = event.target.value
    // this.setState(state)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    this.props.dispatch(checkoutOrder({
      name: this.state.name,
      email: this.state.email,
      products: this.props.cart.map(item => ({ id: item.product_id, quantity: item.quantity }))
    }))

    this.setState({
      showCheckout: false,
      name: '',
      email: '',
    })
  }

  render() {
    return (
      <>
        <ul className="cart">
          { this.props.cart.length === 0 && <h4>You have no items in your cart.</h4> }

          {/* {this.props.cart.length !== 0 && this.props.cart.map(cartItem => {
            return (
            <li key={cartItem.id}>{cartItem.name}</li>
            )
          })} */}
        </ul>

        { !this.state.showCheckout && <button className="cart" onClick={
            () => this.setState({ showCheckout: true})
        }>Checkout</button> }

        { this.state.showCheckout && <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input type="text" name="name" onChange={this.handleChange}/>
          </label>

          <label>
            Email
            <input type="text" name="email" onChange={this.handleChange}/>
          </label>

          <button type="submit">Checkout</button>
        </form> }
      </>
    )
  }
}

function mapStateToProps(globalState) {
  return {
    cart: globalState.cart
  }
}

export default connect(mapStateToProps)(Cart)