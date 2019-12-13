import { combineReducers } from 'redux'
import user from './user/reducers'
import cart from './cart/reducers'

export default combineReducers({
  user,
  cart
})
