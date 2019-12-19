import {
  TOGGLE_HIDDEN_CART,
  CART_ADD,
  CART_REMOVE,
  CART_CLEAR_ITEM
} from '../../constants'

export const toggleCartHidden = () => ({
  type: TOGGLE_HIDDEN_CART
})

export const addCartItem = item => ({
  type: CART_ADD,
  payload: item
})

export const removeCartItem = item => ({
  type: CART_REMOVE,
  payload: item
})

export const clearCartItem = item => ({
  type: CART_CLEAR_ITEM,
  payload: item
})
