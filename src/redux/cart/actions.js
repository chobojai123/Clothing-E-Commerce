import { TOGGLE_HIDDEN_CART, CART_ADD } from '../../constants'

export const toggleCartHidden = () => ({
  type: TOGGLE_HIDDEN_CART
})

export const addItem = item => ({
  type: CART_ADD,
  payload: item
})
