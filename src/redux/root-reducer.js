import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import user from './user/reducers'
import cart from './cart/reducers'
import directory from './directory/reducers'
import shop from './shop/reducers'

const persistConfig = {
  key: 'root',
  storage,
  whiteList: ['cart']
}

const rootReducer = combineReducers({
  user,
  cart,
  directory,
  shop
})

export default persistReducer(persistConfig, rootReducer)
