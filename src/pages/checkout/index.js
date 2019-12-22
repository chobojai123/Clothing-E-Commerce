import React, { Fragment } from 'react'
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
import StripeCheckoutButton from '../../components/stripe-button'
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
      <div className="total">TOTAL: ${cartTotal}</div>
      {cartTotal && (
        <Fragment>
          <div className="test-warning">
            "*Please use the following test credit card for payments*
            <br />
            4242 4242 4242 4242
          </div>
          <StripeCheckoutButton price={cartTotal} />
        </Fragment>
      )}
    </div>
  )
}

export default CheckoutPage
