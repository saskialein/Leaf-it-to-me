import React from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../actions'

function Products (props) {
  return (
    <>
      <ul className="products">
        {props.products.map(product => {
          return (
          <li key={product.id}>
            {product.name} 
            <button className="cart" onClick={
              () => props.dispatch(addToCart(product.id))
            }>Add to Cart</button>
            </li>
          )
        })}
      </ul>
    </>
  )
}

function mapStateToProps(globalState) {
  return {
    products: globalState.products
  }
}

export default connect(mapStateToProps)(Products)