import { UPDATE_COLLECTIONS } from '../../constants'

const initialState = {
  collections: {}
}

const shop = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload
      }
    default:
      return state
  }
}

export default shop
