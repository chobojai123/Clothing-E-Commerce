import React from 'react'
import { connect } from 'react-redux'

import CustomButton from '../custom-button'

import './cart-dropdown.styles.scss'

const CartDropDown = ({ cartItems = [] }) => (
  <div className="cart-dropdown">
    <div className="cart-items"></div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
)

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
})

export default connect(mapStateToProps)(CartDropDown)
