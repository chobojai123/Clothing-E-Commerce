import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import CustomButton from '../custom-button'
import CartItem from '../cart-item/index'
import { getCartItems } from '../../redux/cart/selectors'
import { toggleCartHidden } from '../../redux/cart/actions'

import './cart-dropdown.styles.scss'

const CartDropDown = ({
  cartItems = [],
  toggleCartHidden = () => {}
}) => {
  const history = useHistory()
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          toggleCartHidden()
          history.push('/checkout')
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  )
}

const mapStateToProps = state => ({
  cartItems: getCartItems(state)
})

export default connect(mapStateToProps, { toggleCartHidden })(
  CartDropDown
)
