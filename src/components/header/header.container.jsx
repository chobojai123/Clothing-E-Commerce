import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

import Header from './index'

const GET_CART_HIDDEN = gql`
  {
    cartHidden @client
  }
`

const HeaderContainer = () => (
  <Query query={GET_CART_HIDDEN}>
    {({ loading, data }) => {
      const { cartHidden = false } = data || {}
      return <Header hidden={cartHidden} />
    }}
  </Query>
)

export default HeaderContainer
