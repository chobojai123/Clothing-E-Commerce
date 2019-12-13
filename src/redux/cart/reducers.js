import { TOGGLE_HIDDEN_CART } from '../../constants'

const initialState = {
  hidden: true
}

const cart = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_HIDDEN_CART:
      return {
        ...state,
        hidden: !state.hidden
      }
    default:
      return state
  }
}

export default cart
