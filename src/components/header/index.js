import React from 'react'
import { connect } from 'react-redux'
import { isEmpty } from 'lodash'
import * as PropTypes from 'prop-types'
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'

import { getCurrentUser } from '../../redux/user/selectors'
import { auth } from '../../firebase/firebase.utils'
import CartIconContainer from '../cart-icon/cart-icon.container'
import CartDropDown from '../cart-dropdown/index'

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  OptionDiv
} from './header.styles'

const Header = ({ currentUser = {}, hidden = false }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <CrownLogo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/shop">CONTACT</OptionLink>
      {isEmpty(currentUser) ? (
        <OptionLink to="/signin">SIGN IN</OptionLink>
      ) : (
        <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
      )}
      <CartIconContainer />
    </OptionsContainer>
    {hidden ? null : <CartDropDown />}
  </HeaderContainer>
)

const mapStateToProps = state => ({
  currentUser: getCurrentUser(state)
})

Header.propTypes = {
  currentUser: PropTypes.object
}

export default connect(mapStateToProps)(Header)
