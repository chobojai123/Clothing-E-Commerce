import React from 'react'
import { connect } from 'react-redux'

import { toggleCartHidden } from '../../redux/cart/actions'
import { getCartItemsCount } from '../../redux/cart/selectors'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'

const CartIcon = ({ toggleCartHidden = () => {}, itemCount = 0 }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
)

const mapStateToProps = state => ({
  itemCount: getCartItemsCount(state)
})

export default connect(mapStateToProps, { toggleCartHidden })(
  CartIcon
)
