import {
  TOGGLE_HIDDEN_CART,
  CART_ADD,
  CART_REMOVE
} from '../../constants'

export const toggleCartHidden = () => ({
  type: TOGGLE_HIDDEN_CART
})

export const addItem = item => ({
  type: CART_ADD,
  payload: item
})

export const removeItem = item => ({
  type: CART_REMOVE,
  payload: item
})
