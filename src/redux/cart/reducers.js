import {
  TOGGLE_HIDDEN_CART,
  CART_ADD,
  CART_REMOVE,
  CART_CLEAR_ITEM
} from '../../constants'
import { addItemToCart, removeItemToCart } from './utils'

const initialState = {
  hidden: true,
  cartItems: []
}

const cart = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_HIDDEN_CART:
      return {
        ...state,
        hidden: !state.hidden
      }
    case CART_ADD:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      }
    case CART_REMOVE:
      return {
        ...state,
        cartItems: removeItemToCart(state.cartItems, action.payload)
      }
    case CART_CLEAR_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.payload.id
        )
      }
    default:
      return state
  }
}

export default cart
