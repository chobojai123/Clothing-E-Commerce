import React from 'react'
import { connect } from 'react-redux'
import { isEmpty } from 'lodash'
import { Link } from 'react-router-dom'
import * as PropTypes from 'prop-types'
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'

import { auth } from '../../firebase/firebase.utils'

import './header.styles.scss'

const Header = ({ currentUser = {} }) => {
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
      </div>
    </div>
  )
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

Header.propTypes = {
  currentUser: PropTypes.object
}

export default connect(mapStateToProps)(Header)
