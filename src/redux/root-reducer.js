import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import user from './user/reducers'
import cart from './cart/reducers'

const persistConfig = {
  key: 'root',
  storage,
  whiteList: ['cart']
}

const rootReducer = combineReducers({
  user,
  cart
})

export default persistReducer(persistConfig, rootReducer)
