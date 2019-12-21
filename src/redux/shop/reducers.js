import { shopData } from './fakeData'

const initialState = {
  collections: shopData
}

const shop = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default shop
