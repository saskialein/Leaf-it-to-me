import React from 'react'
import { connect } from 'react-redux'

import { fetchProducts } from '../actions'
import Cart from './Cart'
import Orders from './Orders'
import Products from './Products'

export class App extends React.Component {
  componentDidMount () {
    this.props.dispatch(fetchProducts())
  }

  render () {
    return (
      <div className='app'>
        <h1>Let's Go Shopping!</h1>
        <Products/>
        <Cart/>
        <Orders/>
      </div>
    )
  }
}

export default connect()(App)
