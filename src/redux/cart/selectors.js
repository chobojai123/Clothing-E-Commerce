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

export const getCartTotal = createSelector(
  [getCartItems],
  cartItems =>
    cartItems.reduce(
      (acc, cartItem) => acc + cartItem.price * cartItem.quantity,
      0
    )
)

export const getIsCartHidden = createSelector(
  [getCart],
  cart => cart.hidden
)
