import React from 'react'
import { connect } from 'react-redux'

import CustomButton from '../custom-button'
import CartItem from '../cart-item/index'
import { getCartItems } from '../../redux/cart/selectors'

import './cart-dropdown.styles.scss'

const CartDropDown = ({ cartItems = [] }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
)

const mapStateToProps = state => {
  console.log(123)
  return {
    cartItems: getCartItems(state)
  }
}

export default connect(mapStateToProps)(CartDropDown)
