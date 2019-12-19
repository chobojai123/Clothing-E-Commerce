import { createSelector } from 'reselect'

export const getCart = state => state.cart

export const getCartItems = createSelector(
  [getCart],
  cart => cart.cartItems
)

export const getCartItemsCount = createSelector(
  [getCartItems],
  cartItems =>
    cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
)
