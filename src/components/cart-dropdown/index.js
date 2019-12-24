import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import CartItem from '../cart-item/index'
import { getCartItems } from '../../redux/cart/selectors'
import { toggleCartHidden } from '../../redux/cart/actions'

import {
  CartDropdownContainer,
  CartDropdownButton,
  EmptyMessageContainer,
  CartItemsContainer
} from './cart-dropdown.styles'

const CartDropDown = ({
  cartItems = [],
  toggleCartHidden = () => {}
}) => {
  const history = useHistory()
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessageContainer>
            Your cart is empty
          </EmptyMessageContainer>
        )}
      </CartItemsContainer>
      <CartDropdownButton
        onClick={() => {
          toggleCartHidden()
          history.push('/checkout')
        }}
      >
        GO TO CHECKOUT
      </CartDropdownButton>
    </CartDropdownContainer>
  )
}

const mapStateToProps = state => ({
  cartItems: getCartItems(state)
})

export default connect(mapStateToProps, { toggleCartHidden })(
  CartDropDown
)
