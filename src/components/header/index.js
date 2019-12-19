import React from 'react'
import { connect } from 'react-redux'
import { isEmpty } from 'lodash'
import { Link } from 'react-router-dom'
import * as PropTypes from 'prop-types'
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'

import { getIsCartHidden } from '../../redux/cart/selectors'
import { getCurrentUser } from '../../redux/user/selectors'
import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/index'
import CartDropDown from '../cart-dropdown/index'
import './header.styles.scss'

const Header = ({ currentUser = {}, hidden = false }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <CrownLogo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {isEmpty(currentUser) ? (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        ) : (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropDown />}
    </div>
  )
}

const mapStateToProps = state => ({
  currentUser: getCurrentUser(state),
  hidden: getIsCartHidden(state)
})

Header.propTypes = {
  currentUser: PropTypes.object,
  hidden: PropTypes.bool
}

export default connect(mapStateToProps)(Header)
