import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  getCartItems,
  getCartTotal
} from '../../redux/cart/selectors'
import {
  addCartItem,
  removeCartItem,
  clearCartItem
} from '../../redux/cart/actions.js'

import CheckoutItem from '../../components/checkout-item'
import './checkout.styles.scss'

const CheckoutPage = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector(getCartItems)
  const cartTotal = useSelector(getCartTotal)
  const clearItem = item => dispatch(clearCartItem(item))
  const addItem = item => dispatch(addCartItem(item))
  const removeItem = item => dispatch(removeCartItem(item))

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => (
        <CheckoutItem
          key={cartItem.id}
          cartItem={cartItem}
          clearItem={clearItem}
          addItem={addItem}
          removeItem={removeItem}
        />
      ))}
      <div className="total">
        <span>TOTAL: ${cartTotal}</span>
      </div>
    </div>
  )
}

export default CheckoutPage
